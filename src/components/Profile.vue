<template>
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
</template>


<script>
export default {
  props: { profile: {type: Object, required: true }},
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>