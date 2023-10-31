<template>
  <footer class="footer-area white-bg bg-f3">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 footer-box">
          <div class="single-footer-widget">
            <a
                href="/"
                class="logo"
            >
              <img
                  src="@/assets/images/logo/footer-logo.png"
                  alt="Image"
              >
            </a>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 footer-box">
          <div class="single-footer-widget">
            <h3>{{ $t('footer.1') }}</h3>
            <ul class="import-link">
              <li
                  @click="goToPerformance(index)"
                  v-for="(item,index) in performances"
                  :key="index"
              >
                {{ $t(item.name) }}
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 footer-box">
          <div class="single-footer-widget">
            <h3>{{ $t('footer.7') }}</h3>

            <ul class="import-link">
              <li
                  @click="goToDurability(index)"
                  v-for="(item,index) in durabilities"
                  :key="index"
              >
                {{ $t(item.name) }}
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 footer-box">
          <div class="single-footer-widget">
            <h3>Contact Us</h3>

            <ul class="address ">
              <li>
                <span>{{ $t('footer.18') }}</span>
              </li>
              <li>
                <p>{{ $t('footer.19') }}</p>
                <p>{{ $t('footer.20') }}</p>
                <p>E-Mail : hyuntech08@nate.com </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="container">
        COPYRIGHT (C) 2013 HYUNTECH.CO. LTD. ALL RIGHTS RESERVED
      </div>

    </div>
  </footer>
</template>

<script>

import { EventBus } from '@/EventBus'

export default {
  name   : 'TheFooter',
  data   : () => ({
    performances: [
      {
        name: 'footer.2'
      },
      {
        name: 'footer.3'
      },
      {
        name: 'footer.4'
      },
      {
        name: 'footer.5'
      },
      {
        name: 'footer.6'
      }
    ],
    durabilities: [
      {
        name: 'footer.8'
      },
      {
        name: 'footer.9'
      },
      {
        name: 'footer.10'
      },
      {
        name: 'footer.11'
      },
      {
        name: 'footer.12'
      },
      {
        name: 'footer.13'
      },
      {
        name: 'footer.14'
      },
      {
        name: 'footer.15'
      },
      {
        name: 'footer.16'
      },
      {
        name: 'footer.17'
      }
    ]
  }),
  methods: {
    goToPerformance(index) {
      this.$router.push({
                          name : 'performance',
                          query: { itemIndex: index }
                        }).catch(() => {
      }).finally(() => {
        EventBus.$emit('goTo', index)
      })
    },
    goToDurability(index) {
      this.$router.push({
                          name : 'durability',
                          query: { itemIndex: index }
                        }).catch(() => {
      }).finally(() => {
        EventBus.$emit('goTo', index)
      })
    }
  }
}
</script>

<style
    scoped
    lang="scss"
>
.footer-area::v-deep {
  .footer-box {
    @media screen and (max-width: 1024px) {
      width: 100%;
    }

  }

  ul {
    padding-left: 0 !important;
  }

  .single-footer-widget {
    .logo {
      //width:243px;
      img {
        //width:100%;
      }
    }

    h3 {
      font-size: 13px;
      font-weight: 500;
      color: #666666;
    }

    .import-link {
      padding-left: 0 !important;
      z-index: 20;


      li {
        font-size: 12px;
        font-weight: 500;
        color: #838383;

        p {
          font-size: 12px;
          font-weight: 500;
          color: #838383;
        }
      }
    }

    .address {
      white-space: pre-line;
      padding-left: 0;

      li {
        font-size: 12px;
        font-weight: 500;
        color: #6c6c6c;
        padding-left: 0;
      }

      p {
        font-size: 12px;
        font-weight: 500;
        color: #6c6c6c;
      }
    }
  }

  .copyright {
    color: #777777;
    font-size: 12px;
    font-weight: 400;
    padding-top: 16px;
    padding-bottom: 20px;
    @media screen and (max-width: 1024px) {
      padding-bottom: 0;
    }
  }
}
</style>