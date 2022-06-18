<template>
  <div class="row card m-3">
    <div class="col-12 d-flex justify-content-evenly">
      <div class="justify-content-start">
          <img class="postImg" :src="post.imgUrl" alt="post image">
          <p>{{post.body }}</p>
          <button>Likes: {{post.likeIds.length}}</button>
      </div>
      <div class="justify-content-end py-5">
        <h3>Poster: Name{{}}</h3>
        <img class="blog-img" :src="post.creator.picture" alt="account image">
      </div>
    </div>
  </div>
</template>


<script>
  import { postsService } from "../services/PostsService"

export default {
  props: { post: {type: Object, required: true }},
  setup(){
    return {

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