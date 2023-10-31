<template>
  <section
      class="contact ptb-100">
    <div class="container">
      <div class="main-title">
        Contact US
      </div>

      <div class="main-contact-area">

        <contact-left-area/>
        <contact-right-area/>

      </div>

    </div>
  </section>
</template>

<script>
import ContactLeftArea from '@/views/pages/contact/components/ContactLeftArea.vue'
import ContactRightArea from '@/views/pages/contact/components/ContactRightArea.vue'

export default {
  name      : 'index',
  components: {
    ContactRightArea,
    ContactLeftArea
  },
  computed  : {
    // lang() {
    //   return (this.$route && this.$route.query && this.$route.query.lang)
    // }
  },
  mounted() {
    this.$emit('router-mounted')
    // if (this.lang === 'en') {
    //   this.$i18n.locale = this.lang
    // }
    // else {
    //   this.$i18n.locale = 'kr'
    // }
  }

}
</script>

<style
    scoped
    lang="scss"
>
.contact::v-deep {
  color: #3A3A3A;
  word-break: keep-all;

  .container {
    @media screen and (max-width: 1024px) {
      max-width: 720px !important;
    }
  }

  .main-title {
    color: #000000;
    font-size: 28px;
    font-weight: 700;
  }

  .main-contact-area {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 100px;
    @media screen and (max-width: 1024px) {
      flex-wrap: wrap;
    }
  }
}
</style>