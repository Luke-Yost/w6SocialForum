<template>
<div class="container-fluid">
    <div class="row">
      <div class="col-md-10 offset-md-1 m-3">
        <h1 class="d-flex justify-content-center">Post making form</h1>
      </div>
      
        <div class="container">
          <div class="row">
            <div class="col-8">
              <Post v-for="p in posts" :key="p.id" :post="p" />
            </div>
            <div class="col-4">
              <!-- <div class="row">
                <div class="col-12">
                  <div class="border border-dark rounded">
                    <img class="img-fluid " src="https:/thiscatdoesnotexist.com" alt="">
                    <h3>title</h3>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
        <div class="col-12 d-flex justify-content-center m-3">
          <button v-if="previousPage != null" class="mx-3 btn-lg btn-info"  @click="getNextPage(previousPage)">Previous Page</button>
          <button v-if="nextPage != null" class="mx-3 btn-lg btn-info"  @click="getPreviousPage(nextPage)">Next Page</button>
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
      posts: computed(()=> AppState.posts),
      nextPage: computed(()=> AppState.nextPage),
      previousPage: computed(()=> AppState.previousPage),
      getNextPage(url){
        postsService.getNextPage(url)
      },
      getPreviousPage(url){
        postsService.getPreviousPage(url)
      }
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
