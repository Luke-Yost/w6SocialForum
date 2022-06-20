<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-10 offset-1">

        <div class="container-fluid">
          <div class="row">
            <div class="col-12 border border-4 border-info rounded bg-dark m-2">
              
              <!-- <slot name="profileSpot">
                <template><Profile /></template>
              </slot> -->

              <!-- <Profile v-if="0 == 0" /> -->
              <div class="container">
                <div class="row">
                  <div class="col-md-8">
                    <div>
                      <h3>Email: {{Profile?.email}}</h3>
                      <h3>{{Profile?.bio}}</h3>
                    </div>
                    <h5>Class: {{Profile?.class}} | Graduated: {{Profile?.graduated}}</h5>
                    <h6>Github: {{Profile?.github}}</h6>
                    <h6>Linkedin: {{Profile?.linkedin}}</h6>
                    <h6>Resume: {{Profile?.resume}}</h6>
                  </div>
                  <div class="col-md-4">
                    <img class="img-fluid" :src="Profile?.picture" alt="Profile Image">
                    <h4>Name: {{Profile?.name}}</h4>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <Tisment v-for="t in tisments" :tisment="t" />
            </div>
            <div class="col-md-8">
              <ProfilePost v-for="p in profilePosts" :key="p.id" :profilePost="p" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from "vue"
import { AppState } from "../AppState"
import { useRoute } from "vue-router"
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { profilesService } from "../services/ProfilesService";

export default {
    name: 'Profile',
  setup(params){
    const route = useRoute();
    onMounted(async()=> {
      try {
        await profilesService.setSelectedProfile(route.params.id)
        await profilesService.getProfilePosts(route.params.id)
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    })
    return {
      Profile: computed(()=> AppState.selectedProfile),
      tisments: computed(() => AppState.tisments),
      profilePosts: computed(() => AppState.selectedProfilePosts),
    }
  }
}
</script>


<style lang="scss" scoped>

</style>