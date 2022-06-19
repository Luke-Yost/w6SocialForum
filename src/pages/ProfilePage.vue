<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-10 offset-1">

        <div class="container-fluid">
          <div class="row">
            <div class="col-12 border border-4 border-info rounded bg-dark m-2">
               <div class="container">
  <div class="row">
    <div class="col-md-8">
      <div>
        <h1>Email: {{profile.email}}</h1>
        <h3>{{profile.bio}}</h3>
      </div>
      <h5>Class: {{profile.class}} | Graduated: {{profile.graduated}}</h5>
      <h6>Github: {{profile.github}}</h6>
      <h6>Linkedin: {{profile.linkedin}}</h6>
      <h6>Resume: {{profile.resume}}</h6>
    </div>
    <div class="col-md-4">
      <img class="img-fluid" :src="profile.picture" alt="Profile Image">
      <h4>Name: {{profile.name}}</h4>
    </div>
  </div>
  </div>
              
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>


<script>
import { computed } from "vue"
import { AppState } from "../AppState"
import Profile  from "../components/Profile.vue"

export default {
    name: 'Profile',
  setup(){
    return {
      profile: computed(()=> AppState.selectedProfile),
    }
  },
  components: { Profile }
}
</script>


<style lang="scss" scoped>

</style>