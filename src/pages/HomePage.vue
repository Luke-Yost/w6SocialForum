<template>
<div class="container-fluid">
    <div class="row">
      <div v-if="user.isAuthenticated == false" class="col-10 offset-1 m-3 border border-3 border-info d-flex justify-content-center rounded bg-dark">
        <h2>Login to Post</h2>
      </div>
      <div class="col-10 offset-1 m-3 border border-3 border-info d-flex justify-content-center rounded bg-dark">
        <form v-if="user.isAuthenticated == true" class="row m-1" action="">
          <div class="col-10 offset-1m-2">
            <label for="">Post Body</label>
            <textarea
              class="form-control"
              name=""
              id=""
              cols="25"
              rows="5"
              v-model="postData.body"
            ></textarea>
          </div>
          <div class="col-10 offset-1 m-2">
            <label for="">Post Image link</label>
            <input class="form-control" type="text" v-model="postData.imgUrl" />
          </div>
          <button class="m-2" @click="createPost()">Post Post!</button>
        </form>
      </div>
      
        <div class="container">
          <div class="row">
            <div class="col-8">
              <Post v-for="p in posts" :key="p.id" :post="p" />
            </div>
            <div class="col-4">
              <Tisment v-for="t in tisments" :tisment="t" />
              <Tisment v-for="t in tisments" :tisment="t" />
              <Tisment v-for="t in tisments" :tisment="t" />
              
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
  import { computed, onMounted, ref, watchEffect } from "vue"
import { AppState } from "../AppState"
import { postsService } from "../services/PostsService"
import { tismentsService } from "../services/TismentsService"
import Tisment from "../components/Tisment.vue"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"

export default {
    name: "Home",
    props: { editPost: { type: Object, required: false, default: {}}},
    setup(props) {
        const postData = ref({});
        watchEffect(()=>{
          logger.log(props.editPost);
          postData.value = props.editPost;
        })
        onMounted(async () => {
            const res = await postsService.getPosts();
        });
        onMounted(async () => {
            const res = await tismentsService.getTisments();
        });
        return {
            postData,
            async createPost(){
              try {
                logger.log(postData.value);
                await postsService.createPost(postData.value);
                postData.value = {};
                Pop.toast("Posted Post!", "success")
              } catch (error) {
                logger.error(error)
                Pop.toast(error.message, 'error')
              }
            },
            user: computed(()=> AppState.user),
            posts: computed(() => AppState.posts),
            nextPage: computed(() => AppState.nextPage),
            previousPage: computed(() => AppState.previousPage),
            tisments: computed(() => AppState.tisments),
            getNextPage(url) {
                postsService.getNextPage(url);
            },
            getPreviousPage(url) {
                postsService.getPreviousPage(url);
            }
        };
    },
    components: { Tisment }
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
