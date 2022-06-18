import { AppState } from "../AppState";
import { api } from "./AxiosService";


class TismentsService{
  async getTisments(){
    const res = await api.get("/api/ads")
    console.log(res.data);
    AppState.tisments = res.data
    
  }
}

export const tismentsService = new TismentsService()