import { AppState } from "../AppState";
import { api } from "./AxiosService"


class ProfilesService{
  async setSelectedProfile(creatorId){
    const res = await api.get(`/api/profiles/${creatorId}`)
    console.log('got profile', res.data);
    AppState.selectedProfile = res.data
  }
  async getProfilePosts(creatorId){
    const res = await api.get(`/api/profiles/${creatorId}/posts`)
    console.log('selected profiles posts', res.data);
  }
}

export const profilesService = new ProfilesService()