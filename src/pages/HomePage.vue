<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="home-card p-5 bg-dark rounded elevation-3 shadow  border border-info border-3">
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.eFNZswtHM9BoSpaD4H9xVAHaHa%26pid%3DApi&f=1" alt="CodeWorks Logo" class="rounded-circle">
      <h1 class="my-5 bg-info text-white p-3 rounded text-center">
        Welcome to The Network
      </h1>
      <router-link :to="{name: 'Posts' }">
      <div class="d-grid gap-2">
      <button class="btn-lg  btn-outline-info" >View Posts</button>
      </div>
      </router-link>
    </div>
  </div>



</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
