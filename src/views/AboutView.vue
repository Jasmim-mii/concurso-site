<template>
  <navbar-app />
  <policia-rodoviaria-federal-app />
</template>

<script>
import NavbarApp from "@/components/NavbarApp.vue";
import PoliciaRodoviariaFederalApp from "@/components/PoliciaRodoviariaFederalApp.vue";
// @ is an alias to /src

export default {
  components: { NavbarApp, PoliciaRodoviariaFederalApp },
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
    position: fixed;
    right: 5rem;
    padding: 2rem;
    top: 11rem;
    width: 17rem;
    height: 25rem;
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
        height: 10rem;
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
</style>
