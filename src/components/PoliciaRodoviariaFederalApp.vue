<template>
  <div id="PoliciaRodoviariaFederalApp">
    <div v-for="i in federal" :key="i.id">
      <div v-if="id == i.id">
        <div class="popup-home">
          <div class="popup-content">
            <div class="top">
              <p class="popup-title-home">{{ i.title }} - {{ i.subtitle }}</p>
            </div>
            <div class="bottom">
              <p class="subtitle-info">
                <span> {{ i.category }}</span> <span>Rio de janeiro</span>
              </p>
            </div>
            <div class="description-modal-hidden">
              <li>
                <p>
                  Vaga: <span>{{ i.vagas }}</span>
                </p>
              </li>
              <li>
                <p>
                  Salario: <span>{{ i.salary }}</span>
                </p>
              </li>
              <li>
                <p>
                  Prova: <span> {{ i.prova }}</span>
                </p>
              </li>
            </div>
          </div>
          <div class="popup-card">
            <div class="image-modal">
              <img :src="require(`@/assets/course/${i.img}`)" />
            </div>
            <div class="description-modal">
              <p class="title-buy-modal">{{ i.title }} - {{ i.subtitle }}</p>
              <li>
                <p>
                  Vaga: <span>{{ i.vagas }}</span>
                </p>
              </li>
              <li>
                <p>
                  Salario: <span>{{ i.salary }}</span>
                </p>
              </li>
              <li>
                <p>
                  Prova: <span> {{ i.prova }}</span>
                </p>
              </li>
            </div>
            <div class="btn-hidden">
              <a class="btn-buy-modal" target="_blank" :href="i.link">Comprar</a>
            </div>
          </div>
        </div>
        <div class="content-card-info" v-for="(j, index) in i.cardModal" :key="index.id">
          <div class="card-info">
            <div class="" @click="j.showCard = !j.showCard">
              <p>{{ j.title }}</p>
            </div>
            <!-- <div class="hide-card-info" v-show="j.showCard">
              <li class="hide-list-info" v-for="(c, obj) in j.text" :key="obj">
                {{ obj }} - {{ c }}
              </li>
            </div> -->
          </div>
        </div>
        <a class="btn-buy-modal-hidden" target="_blank" :href="i.link">Comprar</a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "PoliciaRodoviariaFederalApp",
  components: {},
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
<style lang="scss" scoped>
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
    right: 9rem;
    top: 7rem;
    padding: 1.5rem;
    width: 13rem;
    position: fixed;
    height: 9rem;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 0.5rem;
    display: table;
    backdrop-filter: blur(2rem);
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
        height: 10rem;
      }
    }
    .description-modal {
      margin-bottom: 1.5rem;
      .title-buy-modal {
        font-size: 1rem;
      }
      p {
        color: #fff;
        font-size: 0.9rem;
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
</style>
