<template>
  <div class="card mb-3 p-2 bg-dark shadow">
    <div class="row m-2 g-0 ">
      <div class="col-md-6 d-flex ps-2 pe-4 justify-content-center">
        <img :src="post.imgUrl"  class="img-fluid rounded align-items-center  border border-info border-3" alt="Post Image ">
      </div>
      <div class="col-md-6 p-3 bg-light text-dark border border-info rounded border-3 text-center">
        <p>{{post.body}}</p>
        <h6>- {{post.creator.name}} | Likes: {{post.likes.length}}</h6>
        <p>Posted {{(post.createdAt).substring(0,10)}}</p>
        <button>Like 👍</button>
      </div>
    </div>
</div>
</template>

<script>
  import { postsService } from "../services/PostsService"


export default {
  props: { post: {type: Object, required: true }},

  setup(props){
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