<template>
  <div class="durability-area pb-0">
    <div class="durability-container">

      <!--      왼쪽 메뉴 리스트-->
      <left-menu-bar/>

      <!--      메뉴 이미지 및 설명-->
      <menu-list ref="menu"/>
    </div>
  </div>
</template>

<script>
import LeftMenuBar from '@/views/pages/durability/components/LeftMenuBar.vue'
import MenuList from '@/views/pages/durability/components/MenuList.vue'
import { EventBus } from '@/EventBus'

export default {
  name: 'index',
  components: {
    MenuList,
    LeftMenuBar
  },
  computed: {
    itemIndex () {
      return (this.$route && this.$route.query && this.$route.query.itemIndex)
    }
  },
  methods: {
    // go(index) {
    //   if (index > -1) {
    //     this.$refs.menu.goTo(index)
    //   }
    // }
  },
  mounted () {
    this.load = true
    this.$emit('router-mounted')
    this.$nextTick(() => {
      EventBus.$emit('goTo', this.itemIndex)
    })
    // if ( this.$route.query && this.$route.query.itemIndex && this.itemIndex && this.itemIndex > -1 ) {
    //   setTimeout(() => {
    //     // this.go(this.itemIndex)
    //   }, 400)
    // }
  }
}
</script>

<style
    scoped
    lang="scss"
>
.durability-area::v-deep {
  width: 100%;
  justify-content: center;
  display: flex;

  .durability-container {
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