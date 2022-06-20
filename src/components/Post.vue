<template>
  <div class="card mb-3 p-2 bg-dark shadow">
    <div class="row m-2 g-0 ">
      <div class="col-md-6 d-flex ps-2 pe-4 justify-content-center">
        <img :src="post.imgUrl? post.imgUrl : 'https://yt3.ggpht.com/a/AATXAJxRZGFE2kbPB5rkkBtXLKQer65c3ApSAnauMw=s900-c-k-c0xffffffff-no-rj-mo'"  class="img-fluid rounded align-items-center  border border-info border-3" alt="Post Image ">
      </div>
      <div class="col-md-6 p-2 bg-light text-dark border border-info rounded border-3 text-center">
        <p>{{post.body}}</p>
        <h4>Likes: {{post.likes.length}}</h4>
        <button v-if="user.isAuthenticated == true" @click="likePost(post.id)" class="btn btn-info border border-dark border-2">Like 👍</button>
        <p class="mt-2">Posted {{(post.createdAt).substring(0,10)}}</p>
        
        <router-link @click="setSelectedProfile(post.creatorId)" :to="{name: 'Profile', params: {id: post.creator.id} }">
          <div class="border bg-dark rounded">
            <h6 class="m-1">- {{post.creator.name}}</h6>
            <img class="img-fluid" :src="post.creator.picture" alt="creator picture">
            <p class="m-1">Go to Profile</p>
          </div>
        </router-link>


        <button v-show="post.creatorId == account.id" @click="deletePost()" class="mt-1 rounded bg-danger text-light">Delete Post</button>
      </div>
    </div>
</div>
</template>

<script>
  import { computed } from "vue"
import { useRouter } from "vue-router"
import { AppState } from "../AppState"
import { postsService } from "../services/PostsService"
import { profilesService } from "../services/ProfilesService"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"


export default {
  props: { post: {type: Object, required: true },
          },
        
  setup(props){
    const router = useRouter()
    return {
      user: computed(()=> AppState.user),
      account: computed(()=> AppState.account),
      async deletePost(){
        try {
          await postsService.deletePost(props.post.id);
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      likePost(id){
        postsService.likePost(id)
      },
      setSelectedProfile(creatorId){
        profilesService.setSelectedProfile(props.post.creatorId)
        profilesService.getProfilePosts(props.post.id)
        router.push({
          name: "Profile",
          params: {id: props.post.creatorId}
        })
      }
    }
  }
}
</script>


<style lang="scss" scoped>
  .postImg{
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  .blog-img {
    height: 10vh;
  }

</style>