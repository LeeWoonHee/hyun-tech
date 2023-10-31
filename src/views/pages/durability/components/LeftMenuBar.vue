<template>
  <div class="left-menu-bar">

    <!--   1024 이상 웹 화면에서 보여지는 sticky 기준 -->

    <div
        class="left-menu"
        data-scroll
        data-scroll-sticky
        data-scroll-target=".main"
        v-if="width > 1024"
    >
      <h3>{{ $t('nav.2') }}</h3>
      <div class="left-menu-item">
        <ul class="menu">
          <li
              v-for="(list, index) in lists"
              :key="index "
              @click="clickItem(index)"
              :class="{active: active === index  }"
              class="list py-3"
              ref="menuItem"
          >
            {{ $t(list.durabilityTester) }}
          </li>
        </ul>
      </div>

    </div>

    <!--   1024 이하 모바일 화면에서 보여지는 sticky 기준 -->

    <div
        class="left-menu"
        data-scroll
        data-scroll-sticky
        data-scroll-target=".durability-area"
        v-if="width <1024"
    >
      <h3>{{ $t('nav.2') }}</h3>
      <div class="left-menu-item">
        <ul
            class="menu"
            :class="this.$i18n.locale === 'en' ? 'menu-en' : ''"
        >
          <li
              v-for="(list, index) in lists"
              :key="index"
              @click="clickItem(index)"
              :class="{active: active === index }"
              class="list border-bottom-0"
          >
            {{ $t(list.durabilityTester) }}
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
    lists : [
      { durabilityTester: 'durabilityTester.title.1' },
      { durabilityTester: 'durabilityTester.title.2' },
      { durabilityTester: 'durabilityTester.title.3' },
      { durabilityTester: 'durabilityTester.title.4' },
      { durabilityTester: 'durabilityTester.title.5' },
      { durabilityTester: 'durabilityTester.title.6' },
      { durabilityTester: 'durabilityTester.title.7' },
      { durabilityTester: 'durabilityTester.title.8' },
      { durabilityTester: 'durabilityTester.title.9' },
      { durabilityTester: 'durabilityTester.title.10' }
    ],
    active: 0,
    width : window.innerWidth
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
  height: 103%;
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: auto;
    justify-content: center;

  }

  .left-menu {
    height: 18%;
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
      width: 580% !important;
    }
  }

  .menu {
    @media screen and (max-width: 1024px) {
      display: flex;
      justify-content: space-between;
      padding: 0;
      margin: 0 auto;
      width: 383%;
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