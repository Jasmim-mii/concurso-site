<template>
  <header id="header">
    <div>
      <a href=""
        ><div class="logocentral">Central</div>
        <div class="concursop">Do Concurso</div>
      </a>
    </div>

    <nav id="navbar" class="navbar">
      <div class="btn-menu" @click="showMenu">
        <Icon icon="eva:menu-2-fill" color="white" />
      </div>
      <div class="list_menu" v-show="menu">
        <li class="menu">
          <a class="menu_link" href="#"><router-link to="/">Incicio</router-link> </a>
        </li>
        <li class="menu">
          <a class="menu_link" href="#card"><router-link to="/">Cursos</router-link> </a>
        </li>
        <li class="menu">
          <a class="menu_link" href="#faq"
            ><router-link to="/">Duvidas Frequentes</router-link>
          </a>
        </li>
        <li class="menu">
          <a class="menu_link" href="#contact"
            ><router-link to="/">contato</router-link>
          </a>
        </li>
      </div>
    </nav>
  </header>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  components: { Icon },
  data() {
    return {
      menu: true,
    };
  },
  methods: {
    showMenu() {
      this.menu = !this.menu;
    },
  },
};
</script>

<style lang="scss" scoped>
#header {
  position: relative;
  background: #000;
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  a {
    color: #fff;
    display: block;
    font-size: 1rem;
  }
  .btn-menu {
    display: none;
  }
  .navbar {
    display: flex;
    justify-content: center;
    gap: 2rem;
    @media screen and (max-width: 854px) {
      .btn-menu {
        z-index: 4;
        font-size: 1.5rem;
        display: block;
        cursor: pointer;
        margin: 0.7rem 0;
      }
    }

    .list_menu {
      display: flex;
      justify-content: center;
      gap: 2rem;
      @media screen and (max-width: 854px) {
        width: 100%;
        display: block;
        z-index: 3;
        padding: 3rem 1rem;
        position: fixed;
        right: 0;
        backdrop-filter: blur(5rem);
        top: 0;
        height: 60%;
        width: 60%;
        text-align: center;
        background: rgba(0, 0, 0, 0.5);
      }
    }

    .menu {
      @media screen and (max-width: 854px) {
        padding: 1.5rem;
      }
    }

    .menu_link {
      color: #d8d8d8;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        background: #0a7298;
        margin-bottom: -0.2rem;
        width: 0;
        height: 0.1rem;
        left: 0;
        bottom: 0;
        border-radius: 50rem;
        transition: 0.2s;
      }

      &:hover {
        color: #969696;

        &::after {
          background: #0a7298;
          width: 100%;
        }
      }
    }
  }
}
</style>
