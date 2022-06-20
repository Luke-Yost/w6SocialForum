<template>
  <div class="card mb-3 p-2 bg-dark shadow">
    <div class="row m-2 g-0 ">
      <div class="col-md-6 d-flex ps-2 pe-4 justify-content-center">
        <img :src="post.imgUrl"  class="img-fluid rounded align-items-center  border border-info border-3" alt="Post Image ">
      </div>
      <div class="col-md-6 p-2 bg-light text-dark border border-info rounded border-3 text-center">
        <p>{{post.body}}</p>
        <h4>Likes: {{post.likes.length}}</h4>
        <button v-if="user.isAuthenticated == true" @click="likePost(post.id)" class="btn btn-info border border-dark border-2">Like 👍</button>
        <p class="mt-2">Posted {{(post.createdAt).substring(0,10)}}</p>
        
        <router-link @click="setSelectedProfile(post.creatorId)" :to="{name: 'Profile', params: {id: post.id} }">
          <div class="border bg-dark rounded">
            <h6 class="m-1">- {{post.creator.name}}</h6>
            <img class="img-fluid" :src="post.creator.picture" alt="creator picture">
            <p class="m-1">Go to Profile</p>
          </div>
        </router-link>


        <button v-show="post.creatorId == account.id" class="mt-1 rounded bg-danger text-light">Delete Post</button>
      </div>
    </div>
</div>
</template>

<script>
  import { computed } from "vue"
import { AppState } from "../AppState"
import { postsService } from "../services/PostsService"
import { profilesService } from "../services/ProfilesService"


export default {
  props: { post: {type: Object, required: true },
          },
        
  setup(props){
    return {
      user: computed(()=> AppState.user),
      account: computed(()=> AppState.account),
      likePost(id){
        postsService.likePost(id)
      },
      setSelectedProfile(creatorId){
        profilesService.setSelectedProfile(creatorId)
        profilesService.getProfilePosts(creatorId)
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