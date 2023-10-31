<template>
  <section class="error-main">
    <div class="blex w-full">
      <div class="error-wrapper px-4 md:px-0 pt-40 pb-70 blex">
        <div class="error-title w-full   blex ">
          4 0 4
        </div>
        <div class="w-full mb-14 text-center error-dec">
          죄송합니다. 요청하신 페이지를 찾을 수 없습니다
        </div>
        <div class="text-center font-normal text-2xs md:text-lg text-black mb-50">
          잘못된 주소를 입력하셨거나,<br>
          찾으시는 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다
        </div>
        <div class="blex w-100">
          <div
              @click="$router.go(-1)"
              class="back-button text-black">
            이전 페이지
          </div>
            <router-link
                to="/"
                tag="div"
                class="text-white main-button ">
              홈으로 가기
            </router-link>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'error404',
  data: () => ({
  }),
  mounted () {
  }
}
</script>

<style scoped lang="scss">
.error-main::v-deep {
  height:60vh;
  padding-top:130px;
  .error-wrapper {
    max-width: 600px;
    .error-title{
      font-size:160px;
      color:#2A97D4;
      font-weight:400;
    }
    .error-dec{
      font-size: 30px;
      font-weight: 400;
      color:#2A97D4;
    }
  }
}
</style>
