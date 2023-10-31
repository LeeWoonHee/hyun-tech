<template>
  <section class="feature-area feature-area-two mobile-feature">
    <div class="container">
      <div class="row feature-row">

        <!--        시스템 특징 박스-->
        <div class="col-lg-4 col-sm-6 feature-box">
          <div class="single-feature bg-white">
            <div>
              <div class="title">
                <div><img
                    src="@/assets/images/icon/listIcon.svg"
                    alt=""
                    class="icon"
                /></div>
                <h3 class="pt-0 blex feature-top-title">{{ $t('features.1') }}</h3>
              </div>
              <p class="sub-title text-sm">{{ $t('features.2') }}</p>
            </div>
          </div>
        </div>

        <!--주요 개발 시스템 박스-->
        <div class="col-lg-4 col-sm-6 feature-box">
          <div class="single-feature bg-white">
            <div>
              <div class="title">
                <div><img
                    src="@/assets/images/icon/upGraphIcon.svg"
                    alt=""
                    class="icon"
                /></div>
                <h3 class="pt-0 blex feature-top-title">{{ $t('features.3') }}</h3>
              </div>
              <p class="sub-title text-sm">{{ $t('features.4') }}</p>
            </div>
          </div>
        </div>

        <!--시스템 제품 박스-->
        <div class="col-lg-4 col-sm-6 feature-box">
          <div class="single-feature bg-white">
            <div>
              <div class="title">
                <div><img
                    src="@/assets/images/icon/fileListIcon.svg"
                    alt=""
                    class="icon"
                /></div>
                <h3 class=" pt-0 blex feature-top-title">{{ $t('features.5') }}</h3>
              </div>
              <p class="sub-title text-sm">{{ $t('features.6') }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MobileFeatureArea'
}
</script>

<style scoped lang="scss">
.mobile-feature::v-deep {
  display: none;
  @media screen and (max-width: 1024px) {
    display: block;
  }

  .feature-box {

    @media screen and (max-width: 1024px) {
      width: 90%;
    }

  }

  .feature-row {
    @media screen and (max-width: 1024px) {
     justify-content: center;
    }
    .single-feature {
      height: 165px !important;
      -webkit-transform: translateY(0px);
      transform: translateY(0px);

      &:hover {
        h3 {
          color: #000000;
        }

        p {
          color: #8D8D8D;
        }
      }
    }
  }

  .title {
    @media screen and (max-width: 1024px) {
      justify-content: left;
    }
    display: flex;
    align-items: center;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
    }

    .feature-top-title {
      padding-left: 30px !important;
      font-size: 16px;
      font-weight: 600;
    }

    h3 {
      font-weight: 600;
      padding-top: 0;
    }
  }

  .sub-title {
    color: #8D8D8D;
    word-break: keep-all;
    font-size: 14px;
    font-weight: 400;
  }
}
</style>