<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
  </div>
  <form  class="row bg-dark rounded m-3 p-3 d-flex" action="">
          <div class="col-10 offset-1 m-2 justify-content-center">
            <label for="">Account Name</label>
            <input class="form-control" type="text" v-model="accountData.name" />
          </div>
          <div class="col-10 offset-1 m-2 justify-content-center">
            <label for="">Post Image link</label>
            <input class="form-control" type="text" v-model="accountData.picture" />
          </div>
          <div class="col-10 offset-1 m-2 justify-content-center">
            <label for="">Bio</label>
            <input class="form-control" type="text" v-model="accountData.bio" />
          </div>
          <div class="col-10 offset-1 m-2 justify-content-center">
            <label for="">Cover Image</label>
            <input class="form-control" type="text" v-model="accountData.coverImg" />
          </div>
          <div class="col-10 offset-1 m-2 justify-content-center">
            <label for="">GitHub</label>
            <input class="form-control" type="text" v-model="accountData.github" />
          </div>
          <div class="col-10 offset-1 m-2 justify-content-center">
            <label for="">Linked In</label>
            <input class="form-control" type="text" v-model="accountData.linkedin" />
          </div>
          <div class="col-10 offset-1 m-2 justify-content-center">
            <label for="">Resume</label>
            <input class="form-control" type="text" v-model="accountData.resume" />
          </div>
          <div class="col-10 offset-1 m-2 justify-content-center">
            <label for="">Class</label>
            <input class="form-control" type="text" v-model="accountData.class" />
          </div>
          <div class="col-10 offset-1 m-2 justify-content-center">
          <button class="m-2 border border-2 border-light rounded bg-info text-light" @click.prevent="changeProfile()">Edit Profile</button>
          </div>
        </form>
</template>

<script>
import { computed, ref, watchEffect } from 'vue'
import { AppState } from '../AppState'
import { postsService } from "../services/PostsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
export default {
  name: 'Account',
  props: { editAccount: { type: Object, required: false, default: {}}},
  setup(props) {
    const accountData = ref({});
    watchEffect(()=>{
      logger.log(props.editAccount);
      accountData.value = props.editAccount;
    })
    return {
      accountData,
      account: computed(() => AppState.account),
      async changeProfile(){
        try {
          logger.log(accountData.value);
          await postsService.changeProfile(accountData.value);
          Pop.toast('account updated!', 'success')
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      }
    
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
