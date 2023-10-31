<template>
  <div
      class="durability-list"
      style="background-color: #fdfdfd;"
  >
    <div
        class="durability-item"
        v-for="(item,index) in items"
        :key="index"
        ref="menu"
    >
      <!-- 제품 이미지     -->
      <div class="image">
        <img
            :src="item.image"
            alt=""
            class="blex"
        />
      </div>
      <div class="title-box">
        <!-- 제품 타이틀     -->
        <div class="top-title">
          {{ $t(item.title) }}
        </div>
        <!-- 제품 설명     -->
        <div class="dec">
          {{ $t(item.desc) }}
        </div>
      </div>
    </div>
    <!--    <scroll-top-button/>-->
  </div>


</template>

<script>
import ScrollTopButton from '@/views/pages/durability/components/ScrollTopButton.vue'
import { EventBus } from '@/EventBus'

export default {
  name      : 'MenuList',
  components: {
    ScrollTopButton
  },
  data      : () => ({
    load : false,
    items: [
      {
        image: require('@/assets/images/durability-temperature.png'),
        title: 'durabilityTester.title.1',
        desc : 'durabilityTester.dec.1'
      },
      {
        image: require('@/assets/images/durability-waterbath.png'),
        title: 'durabilityTester.title.2',
        desc : 'durabilityTester.dec.2'
      },
      {
        image: require('@/assets/images/durability-saltwater.png'),
        title: 'durabilityTester.title.3',
        desc : 'durabilityTester.dec.3'
      },
      {
        image: require('@/assets/images/durability-battery.png'),
        title: 'durabilityTester.title.4',
        desc : 'durabilityTester.dec.4'
      },
      {
        image: require('@/assets/images/durability-cleaner.png'),
        title: 'durabilityTester.title.5',
        desc : 'durabilityTester.dec.5'
      },
      {
        image: require('@/assets/images/durability-door.png'),
        title: 'durabilityTester.title.6',
        desc : 'durabilityTester.dec.6'
      },
      {
        image: require('@/assets/images/durability-controller.png'),
        title: 'durabilityTester.title.7',
        desc : 'durabilityTester.dec.7'
      },
      {
        image: require('@/assets/images/durability-vibration.png'),
        title: 'durabilityTester.title.8',
        desc : 'durabilityTester.dec.8'
      },
      {
        image: require('@/assets/images/durability-8m.png'),
        title: 'durabilityTester.title.9',
        desc : 'durabilityTester.dec.9'
      },
      {
        image: require('@/assets/images/durability-dust.png'),
        title: 'durabilityTester.title.10',
        desc : 'durabilityTester.dec.10'
      }
    ]
  }),
  methods   : {
    goTo(index) {
      let timer = setInterval(() => {
        if (window.locoScroll) {
          const target = document.querySelectorAll('.durability-item')
          if (target && target.length > 0) {
            window.locoScroll.scrollTo(target[index])
            clearInterval(timer)
            timer = null
          }
        }
      }, 300)
    }
  },
  mounted() {
    EventBus.$on('goTo', this.goTo)
    this.load = true
    this.$emit('router-mounted')
  },
  beforeDestroy() {
    EventBus.$off('goTo', this.goTo)
  }

}
</script>

<style
    scoped
    lang="scss"
>
.durability-list {
  width: 70%;
  height: 100%;
  white-space: pre-line;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  .durability-item {
    display: flex;
    @media screen and (max-width: 1024px) {
      flex-wrap: wrap;
    }

    &::before {
      width: 100%;
    }

    .image {
      width: 316px;
      height: 325px;
      display: flex;
      justify-content: center;
      align-items: center;
      @media screen and (max-width: 1024px) {
        width: 100%;
      }
    }

    .title-box {
      width: auto;
      @media screen and (max-width: 1024px) {
        width: 100%;
      }

      .top-title {
        color: #000;
        font-size: 22px;
        font-weight: 700;

        &::after {
          width: 100%;
        }
      }

      .dec {
        color: #494949;
        font-size: 12px;
        font-weight: 400;
        padding-top: 20px !important;
        max-width: 320px;
        word-break: keep-all;
        line-height: 16px;
        @media screen and (max-width: 1024px) {
          max-width: 100%;
        }
      }

      .sub-dec {
        line-height: 16px;

        p {
          color: #494949;
          font-size: 12px;
          font-weight: 400;
          line-height: 16px;
        }
      }
    }
  }
}
</style>