<template>
  <section id="home" class="imgagehome">
    <swiper-app />
    <!-- <div class="slideprimarycontainer">
      <h2>Mais de 50mil aprovado</h2>
      <h3 class="global-text">Estude com quem entende do assunto</h3>
    </div>
    <div class="cardslide">
      <div class="cards">
        <img alt="" src="../assets/pc-ba(4).png" />
        <div class="descriptioncards">
          <h4 class="category">Ensino médio</h4>
          <h4 class="title">
            Policia Civil <span class="divisor">-</span>
            <span> Agente Administrativo</span>
          </h4>
          <p class="">Faixa salarial de 2.000 - 5.000</p>
          <p class="price">R$ 199.00</p>
          <a href="">Saiba mais</a>
        </div>
      </div>
      <div class="cards">
        <img alt="" src="../assets/pc-ba(4).png" />
        <div class="descriptioncards">
          <h4 class="category">Ensino médio</h4>
          <h4 class="title">
            Policia Civil <span class="divisor">-</span>
            <span> Agente Administrativo</span>
          </h4>
          <p class="">Faixa salarial de 2.000 - 5.000</p>
          <p class="price">R$ 199.00</p>
          <a href="">Saiba mais</a>
        </div>
      </div>
    </div> -->
  </section>
</template>

<script>
import SwiperApp from "./SwiperApp.vue";
export default {
  components: { SwiperApp },
};
</script>

<style lang="scss" scoped>
// .imgagehome {
//   background: rgb(6, 76, 102);
//   background: linear-gradient(0deg, rgba(6, 76, 102, 1) 0%, rgb(0, 0, 0) 100%);
//   height: 100%;
//   object-fit: cover;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   align-items: center;
//   padding: 0 3rem;

//   .slideprimarycontainer {
//     width: 75%;

//     h2 {
//       color: #0e89b6;
//       font-size: 3rem;
//     }
//     .global-text {
//       color: #d8d8d8;
//       font-size: 1.5rem;
//       padding: 1rem 0;
//     }
//   }
//   .cardslide {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 1rem;

//     .cards {
//       background: #d8d8d8;
//       display: table;
//       width: 17rem;
//       border-radius: 0.5rem;
//       padding: 1rem;

//       img {
//         width: 100%;
//         height: 15rem;
//         box-shadow: 0rem 0rem 1rem rgba(0, 0, 0, 0.5);
//       }
//       .descriptioncards {
//         position: relative;
//         padding-top: 2rem;
//         .category {
//           position: absolute;
//           top: -2rem;
//           margin: 0 2rem;
//           text-align: center;
//           font-size: 1.2rem;
//           width: 70%;
//           background: #0a7298;
//           color: #d8d8d8;
//           padding: 0.8rem;
//           border-radius: 37%;
//         }
//         .title {
//           font-size: 1.2rem;
//           letter-spacing: 0.05rem;
//           margin-bottom: 1rem;
//           position: relative;
//           .divisor {
//             color: #0a7298;
//           }

//           span {
//             &::before {
//               content: "";
//               position: absolute;
//               bottom: 0;
//               left: 0;
//               width: 50%;
//               margin: 0 4rem;
//               height: 0.1rem;
//               margin-bottom: -0.5rem;
//               background: #0a7298;
//             }
//           }
//         }
//         p {
//           font-size: 1rem;
//         }
//         .price {
//           padding: 1rem 0;
//           font-size: 1.2rem;
//         }
//         a {
//           font-size: 1rem;
//           color: #d8d8d8;
//           padding: 0.8rem 1.5rem;
//           background: #000;
//           display: inline-block;
//           margin-bottom: 0.1rem;
//         }
//       }
//     }
//   }
// }
</style>
