<template>
  <div
      id="app"
      ref="app"
      data-scroll-container
  >
    <the-nav
        data-scroll
        data-scroll-sticky
        data-scroll-target=".main"
    />

    <router-view
        @router-mounted="routerMounted"
        class="main"
    />

    <the-footer/>
    <div
        class="floating-button ml-80"
        data-scroll
        data-scroll-sticky
        data-scroll-target=".main"
        data-scroll-offset="0, 50%"
    >
      <router-link
          tag="a"
          to="/contact-us"
          ref="contactUsButton"
          class="contact-us-button bg-opacity "
      >
        <img
            src="@/assets/images/icon/floating_web.svg"
            alt=""
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import LocomotiveScroll from 'locomotive-scroll'
import TheFooter from '@/components/TheFooter.vue'
import TheNav from '@/components/TheNav.vue'
import { EventBus } from '@/EventBus'

export default {
  name: 'App',
  components: {
    TheNav,
    TheFooter
  },
  data: () => ({
    locoScroll: null,
    mobile: false,
    scrollY: 0,
    lang: null
  }),
  computed: {
    scroller () {
      return document.getElementById('app')

    }
  },
  methods: {
    async routerMounted () {
      await this.$loadScript('./js/jquery-3.6.0.min.js')
      await this.$loadScript('./js/bootstrap.bundle.min.js')
      await this.$loadScript('./js/meanmenu.min.js')
      await this.$loadScript('./js/owl.carousel.min.js')
      await this.$loadScript('./js/nice-select.min.js')
      await this.$loadScript('./js/magnific-popup.min.js')
      await this.$loadScript('./js/appear.min.js')
      await this.$loadScript('./js/odometer.min.js')
      await this.$loadScript('./js/form-validator.min.js')
      await this.$loadScript('./js/ajaxchimp.min.js')
      await this.$loadScript('./js/wow.min.js')
      await this.$loadScript('./js/custom.js')
      await this.initLocoScroll()
      this.$store.commit('UPDATE_WINDOW_WIDTH', window.innerWidth)
      if ( window.locoScroll ) {
        window.locoScroll.scrollTo('top', {
          'offset': 0,
          // 'callback': function() {
          //   // do something...
          // },
          'duration': 600,
          'easing': [0.25, 0.00, 0.35, 1.00],
          'disableLerp': true
        })
      }
    },
    initLocoScroll () {
      if ( window.locoScroll ) {
        this.destroyLoco()
      }
      window.locoScroll = this.locoScroll = new LocomotiveScroll({
        el: this.scroller,
        smooth: true,
        inertia: 0.5,
        lerping: .1,
        smartphone: {
          smooth: true,
          multiplier: .5,
          touchMultiplier: 2
        },
        tablet: {
          smooth: true,
          multiplier: .5,
          touchMultiplier: 2
        },
        getDirection: true
      })

      EventBus.$on('scrollTo', (obj) => {
        if ( obj ) {
          this.locoScroll.scrollTo(obj)
        } else {
          this.locoScroll.scrollTo(this.scroller)
        }
        this.$scrollTrigger.update()
      })

      this.locoScroll.on('scroll', (obj) => {
        this.$store.commit('UPDATE_WINDOW_SCROLL_Y', obj.scroll.y)
      })
    },
    destroyLoco () {
      window.locoScroll.destroy()
      this.locoScroll.destroy()
      window.locoScroll = null
      this.locoScroll = null
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted(){
    console.log(window.locoScroll)
  }
}

</script>

