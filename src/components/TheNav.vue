<template>
  <header
      class="header-area"
  >


    <!-- Start Nav Area -->
    <div class="navbar-area navbar-area-two">
      <div class="mobile-nav">
        <div class="container">
          <router-link
              tag="a"
              to="/"
              class="logo"
              @click.native="isOpenMenu=false"
          >
            <img
                src="@/assets/images/logo/hyuntech-logo.png"
                alt="Logo"
            >
          </router-link>
        </div>
      </div>

      <div class="main-nav">
        <div class="container">
          <nav class="navbar navbar-expand-md">
            <router-link
                tag="a"
                class="navbar-brand"
                to="/"
                @click.native="isOpenMenu=false"
            >
              <img
                  src="@/assets/images/logo/hyuntech-logo.png"
                  alt="Logo"
              >
            </router-link>
            <!-- 데스크탑 / 네브바 카테고리 -->
            <div class="collapse navbar-collapse mean-menu">
              <ul class="navbar-nav m-auto mobile-menu">

                <li class="nav-item">
                  <router-link
                      tag="a"
                      to="/performances"
                      class="nav-link"
                      active-class="active"
                  >
                    {{ $t('nav.1') }}
                  </router-link>
                </li>

                <li class="nav-item">
                  <router-link
                      tag="a"
                      to="/durabilities"
                      class="nav-link"
                      active-class="active"
                  >
                    {{ $t('nav.2') }}
                  </router-link>
                </li>

                <li class="nav-item">
                  <router-link
                      tag="a"
                      to="/contact-us"
                      class="nav-link"
                      active-class="active"
                  >
                    Contact Us
                  </router-link>
                </li>
              </ul>

              <div class="translation-option blex ">
                <div
                    class="ko translation-btn"
                    @click="currentLang = 'kr'"
                    :class="currentLang === 'kr' ? 'active' : ''"
                >
                  KO
                </div>
                <div class="middle-line"></div>
                <div
                    class="en translation-btn"
                    @click="currentLang = 'en'"
                    :class="currentLang === 'en' ? 'active' : ''"
                >
                  EN
                </div>
              </div>

              <!--              모바일 메뉴 버튼-->
              <div>
                <button
                    v-if="$store.state.windowWidth < 1024"
                    class="menu-btn"
                    @click="openMenu"
                >
                  <img
                      v-if="!isOpenMenu"
                      src="@/assets/images/icon/menu-btn.svg"
                      alt=""
                  />
                  <img
                      v-if="isOpenMenu"
                      src="@/assets/images/icon/menu-close-btn.svg"
                      alt=""
                  />
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <!-- 모바일 / 메뉴 클릭 시 나오는 카테고리 -->
    <div
        class="nav-menu-box"
        ref="nav"
        :class="isOpenMenu ? 'mobile-visible-menu-box' :''"
    >
      <ul class="navbar-nav m-auto menu">

        <li class="nav-item">
          <router-link
              tag="a"
              to="/performances"
              class="nav-link"
              active-class="active"
              @click.native="goPageWithScroll"
          >
            {{ $t('nav.1') }}
          </router-link>
        </li>

        <li class="nav-item">
          <router-link
              tag="a"
              to="/durabilities"
              class="nav-link"
              active-class="active"
              @click.native="goPageWithScroll"
          >
            {{ $t('nav.2') }}
          </router-link>
        </li>

        <li class="nav-item">
          <router-link
              tag="a"
              to="/contact-us"
              class="nav-link"
              active-class="active"
              @click.native="goPageWithScroll"
          >
            Contact Us
          </router-link>
        </li>
      </ul>
    </div>
    <div
        class="menu-bg"
        v-if="isOpenMenu"
    >
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheNav',
  data: () => ({
    isOpenMenu: false,
    scrollY: 0
  }),
  methods: {
    openMenu () {
      this.isOpenMenu = !this.isOpenMenu
      this.scrollY = this.$store.state.scrollY
      if ( this.isOpenMenu ) {
        document.body.classList.add('not_scroll')
        window.locoScroll.stop()
        window.locoScroll.destroy()
      } else {
        window.locoScroll.init()
        window.locoScroll.on('scroll', (obj) => {
          this.$store.commit('UPDATE_WINDOW_SCROLL_Y', obj.scroll.y)
        })
      }
      window.locoScroll.initPosition.y = this.$store.state.scrollY
    },
    goPageWithScroll () {
      this.isOpenMenu = false
      window.locoScroll.init()
      window.locoScroll.on('scroll', (obj) => {
        this.$store.commit('UPDATE_WINDOW_SCROLL_Y', obj.scroll.y)
      })
    }
  },
  computed: {
    currentLang: {
      get () {
        return this.$i18n.locale
      },
      set (val) {
        this.$i18n.locale = val
      }
    }
  },
  mounted () {
    this.$emit('router-mounted')
  }
}
</script>

<style
    scoped
    lang="scss"
>
.header-area::v-deep {
  //position: relative;
  &.scrolled {
    transform: translate3d(0, -100%, 0) !important;
    transition: all .3s linear;
  }

  .navbar-area {
    @media screen and (max-width: 1024px) {
      height: 80px;
      display: flex;
      align-items: center;
    }

    .main-nav {
      @media screen and (max-width: 1024px) {
        width: 100%;
      }
    }

    .navbar-nav {

    }

    @media screen and (max-width: 1024px) {
      .mobile-menu {
        display: none !important;
      }
    }

    .nav-link {
      font-weight: 400 !important;
      font-size: 14px !important;

      &.active {
        color: #2A97D4 !important;
        font-weight: 700 !important;

        &:hover {
          color: #2A97D4 !important;
        }
      }

      &:hover {
        color: #000000 !important;
      }
    }

    .navbar-collapse {
      justify-content: end;
    }

    .translation-option {
      .translation-btn {
        color: #878787;
        font-size: 12px;
        font-weight: 400;
        @media screen and (max-width: 1024px) {
          font-size: 18px;
          font-weight: 500;
        }
      }

      .active {
        button {
          span {
            font-weight: 700;
          }
        }

      }

      .middle-line {
        width: 1px;
        height: 15px;

      }
    }

    .menu-bg {
      overflow: hidden;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
    }
  }

  .nav-menu-box {
    &.mobile-visible-menu-box {
      top: 80px;
    }
  }
}
</style>