<template>
<div class="container-fluid">
    <div class="row">
      <div class="col-md-10 offset-md-1 m-3">
        <h1 class="text-center">Post making form</h1>
      </div>
      
        <div class="container">
          <div class="row">
            <div class="col-10 offset-1">
              <Post v-for="p in posts" :key="p.id" :post="p" />
            </div>
          </div>
          
        </div>
        
        
        
      </div>
    </div>



</template>

<script>
  import { computed, onMounted } from "vue"
import { AppState } from "../AppState"
import { postsService } from "../services/PostsService"

export default {
  name: 'Home',
  setup(){
    onMounted(async()=> {
      const res = await postsService.getPosts()
    })
    return{
      posts: computed(()=> AppState.posts)
    }
  }
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
