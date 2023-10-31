<template>
  <div class="performance-area pb-0">
    <div class="performance-container">

      <!--      왼쪽 메뉴 리스트-->
      <left-menu-bar />

      <!--      메뉴 이미지 및 설명-->
      <menu-list ref="menu"/>

    </div>
  </div>
</template>

<script>
import LeftMenuBar from '@/views/pages/performance/components/LeftMenuBar.vue'
import MenuList from '@/views/pages/performance/components/MenuList.vue'
import { EventBus } from '@/EventBus'

export default {
  name      : 'index',
  components: {
    MenuList,
    LeftMenuBar
  },
  computed  : {
    itemIndex() {
      return (this.$route && this.$route.query && this.$route.query.itemIndex)
    }
  },
  data      : () => ({
    load: false
  }),
  mounted() {
    this.load = true
    this.$emit('router-mounted')
    this.$nextTick(() => {
      EventBus.$emit('goTo', this.itemIndex)
    })
  }
}
</script>

<style
    scoped
    lang="scss"
>
.performance-area::v-deep {
  width: 100%;
  justify-content: center;
  display: flex;

  .performance-container {
    width: 100%;
    justify-content: center;
    display: flex;
    flex-wrap: nowrap;
    @media screen and (max-width: 1024px) {
      flex-wrap: wrap;
    }
  }
}
</style>