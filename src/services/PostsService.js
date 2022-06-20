import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { api } from "./AxiosService";

class PostsService {
  async getPosts(){
    const res = await api.get("/api/posts")
    console.log(res.data);
    AppState.posts = res.data.posts
    console.log(AppState.posts);
    // capture
    AppState.nextPage = res.data.older
    AppState.previousPage =  res.data.newer
    
    
  }
  async deletePost(id){
    const res = await api.delete(`api/posts/${id}`);
    logger.log('delete post', res.data)
  }

  async createPost(postData){
    const res = await api.post('api/posts', postData)
    logger.log('postin post', res.data)
    AppState.posts.push(res.data)
  }

  async getNextPage(url){
    const res = await api.get(url)
    console.log('next page', res.data);
    AppState.posts = res.data.posts
    AppState.nextPage = res.data.older
    AppState.previousPage =  res.data.newer
  }
  async getPreviousPage(url){
    const res = await api.get(url)
    console.log('next page', res.data);
    AppState.posts = res.data.posts
      
    AppState.nextPage = res.data.older
    AppState.previousPage =  res.data.newer
  }

  async likePost(id){
    const res = await api.post(`/api/posts/${id}/like`)
    console.log('liked post', res.data);
    // AppState.posts = res.data.posts

    // AppState.posts.filter(p => p.id != id) = res.data
    // likedPost = res.data.post 
    // AppState.posts = [...AppState.posts,likedPost]
  }

}

export const postsService = new PostsService()