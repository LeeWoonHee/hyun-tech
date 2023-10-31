<template>
  <div class="left-menu-bar">

    <!--   1024 이상 웹 화면에서 보여지는 sticky 기준 -->
    <div class="left-menu"
         v-if="$store.state.windowWidth > 1024"
         data-scroll
         data-scroll-sticky
         data-scroll-target=".main">
      <h3>{{ $t('nav.1') }}</h3>
      <div class="left-menu-item">
        <ul class="menu" :class="this.$i18n.locale === 'en' ? 'menu-en' : ''">
          <li
              v-for="(list, index) in lists"
              :key="index"
              @click="clickItem(index)"
              :class="{active: active === index}"
              class="list py-3"
          >
            {{ $t(list.capacityTester) }}
          </li>
        </ul>
      </div>
    </div>

    <!--   1024 이하 모바일 화면에서 보여지는 sticky 기준 -->
    <div class="left-menu"
         v-if="$store.state.windowWidth < 1024"
         data-scroll
         data-scroll-sticky
         data-scroll-target=".performance-area">
      <h3>{{ $t('nav.1') }}</h3>
      <div class="left-menu-item">
        <ul class="menu" :class="this.$i18n.locale === 'en' ? 'menu-en' : ''">
          <li
              v-for="(list, index) in lists"
              :key="index"
              @click="clickItem(index)"
              :class="{active: active === index}"
              class="list border-bottom-0"
          >
            {{ $t(list.capacityTester) }}
          </li>
        </ul>
      </div>
    </div>


  </div>
</template>

<script>

import { EventBus } from '@/EventBus'

export default {
  name    : 'LeftMenuBar',
  computed: {
    itemIndex() {
      return this.$route.query && this.$route.query.itemIndex
    }
  },
  watch   : {
    '$route.query.itemIndex': {
      deep     : true,
      immediate: true,
      handler(val) {
        if (val) {
          this.active = parseInt(val)
        }
      }
    },
    active(val) {
      EventBus.$emit('goTo', val)
    }
  },
  data    : () => ({
    load  : false,
    lists : [
      { capacityTester: 'capacityTester.title.1' },
      { capacityTester: 'capacityTester.title.2' },
      { capacityTester: 'capacityTester.title.3' },
      { capacityTester: 'capacityTester.title.4' },
      { capacityTester: 'capacityTester.title.5' }
    ],
    active: 0
  }),
  methods : {
    clickItem(index) {
      // this.active = index
      this.$router.push({ query: { itemIndex: index } }).catch(() => {
      }).finally(() => {
        EventBus.$emit('goTo', this.itemIndex)
      })

    }
  },
  mounted() {
    this.load = true
    this.$emit('router-mounted')
  }
}

</script>

<style
    scoped
    lang="scss"
>
.left-menu-bar::v-deep {
  display: flex;
  justify-content: end;
  align-items: start;
  width: 30%;
  height: 105%;
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: auto;
    justify-content: center;

  }

  .left-menu {
    height: 22%;

    @media screen and (max-width: 1024px) {
      width: 100%;
      height: 100%;

    }
  }

  .left-menu-item {
    @media screen and (max-width: 1024px) {
      overflow-x: scroll;
      &::-webkit-scrollbar {
        display: none !important;
      }
    }
  }

  h3 {
    color: #000000;
    font-size: 24px;
    font-weight: 700;
  }

  .menu-en {
    @media screen and (max-width: 1024px) {
      width: 303% !important;
    }
  }

  .menu {
    @media screen and (max-width: 1024px) {
      display: flex;
      justify-content: space-between;
      padding: 0;
      margin: 0 auto;
      width: 187%;
    }

    .list {
      color: #3a3a3a;
      font-size: 15px;
      font-weight: 500;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media screen and (max-width: 1024px) {
        border: none !important;
      }

      .arrow {
        display: none;
      }

      &.active {
        color: #2A97D4;
      }

    }

  }
}
</style>