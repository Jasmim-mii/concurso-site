<template>
  <section id="footer">
    <div id="logo">
      <div class="description-footer">
        <h3 class="logo">
          <a href=""
            ><div class="logocentral">Central</div>
            <div class="concursop">Do Concurso</div>
          </a>
        </h3>
        <p class="info-text">Estude para concurso publico com quem sabe ensinar</p>
        <div class="footer-icon">
          <div class="icon link">
            <font-awesome-icon icon="fa-brands fa-github" />
          </div>
          <div class="icon link">
            <font-awesome-icon :icon="['fab', 'linkedin-in']" />
          </div>
          <div class="icon link">
            <font-awesome-icon icon="fa-brands fa-square-behance" />
          </div>
        </div>
      </div>
    </div>
    <div class="terms">
      <h5>
        &copy;2023 centraldoconcurso.com
        <a href=""> - Todos os direitos são reservados</a>
      </h5>
      <p class="info-text center">
        Criado por
        <a target="_blank" href="https://michelejasmim.vercel.app/">michele jasmim </a>
      </p>
    </div>
    <div id="afiliado">
      <h3 class="info-text">Afiliado:</h3>
      <div class="img-afiliado">
        <img src="../assets/afiliadologo.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#footer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  width: 95%;
  background: #000;
  gap: 1rem;
  position: fixed;
  bottom: 0;
  z-index: 0;
  padding: 2rem 3rem;
  @media screen and (max-width: 654px) {
    display: block;
    max-width: 100%;
    padding: 2rem 2rem;
  }

  #logo {
    width: 50%;
    @media screen and (max-width: 954px) {
      width: 20rem;
    }

    h3 {
      padding-bottom: 0.7rem;
      span {
        color: #0a7298;
      }

      a {
        color: #eee;
        font-size: 1rem;
      }
    }
    .info-text {
      color: #eee;
      font-size: 0.8rem;
      font-weight: 600;
    }
    .footer-icon {
      display: flex;
      gap: 1rem;
      color: #eee;
      padding-top: 0.9rem;
      .icon {
        font-size: 1.2rem;
      }
      &:hover {
        color: #0a7298;
      }
    }
  }
  .terms {
    color: #cacaca;
    text-align: center;
    @media screen and (max-width: 954px) {
      width: 20rem;
      font-size: 0.8rem;
    }
    a {
      color: #eeee;
    }
    .center {
      text-align: center;
      font-size: 0.8rem;
      color: #eee;
      margin-top: 1rem;

      @media screen and (max-width: 954px) {
        text-align: left;
      }
      a {
        font-weight: 600;
        transition: 0.2s;
        &:hover {
          color: #0a7298;
        }
      }
    }
  }
  #afiliado {
    width: 100%;
    text-align: center;

    .info-text {
      color: #eee;
      font-size: 1.1em;
      padding-bottom: 1rem;
      font-weight: 600;
    }
    .img-afiliado {
      margin: 0 auto;
      width: 100%;
      height: 5rem;
    }
  }
}
</style>
