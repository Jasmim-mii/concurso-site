<template>
  <section>
    <div class="container-featured">
      <div class="cards-transparent">
        <div class="cards-featured" v-for="i in featured" :key="i.id">
          <Icon class="icon-featured" :icon="i.icon" />
          <div class="info-featured">
            <h4>{{ i.text }}</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  components: {
    Icon,
  },
  data() {
    return {};
  },
  computed: {
    featured() {
      return this.$store.state.featured;
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  position: relative;
  z-index: 2;

  .container-featured {
    height: 4rem;
    background: #000;
    width: 90%;
    position: absolute;
    top: -2rem;
    left: 0;
    margin: 0 4rem;
    border-radius: 1.8rem;
    color: #fff;
    @media screen and (max-width: 600px) {
      top: -6rem;
      height: 12rem;
      margin: 0 2rem;
      width: 80%;
      display: table;
    }
    @media screen and (max-width: 380px) {
      top: -2rem;
    }
    @media screen and (max-width: 810px) {
      margin: 0 2.5rem;
    }
    @media screen and (max-width: 1020px) {
      margin: 0 3rem;
    }
  }
  .cards-transparent {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 1.4rem 0;
    text-align: center;
    align-content: center;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 600px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    .cards-featured {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
      @media screen and (max-width: 600px) {
        padding-top: 1rem;
        display: block;
      }

      .icon-featured {
        color: #074d66;
        font-size: 1.2rem;
      }

      .info-featured {
        h4 {
          font-size: 0.9rem;
          @media screen and (max-width: 810px) {
            font-size: 0.8rem;
          }
        }
      }
    }
  }
}
</style>
