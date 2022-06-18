import { AppState } from "../AppState";
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
    Pop.toast( 'Post liked!', 'top-center', 3000 )
  }

}

export const postsService = new PostsService()