<template>
  <section>
    <navbar-app />
    <home-app />
    <featured-app />
  </section>
  <section class="info" id="info">
    <div class="container-card">
      <div class="content">
        <div class="info-card">
          <h2>Nossas Vantagens</h2>
          <p>
            Nosso objetivo é facilitar todo seu processo para que seu estudo seja mais
            leve, rápido e eficaz.
          </p>
        </div>
        <div class="cards-apps">
          <cards-app>
            <div class="slot-card">
              <Icon class="icon" icon="material-symbols:book" />
              <h4 class="subtitle-info">Edital Recente</h4>
              <p>
                o curso inclui todo o conteúdo do edital mais recente, garantindo que você
                esteja preparado para a prova.
              </p>
            </div>
          </cards-app>
          <cards-app>
            <div class="slot-card">
              <Icon class="icon" icon="ph:student-bold" />
              <h4 class="subtitle-info">Flexibilidade de acesso</h4>
              <p>
                o curso utiliza o Método Facilita, que ajuda na melhor aprendizagem do
                conteúdo, tornando o estudo mais fácil e eficaz.
              </p>
            </div>
          </cards-app>
          <cards-app>
            <div class="slot-card">
              <Icon class="icon" icon="heroicons:document-check-20-solid" />
              <h4 class="subtitle-info">PDF das Aulas</h4>
              <p>
                você pode assistir as aulas pelo celular, notebook, desktop, iPad e até da
                sua TV, garantindo flexibilidade e comodidade no acesso ao conteúdo.
              </p>
            </div>
          </cards-app>
        </div>
      </div>
    </div>
  </section>
  <section id="card" class="card">
    <div class="container" id="policia-federal">
      <div class="content-title">
        <span><Icon class="icon-card" icon="arcticons:canvasstudent" /></span>
        <h3>Curso Policia Federal</h3>
      </div>
      <div class="content-card">
        <cards-app v-for="i in federal" :key="i.id">
          <div class="slot-cads">
            <img :src="require(`@/assets/course/${i.img}`)" />
            <div class="description-cards">
              <p class="categories">{{ i.category }}</p>
              <!-- <h4 class="modal-title" @click="i.showCard = true">
                {{ i.title }} - {{ i.subtitle }}
              </h4> -->
              <router-link :to="`policia-federal/${i.id}`" class="modal-title"
                ><h4>{{ i.title }} - {{ i.subtitle }}</h4></router-link
              >
              <p class="price">
                R$ {{ i.price }}
                <span class="little-price"
                  ><s>{{ i.free }}</s></span
                >
              </p>
              <p class="salary">Faixa salarial: {{ i.salary }}</p>
            </div>
          </div>
        </cards-app>
      </div>
    </div>
  </section>
  <section id="faq-req">
    <faq-app />
  </section>
  <section id="contact" class="contact">
    <contact-app />
  </section>
  <footer>
    <footer-app />
  </footer>
</template>

<script>
import CardsApp from "../components/CardsApp.vue";
import FeaturedApp from "../components/FeaturedApp.vue";
import HomeApp from "../components/HomeApp.vue";
import NavbarApp from "../components/NavbarApp.vue";
import { Icon } from "@iconify/vue";
import FaqApp from "../components/FaqApp.vue";
import FooterApp from "../components/FooterApp.vue";
// import PageApp from "@/components/PageApp.vue";
import ContactApp from "@/components/ContactApp.vue";

