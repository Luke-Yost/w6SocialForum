<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
  </div>
  <form  class="row m-1" action="">
          <div class="col-10 offset-1 m-2">
            <label for="">Account Name</label>
            <input class="form-control" type="text" v-model="accountData.name" />
          </div>
          <div class="col-10 offset-1 m-2">
            <label for="">Post Image link</label>
            <input class="form-control" type="text" v-model="accountData.picture" />
          </div>
          <div class="col-10 offset-1 m-2">
            <label for="">Bio</label>
            <input class="form-control" type="text" v-model="accountData.bio" />
          </div>
          <div class="col-10 offset-1 m-2">
            <label for="">Cover Image</label>
            <input class="form-control" type="text" v-model="accountData.coverImg" />
          </div>
          <div class="col-10 offset-1 m-2">
            <label for="">GitHub</label>
            <input class="form-control" type="text" v-model="accountData.github" />
          </div>

          <button class="m-2" @click.prevent="changeProfile()">Edit Profile</button>
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
