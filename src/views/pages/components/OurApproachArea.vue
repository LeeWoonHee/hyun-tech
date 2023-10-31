<template>
  <section class="our-approach-area approach">

    <div class="container">

      <!--      상단 타이틀-->
      <div class="section-title">
        <span>World class quality system</span>
        <p class="approach-main-title">{{ $t('approach.1') }}</p>
      </div>

      <!--      왼쪽 이미지-->
      <div class="row align-items-center">
        <div class="col-lg-6 approach-image">
          <div class="approach-img">
            <img
                src="@/assets/images/approach-image.png"
                alt="Image"
                class="w-full"
            >
          </div>
        </div>

        <!--        오른쪽 상단 타이틀-->
        <div class="col-lg-6 approach-right">
          <div class="approach-content">
            <h3 class="approach-content-title">{{ $t('approach.2') }}</h3>

            <!--            오른쪽 하단 박스-->
            <div class="">
              <div class="col-lg-6 col-sm-6 approach-box">
                <div class="single-approach flex ">
                  <img
                      src="@/assets/images/icon/checkIcon.svg"
                      alt=""
                  />
                  <h3 class="mb-0">{{ $t('approach.3') }}</h3>
                </div>
              </div>

              <div class="col-lg-6 col-sm-6 approach-box">
                <div class="single-approach flex">
                  <img
                      src="@/assets/images/icon/checkIcon.svg"
                      alt=""
                  />
                  <h3 class="mb-0">{{ $t('approach.4') }}</h3>
                </div>
              </div>

              <div class="col-lg-6 col-sm-6 approach-box">
                <div class="single-approach flex">
                  <img
                      src="@/assets/images/icon/checkIcon.svg"
                      alt=""
                  />
                  <h3 class="mb-0">{{ $t('approach.5') }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OurApproachArea'
}
</script>

<style
    scoped
    lang="scss"
>
.our-approach-area::v-deep {
  .approach-image {
    @media screen and (max-width: 1024px) {
      width: 100%;
    }
  }

  .approach-right {
    @media screen and (max-width: 1024px) {
      width: 100%;
    }
  }

  .section-title {
    word-break: keep-all;

    span {
      color: #2A97D4;
      font-size: 13px;
      font-weight: 600;
      @media screen and (max-width:1024px){
        max-width: 530px;
      }

    }

    p {
      color: #000000;
      line-height: 38px;
      font-size: 32px;
      font-weight: 700 !important;
      max-width: 530px;
    }
  }

  .approach-content {

    .approach-content-title {
      line-height: 21px !important;
      word-break: keep-all;
      color: #3A3A3A;
      font-weight: 500 !important;
      font-size: 18px !important;
      max-width: 415px;
      @media screen and (max-width: 1024px) {
        max-width: 100%;
      }
    }

    .approach-box {
      @media screen and (max-width: 1024px) {
        width: 100%;
      }

      .single-approach {
        filter: drop-shadow(-1px 2px 6px rgba(0, 0, 0, 0.13));

        &:hover {
          -webkit-transform: translateY(0);
          transform: translateY(0);
        }

        .img {

          margin-right: 9px !important;

          img {
            height: 14px;
          }
        }

        h3 {
          font-size: 14px !important;
          font-weight: 500 !important;
        }
      }
    }


  }
}
</style>