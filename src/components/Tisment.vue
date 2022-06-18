<template>
  <div class="row">
    <div class="col-12 my-4">
      <div class="border border-dark rounded p-2 bg-dark">
        <img class="img-fluid rounded" :src="tisment.tall" alt="cool tisment">
        <h3 class="text-center m-3 border border-info border-3 bg-light text-dark rounded p-2">{{tisment.title}}</h3>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {tisment: {type: Object, required: true}},
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>