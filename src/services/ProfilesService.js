import { api } from "./AxiosService"


class ProfilesService{
  async setSelectedProfile(creatorId){
    const res = await api.get()
  }
  async getProfilePosts(creatorId){
    const res = await api.get()
  }
}

export const profilesService = new ProfilesService()