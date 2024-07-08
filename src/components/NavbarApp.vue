<template>
  <header id="header">
    <div>
      <a href=""
        ><div class="logocentral">Central</div>
        <div class="concursop">Do Concurso</div>
      </a>
    </div>

    <nav class="navbar">
      <div class="lista">
        <li class="menu">
          <a class="menu_link" href="https://centraldoconcurso.com.br">Inicio </a>
        </li>
        <li class="menu">
          <a class="menu_link" href="https://centraldoconcurso.com.br/#card">Cursos </a>
        </li>
        <li class="menu">
          <a class="menu_link" href="https://centraldoconcurso.com.br/#faq"
            >Duvidas Frequentes
          </a>
        </li>
        <li class="menu">
          <a class="menu_link" href="https://centraldoconcurso.com.br/#contact"
            >Contato</a
          >
        </li>
      </div>
      <div class="btn-menu" @click="isActive = !isActive">
        <Icon icon="eva:menu-2-fill" color="white" />
      </div>
      <div class="list_menu" v-show="isActive">
        <div class="toggle" :class="{ hidden: isActive }">
          <li class="menu">
            <a class="menu_link hidden" href="https://centraldoconcurso.com.br"
              >Incicio
            </a>
          </li>
          <li class="menu">
            <a class="menu_link" href="https://centraldoconcurso.com.br/#card">Cursos </a>
          </li>
          <li class="menu">
            <a class="menu_link" href="https://centraldoconcurso.com.br/#faq"
              >Duvidas Frequentes
            </a>
          </li>
          <li class="menu">
            <a class="menu_link" href="https://centraldoconcurso.com.br/#contact"
              >Contato</a
            >
          </li>
        </div>
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
      // menu: true,
      isActive: false,
    };
  },
  methods: {
    // showMenu() {
    //   this.menu = !this.menu;
    // },
  },
};
</script>

<style lang="scss" scoped>
#header {
  position: relative;
  background: #d8d8d8;
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  a {
    color: #1f1f1f;
    display: block;
    font-size: 1rem;
  }
  .btn-menu {
    display: none;
  }
  .hidden {
    visibility: visible;
  }
  .navbar {
    display: flex;
    justify-content: center;
    gap: 2rem;
    .lista {
      display: flex;
      justify-content: center;
      gap: 2rem;
    }
    @media screen and (max-width: 854px) {
      .btn-menu {
        background: #000;
        padding: 1rem;
        z-index: 4;
        top: 0;
        font-size: 1.5rem;
        border-radius: 0.5rem;
        display: block;
        cursor: pointer;
        margin: 0.7rem 0;
        position: fixed;
      }
      .lista {
        display: none;
      }
    }

    .list_menu {
      display: none;
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
        background: rgba(43, 43, 43, 0.5);
      }
    }

    .menu {
      @media screen and (max-width: 854px) {
        padding: 1.5rem;
      }
    }

    .menu_link {
      color: #4e4e4e;
      position: relative;
      font-weight: 700;
      font-size: 1.1rem;
      @media screen and (max-width: 854px) {
        color: #000000;
      }

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
