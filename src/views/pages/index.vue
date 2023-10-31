<template>
  <main class="home">
    <!--    banner-area-->
    <banner-area/>

    <mobile-feature-area/>

    <!--    our-approach-area-->
    <our-approach-area/>
    <!--    product-area-->
    <team-area/>

  </main>

</template>

<script>
import BannerArea from '@/views/pages/components/BannerArea.vue'
import OurApproachArea from '@/views/pages/components/OurApproachArea.vue'
import TeamArea from '@/views/pages/components/TeamArea.vue'
import MobileFeatureArea from '@/views/pages/components/MobileFeatureArea.vue'

export default {
  name      : 'index',
  components: {
    OurApproachArea,
    BannerArea,
    TeamArea,
    MobileFeatureArea
  },
  data: () => ({
    load: false
  }),
  mounted() {
    this.$emit('router-mounted')
  }
}
</script>

<style scoped lang="scss">
</style>