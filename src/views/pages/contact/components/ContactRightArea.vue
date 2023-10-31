<template>

  <div class="contact-right-area">
    <div class="contact-info">
      <div class="contact-top">
        <p class="title">{{ $t('contact.1') }}</p>
        <p class="sub-title">{{ $t('contact.2') }}</p>
      </div>


      <ul class="address">
        <li class="address-item">
          <img
              src="@/assets/images/icon/location-icon.svg"
              alt=""
          >
          <span class="address-item-title">ADDRESS</span>
          <span>{{ $t('contact.3') }}</span>
        </li>
        <li class="address-item">
          <img
              src="@/assets/images/icon/phone-icon.svg"
              alt=""
          > <span class="address-item-title">PHONE</span>
          <span>{{ $t('contact.4') }}</span>
        </li>
        <li class="address-item">
          <img
              src="@/assets/images/icon/printer-icon.svg"
              alt=""
          ><span class="address-item-title">FAX</span>
          <span> {{ $t('contact.5') }}</span>
        </li>
        <li class="address-item">
          <img
              src="@/assets/images/icon/email-icon.svg"
              alt=""
          > <span class="address-item-title">Email</span>
          <span>hyuntech08@nate.com</span>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactRightArea'
}
</script>

<style
    scoped
    lang="scss"
>
.contact-right-area {
  width: 35%;
  @media screen and (max-width:1024px){
    width:100%;
  }
  .contact-info {
    .title {
      font-weight: 600;
      font-size: 20px;
      max-width:365px;
      line-height:24px;
    }

    .sub-title {
      line-height:17px;
      font-size: 14px;
      max-width:260px;
    }

    .address {
      .address-item {
        position:relative;
        .address-item-title{
          color:#2A97D4;
        }
        img{
          position:absolute;
          left:0;
          width:22px;
          height:22px;
        }
        //.sub-title{
        //  font-size: 14px;
        //  font-weight: 600;
        //}
        span {
          font-size: 16px;
          font-weight: 600;
          white-space: pre-line;
        }

        a {
          &:hover {
            color: #3A3A3A;
          }
        }
      }
    }
  }
}
</style>