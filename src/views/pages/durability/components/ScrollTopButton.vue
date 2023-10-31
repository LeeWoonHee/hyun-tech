<template>
  <div class="scroll-top-button">
    <button
        class="top-btn"
        @click="scrollTop"
    >
      <span class="button-arrow">↑</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ScrollTopButton',
  methods: {
    scrollTop () {
      let location = document.querySelector('.durability-area').offsetTop

      window.locoScroll.scrollTo(0,0 )
    }
  }
}
</script>

<style scoped lang="scss">
.scroll-top-button{
  display:flex;
  justify-content: end;
  //position:fixed;
  //bottom:10%;
  //right:10%;

  //right:10px;
}
</style>