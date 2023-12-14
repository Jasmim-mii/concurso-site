<template>
  <section>
    <swiper
      :pagination="{
        dynamicBullets: false,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide class="imagepoliciafederal">
        <div class="slidepoliciafederalcontainer">
          <h2 class="title-color">Estude Para Policial Federal</h2>
          <h3 class="subtitle-home">Com quem mais tem alunos aprovados em todo brasil</h3>
          <div class="bottons">
            <btn-app
              btnPrimaryTitle="Cursos Policia Federal"
              btnSecondyTilte="Entre em contato"
            />
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import "./style.css";

// import required modules
import { Pagination } from "swiper/modules";
import BtnApp from "./BtnApp.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    BtnApp,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<style lang="scss" scoped>
.subtitle-home {
  color: #242424;
  padding: 1rem 0;
  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
    color: #cacaca;
  }
}
section {
  height: 80vh;

  .swiper {
    width: 100%;
    height: 100%;

    .swiper-slide {
      font-size: 1.5rem;
      background: #d8d8d8;
      width: 100%;

      /* Center slide text vertically */
      display: flex;
      justify-content: start;
      align-items: center;

      .containerslide {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        padding: 0 3rem;

        .slideprimarycontainer {
          width: 75%;
          h2 {
            font-size: 3.5rem;
          }

          .global-text {
            color: #d8d8d8;
          }
        }
        .cardslide {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;

          .cards {
            background: #d8d8d8;
            display: table;
            width: 17rem;
            border-radius: 0.5rem;
            padding: 1rem;

            img {
              width: 100%;
              height: 15rem;
              box-shadow: 0rem 0rem 1rem rgba(0, 0, 0, 0.5);
            }
            .descriptioncards {
              position: relative;
              padding-top: 2rem;
              .category {
                position: absolute;
                top: -2rem;
                margin: 0 2rem;
                text-align: center;
                font-size: 1.2rem;
                width: 70%;
                background: #0a7298;
                color: #d8d8d8;
                padding: 0.8rem;
                border-radius: 37%;
              }
              .title {
                font-size: 1.2rem;
                letter-spacing: 0.05rem;
                margin-bottom: 1rem;
                position: relative;
                .divisor {
                  color: #0a7298;
                }

                span {
                  &::before {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 50%;
                    margin: 0 4rem;
                    height: 0.1rem;
                    margin-bottom: -0.5rem;
                    background: #0a7298;
                  }
                }
              }
              p {
                font-size: 1rem;
              }
              .price {
                padding: 1rem 0;
                font-size: 1.2rem;
              }
              a {
                font-size: 1rem;
                color: #d8d8d8;
                padding: 0.8rem 1.5rem;
                background: #000;
                display: inline-block;
                margin-bottom: 0.1rem;
              }
            }
          }
        }
      }
    }
    .imgageslidehomeprimary {
      background: rgb(6, 76, 102);
      background: linear-gradient(0deg, rgba(6, 76, 102, 1) 0%, rgb(0, 0, 0) 100%);
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .imagepoliciafederal {
      background-image: url("../assets/home.png");
      background-repeat: no-repeat;
      width: 100%;
      background-position-y: bottom;
      background-position-x: right;
      @media screen and (max-width: 600px) {
        background: rgb(6, 76, 102);
        background: linear-gradient(0deg, rgba(6, 76, 102, 1) 0%, rgb(0, 0, 0) 100%);
      }

      .slidepoliciafederalcontainer {
        width: 40%;
        padding: 0 3rem;

        @media screen and (max-width: 1135px) {
          width: 60%;
        }
        @media screen and (max-width: 1020px) {
          width: 80%;
        }
        @media screen and (max-width: 780px) {
          width: 100%;
          text-align: center;
        }

        h2 {
          font-size: 3.5rem;
          @media screen and (max-width: 600px) {
            font-size: 2rem;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 350px) and (max-width: 900px) {
}
</style>
