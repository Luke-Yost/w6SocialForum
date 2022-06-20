<template>

<div class="container">
  <div class="row">
    <div class="col-10 offset-1">
  <div class="about d-flex justify-content-center">
    <div class="card m-3 shadow " style=" max-width: 70vw;">
  <div class="row g-0">
    <div class="col-md-4 p-3">
      <img src="../assets/img/Screenshot 2022-04-25 175200.png" class="img-fluid rounded" alt="Luke Yost">
    </div>
    <div class="col-md-8 d-flex align-items-center">
      <div class="card-body m-2 border border-info rounded border-3">
        <h2 class="card-title">About our Founder</h2>
        <p class="card-text">We were created by Luke Yost on june 17th, 2022. Knowing how important social connections are this application was created with the intention of revolutionizing the Codeworks Social Networking system. By having a single online space where all of the Codeworks community would be able to share information not just about their professional careers, but also about their personal lives. </p>
      </div>
    </div>
  </div>
</div>
</div>
</div>
<div class="col-6 offset-3">
  <Tisment v-for="t in tisments" :tisment="t" />
</div>
</div>
</div>
</template>


<script>
  import { computed, onMounted } from "vue"
import { AppState } from "../AppState"

import { tismentsService } from "../services/TismentsService"
import Tisment from "../components/Tisment.vue"

export default {
    name: "AboutPage",
    setup() {
        
        onMounted(async () => {
            const res = await tismentsService.getTisments();
        });
        return {
            tisments: computed(() => AppState.tisments),
          
        };
    },
    components: { Tisment }
}
</script>
<!-- <script>
import Tisment from "../components/Tisment.vue";
import { tismentsService } from "../services/TismentsService"
export default {
    name: "AboutPage",
    components: { Tisment }
}
</script> -->
