<template>

    <div class="row border border-info border-3 rounded d-flex m-2">
      <div class="col-md-6 align-items-center">
        <img class="img-fluid rounded " :src="profilePost?.imgUrl" alt="post image">
      </div>
      <div class="col-md-6">
        <p>{{profilePost?.body}}</p>
        <h4>likes: {{profilePost?.likes.length}}</h4>
        <button @click="likePost(profilePost?.id)" class="btn btn-info border border-dark border-2">Like 👍</button>
        <p class="mt-2">Posted {{(profilePost?.createdAt).substring(0,10)}}</p>
      </div>
    </div>

</template>


<script>
import { postsService } from "../services/PostsService"

export default {
  props: { profilePost: { type: Object, required: true}},
  setup(){
    return {
      likePost(id){
        postsService.likePost(id)
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>