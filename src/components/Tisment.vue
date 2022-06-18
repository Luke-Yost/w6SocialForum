<template>
  <div class="row">
                <div class="col-12">
                  <div class="border border-dark rounded">
                    <img class="img-fluid " :src="tisment.tall" alt="cool tisment">
                    <h3>{{tisment.title}}</h3>
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