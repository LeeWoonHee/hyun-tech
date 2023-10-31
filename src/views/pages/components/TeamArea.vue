<template>
  <section class="team-area team-section  bg-gray pt-100">
    <div class="container">
      <div class="section-title blex">
        <span class="blex w-full">World class quality system</span>
        <h2>Main product</h2>
      </div>

      <div class="row">
        <div class="col-lg-4 col-sm-6 single-team-box">
          <div class="single-team blex">
            <div class="product-image blex bg-white"><img
                src="@/assets/images/calorimeterImage.png"
                alt="Image"
            /></div>
            <div class="team-content pt-100 bg-black">
              <h3>{{ $t('team.1') }}</h3>
              <span class="text-xs dec">{{ $t('team.2') }}</span>

            </div>
          </div>
        </div>

        <div class="col-lg-4 col-sm-6 single-team-box" :class="this.$i18n.locale=== 'en' ? 'en' : '' ">
          <div class="single-team blex">
            <div class="product-image blex bg-white">
              <img
                  src="@/assets/images/refrigeratorImage.png"
                  alt="Image"
              />
            </div>


            <div class="team-content bg-black">
              <h3>{{ $t('team.3') }}</h3>
              <span class="text-xs dec">{{ $t('team.4') }}</span>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-sm-6 single-team-box">
          <div class="single-team blex">
            <div class="product-image blex bg-white">
              <img
                  src="@/assets/images/airflowImage.png"
                  alt="Image"
              />
            </div>


            <div class="team-content bg-black">
              <h3>{{ $t('team.5') }}</h3>
              <span class="text-xs dec">{{ $t('team.6') }}</span>


            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TeamArea'
}
</script>

<style
    scoped
    lang="scss"
>
.team-section{
}
.team-area::v-deep {

  .section-title {
    h2{
      font-size:32px;
      font-weight:700;
    }
    span {
      font-size: 13px !important;
      margin-bottom: 8px;
      color: #2A97D4;
      font-weight:600;
    }
  }
 .en{

      line-height:15px !important;

  }
  .single-team-box{
    @media screen and (max-width: 1024px ){
      width:100%;
    }

    .single-team {
      background: #000000 !important;

      &:hover {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        background: #fff !important;

        &.team-content {
          background: #fff !important;
        }
      }
      .team-content {
        width:80%;


        h3{
          font-size:14px;
          font-weight:600;
        }
        span{
          font-size:12px;
          font-weight:400;
        }
      }
      .product-image {
        width:80%;
        height:329px;
        @media screen and (max-width:1024px) {
          width: 80%;
        }
      }
    }
  }



}

</style>