<template>
  <div class="performance-list"
       style="background-color: #fdfdfd;"
  >
    <div class="performance-item"
         v-for="(item,index) in items"
         :key="index"
         ref="menu"
         style="background-color: #fdfdfd;"
         :class="$store.state.windowWidth < 1024 ? 'px-0' : ''"
    >
      <!-- 제품 이미지     -->
      <div class="image">
        <img
            :src="item.image"
            alt=""
            class="blex"
        />
      </div>
      <div class=" title-box">
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
import ScrollTopButton from '@/views/pages/performance/components/ScrollTopButton.vue'
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
        image: require('@/assets/images/performance-calorimeter.png'),
        title: 'capacityTester.title.1',
        desc : 'capacityTester.dec.1'
      },
      {
        image: require('@/assets/images/performance-refrigerator.png'),
        title: 'capacityTester.title.2',
        desc : 'capacityTester.dec.2'
      },
      {
        image: require('@/assets/images/performance-airflow.png'),
        title: 'capacityTester.title.3',
        desc : 'capacityTester.dec.3'
      },
      {
        image: require('@/assets/images/performance-washer.png'),
        title: 'capacityTester.title.4',
        desc : 'capacityTester.dec.4'
      },
      {
        image: require('@/assets/images/performance-gas.png'),
        title: 'capacityTester.title.5',
        desc : 'capacityTester.dec.5'
      }
    ]
  }),
  methods   : {
    goTo(index) {
      let timer = setInterval(() => {
        if (window.locoScroll) {
          const target = document.querySelectorAll('.performance-item')
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
.performance-list {
  width: 70%;
  height: 100%;
  white-space: pre-line;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  .performance-item {
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