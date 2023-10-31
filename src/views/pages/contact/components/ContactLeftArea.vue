<template>
  <div class="contact-left-area" ref="container">
    <div id="map" ref="map" style="width:100%;height:50vh;"></div>
  </div>
</template>

<script>
export default {
  name: 'ContactArea',
  mounted() {

    this.$nextTick(() => {

      setTimeout(() => {
        // 카카오맵 설정
        const container = this.$refs.map
        const options = {
          center: new kakao.maps.LatLng(37.247528199044, 127.05092718441),
          level : 3
        }
        const map = new kakao.maps.Map(container, options)

        const markerPosition = new kakao.maps.LatLng(37.247528199044, 127.05092718441)
        const marker = new kakao.maps.Marker({
                                               position: markerPosition
                                             })
        marker.setMap(map)
      }, 1000)
    })
  }
}
</script>

<style scoped lang="scss">
.contact-left-area {
  width: 50% !important;
  @media screen and (max-width: 1024px) {
    width: 100% !important;
  }
}
</style>