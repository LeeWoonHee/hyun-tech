<template>
  <div class="hero-section">
    <img src="~@/assets/images/main-banner.png" alt="hero image" class="banner-image">

    <section class="banner-area banner-area-two bg-2">
      <div class="container">
        <div class="banner-content" :class="this.$i18n.locale === 'en' ? 'banner-en' : ''">
          <span class="top-title">World class quality system</span>

          <h1 class="banner-title m-center" :class="this.$i18n.locale === 'en' ? 'banner-title-en' : ''">{{
              $t('banner.1')
            }}</h1>
          <p class="sub-dec">{{ $t('banner.2') }}</p>
          <router-link tag="button" to="/contact-us" class="default-btn contact-btn ">
            <span>Contact Us</span>
          </router-link>
        </div>
      </div>

    </section>


    <feature-area/>
  </div>

</template>

<script>
import FeatureArea from '@/views/pages/components/FeatureArea.vue'

export default {
  name      : 'BannerArea',
  components: { FeatureArea }
}
</script>

<style scoped lang="scss">
.hero-section::v-deep {
  position: relative;

  .banner-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    object-fit: cover;
    @media screen and (max-width: 1024px) {
      height: 100%;
    }
  }


  .banner-area {
    position: relative;

    .banner-en {
      max-width: 760px !important;
      @media screen and (max-width: 1024px) {
        max-width: 100% !important;
      }
    }

    .banner-title-en {
      max-width: 760px !important;
      @media screen and (max-width: 1650px) {
        max-width: 540px !important;
      }
    }

    .banner-content {
      word-break: keep-all;
      width: 100%;
      max-width: 645px;

      .top-title {
        color: #3FC5F4;
        font-size: 15px;
        font-weight: 600;
        margin-bottom: 8px !important;
        @media screen and(max-width: 1700px) {
          font-size: 16px;
        }
        @media screen and(max-width: 1024px) {
          display: flex;
          justify-content: center;
        }

      }

      .banner-title {
        font-size: 48px;
        font-weight: 700;
        color: #fff;
        max-width: 540px;
        @media screen and (max-width: 1700px) {
          font-size: 30px;
        }
        @media screen and (max-width: 1024px) {
          display: flex;
          justify-content: center;
          max-width: 340px !important;
        }
      }

      .sub-dec {
        font-size: 16px;
        font-weight: 400;
        color: #EAEAEA;
        margin-bottom: 38px !important;
        word-break: keep-all;
        max-width: 510px;
        line-height: 20px;
        @media screen and (max-width: 1700px) {
          font-size: 14px;
        }
        @media screen and(max-width: 1024px) {
          display: flex;
          justify-content: center;
          max-width: 100% !important;
        }
      }

      .default-btn {
        text-decoration: none;
        background: #0093d1 !important;
        font-size: 13px;
        @media screen and(max-width: 1024px) {
          display: flex;
          justify-content: center;
        }

        &:after {
          display: none;
        }

        &:before {
          display: none;
        }

        span {
          color: #fff;

          &:after {
            display: none;
          }

          &:before {
            display: none;
          }
        }

        &:hover {
        }
      }

    }
  }


}
</style>