export default {
  name: "App",
  components: {
    NavbarApp,
    HomeApp,
    FeaturedApp,
    CardsApp,
    Icon,
    FaqApp,
    FooterApp,
    ContactApp,
  },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  computed: {
    federal() {
      return this.$store.state.federal;
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
html {
  box-sizing: border-box;
}
body {
  position: relative;
  z-index: 2;
  overflow-y: scroll;
  background: #f4f4f4;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.container {
  padding: 1rem 3rem;
  @media screen and (max-width: 954px) {
    padding: 1rem 2rem;
  }
}
.icon {
  font-size: 2rem;
}
.global-text {
  color: #d8d8d8;
  padding-top: 1rem;
  font-size: 1.8rem;
}
.title-color {
  color: #0e89b6;
}
.subtitle-info {
  color: #363636;
  font-size: 1.2rem;
}
.subtitle {
  font-size: 2rem;
  color: #232323;
}

.subtitle {
  font-size: 2rem;
  color: #232323;
}
.logocentral {
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 800;
  color: #25c1fa;
}
.concursop {
  font-weight: 600;
  padding-left: 2rem;
}

.info {
  background: #f4f4f4;
  position: relative;
  z-index: 1;
  padding: 8rem 3rem 3rem 3rem;
  .container-card {
    .content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: start;
      gap: 1rem;
      @media screen and (max-width: 810px) {
        display: block;
      }

      .info-card {
        margin-right: 8rem;
        margin-bottom: 3rem;
        @media screen and (max-width: 360px) {
          margin-top: 2rem;
        }

        h2 {
          font-size: 3rem;
          padding-bottom: 1rem;
          @media screen and (max-width: 710px) {
            font-size: 2rem;
            margin-top: 4rem;
          }
        }
      }
      .cards-apps {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        padding-bottom: 2rem;
        @media screen and (max-width: 954px) {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(13rem, 2fr));
          gap: 2rem;
        }
      }
      .slot-card {
        .icon {
          font-size: 2rem;
          color: #074d66;
        }
        h4 {
          padding: 1.5rem 0;
          font-size: 1.2rem;
        }
      }
    }
  }
}
#faq-req {
  position: relative;
  z-index: 1;
  background: #f4f4f4;
}
.card {
  background: #f4f4f4;
  padding-top: 2rem;
  padding-bottom: 4rem;
  position: relative;
  z-index: 2;

  .container {
    .content-title {
      position: relative;
      display: flex;
      align-items: center;
      gap: 1rem;
      padding-top: 3rem;

      h3 {
        text-transform: uppercase;
        font-size: 1.2rem;
      }
      .icon-card {
        font-size: 2rem;
        color: #074d66;
        animation: loading 3s linear infinite;

        @keyframes loading {
          0% {
            transform: rotate(0);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      }
    }
  }
  .content-card {
    display: grid;
    // grid-template-columns: repeat(4, 1fr);
    grid-template-columns: repeat(auto-fit, minmax(15rem, 2fr));

    gap: 1rem;
    padding-top: 2rem;
    @media screen and (max-width: 954px) {
    }

    .slot-cads {
      background: #d4d4d4;
      border-radius: 0.2rem;
      width: 18rem;
      padding-bottom: 1rem;
      @media screen and (max-width: 954px) {
        width: 100%;
      }
      .description-cards {
        padding: 1rem;
        .modal-title {
          cursor: pointer;
          color: #074d66;

          &:visited {
            color: red;
          }

          &:active {
            color: #0a9dd2;
          }
        }
        .salary {
          margin-top: 1rem;
          font-size: 0.9rem;
          padding: 0.5rem 0.8rem 0.5rem 1rem;
          background: #074d66;
          color: #eee;
        }
        .little-price {
          color: #363636;
          font-size: 0.9rem;
        }
        .price {
          font-size: 1.2rem;
          color: #232323;
          margin-top: 0.8rem;
        }
        .categories {
          margin-bottom: 1rem;
          text-transform: uppercase;
          display: inline-block;
          font-size: 0.7rem;
          color: #074d66;
          font-weight: 600;
        }
        .modal-title-card {
          color: #000;
          font-weight: 600;
        }
      }
      img {
        width: 100%;
        height: 13rem;
        border-radius: 0.5rem 0.5rem 0 0;
      }
      &:hover {
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.363);
      }
    }
    .popup-home {
      position: relative;
      height: 35vh;
      background: linear-gradient(0deg, rgba(6, 76, 102, 1) 0%, rgb(0, 0, 0) 100%);
      display: flex;
      align-items: center;
      padding-left: 3rem;
      padding-right: 3rem;
      padding-bottom: 3rem;
      @media screen and (max-width: 454px) {
        height: 45vh;
      }
      .description-modal-hidden {
        display: none;
        @media screen and (max-width: 954px) {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.6rem;
          li {
            background: #000;
            border-radius: 0.5rem;
            padding: 0.5em 0.5rem;
          }
          span {
            font-size: 0.8rem;
          }
          p {
            font-size: 0.9rem;
          }
        }
        @media screen and (max-width: 600px) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.6rem;
        }
      }

      .popup-content {
        height: 100%;

        .popup-title-home {
          color: #eee;
          font-size: 2.5rem;
        }
        p {
          color: #aeaeae;
          span {
            color: #eee;
          }
        }
        .top {
          height: 85%;
          display: flex;
          align-items: center;
          @media screen and (max-width: 954px) {
            height: 65%;
          }
        }
        .bottom {
          height: 15%;
          p {
            font-size: 0.9rem;
          }
          span {
            background: #000;
            border-radius: 0.5rem;
            padding: 0.5rem;
          }
        }
      }
      .popup-card {
        position: fixed;
        right: 9rem;
        padding: 2rem;
        top: 4.5rem;
        width: 13rem;
        height: 9rem;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 0.5rem;
        backdrop-filter: blur(2rem);
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
        @media screen and (max-width: 954px) {
          display: none;
          left: 0;
          padding: 2rem;
          bottom: 0;
          width: 20rem;
          height: 25rem;
        }

        .image-modal {
          margin-bottom: 2rem;
          img {
            width: 100%;
            height: 8rem;
          }
        }
        .description-modal {
          margin-bottom: 1.5rem;
          .title-buy-modal {
            font-size: 1.2rem;
          }
          p {
            color: #fff;
            font-size: 1rem;
            padding-bottom: 0.8rem;
            font-weight: 600;
            span {
              color: #eee;
              font-weight: 500;
            }
          }
        }
        .btn-buy-modal {
          padding: 0.7rem 2rem;
          background: #000;
          display: inline-block;
          color: #eee;
        }
      }
    }
    .content-card-info {
      width: 50%;
      background: #d4d4d4;
      margin: 3rem 3rem;
      border-radius: 0.2rem;
      @media screen and (max-width: 954px) {
        display: block;
        width: 90%;
      }
      @media screen and (max-width: 600px) {
        display: block;
        width: 80%;
      }

      .card-info {
        box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);

        p {
          font-weight: 600;
          cursor: pointer;
          padding: 1rem 1.5rem;
        }
        li,
        p {
          color: #2e2e2e;
          font-size: 1rem;
          @media screen and (max-width: 600px) {
            font-size: 0.8rem;
          }
        }
        .hide-card-info {
          border-top: 0.1rem solid #063748;
          padding: 1rem 1.5rem;

          cursor: text;

          .hide-list-info {
            padding-top: 1rem;
          }
        }
      }
    }
    .btn-buy-modal-hidden {
      display: none;

      @media screen and (max-width: 954px) {
        display: block;
        padding: 1rem 2rem;
        background: #000;
        color: #eee;
        text-align: center;
      }
    }
  }
}
.contact {
  position: relative;
  background: #eee;
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
  justify-content: space-around;
  z-index: 1;
  @media screen and (max-width: 954px) {
    display: block;
  }
  p {
    @media screen and (max-width: 654px) {
      font-size: 0.9rem;
    }
  }
}
</style>
