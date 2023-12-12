<template>
  <div id="faq">
    <div class="container">
      <div class="faq">
        <div class="content-faq">
          <h2 class="title">Faq</h2>
          <p>Tire as principais duvidas sobre os cursos</p>
        </div>
        <div class="container-faq">
          <div class="card-faq" v-for="i in faq" :key="i.id">
            <div @click="i.isActive = !i.isActive">
              <div class="app-slot-faq" @click="i.showCard = !i.showCard">
                <div :class="{ active: i.isActive }">
                  <p>{{ i.title }}</p>
                </div>
              </div>
              <div class="card-slot-hide" v-show="i.showCard">
                <p>{{ i.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      faq: [
        {
          id: 1,
          showCard: false,
          isActive: false,
          title: "Tenho interesse neste curso, como posso comprar?",
          text:
            "Para comprar este curso, clique no botão “Comprar”. Lembre-se de que nem todos os cursos estarão sempre disponíveis para compra. É possível que o Autor ou Autora esteja preparando uma nova turma ainda sem inscrições abertas.",
          icon: "credit-card",
        },
        {
          id: 2,
          showCard: false,
          isActive: false,
          title: "O que é e como funciona o Certificado de Conclusão digital?",
          text:
            "Alguns cursos online oferecem um certificado digital de conclusão. Alunos podem emitir esse certificado ao final do curso ou entrando em contato com o Autor ou Autora. Esses certificados podem ser compartilhados em redes sociais como o LinkedIn e inseridos em informações curriculares.",
          icon: "square-check",
        },
        {
          id: 3,
          showCard: false,
          isActive: false,
          title: "Como funciona o “Prazo de Garantia”?",
          text:
            "O Prazo de Garantia é o período que você tem para pedir o reembolso integral do valor pago pela sua compra, caso o produto não seja satisfatório. Assim que solicitado, seu reembolso é processado automaticamente pela Hotmart em até 5 dias. Para pagamentos com boleto bancário, você precisa preencher uma conta bancária para receber o dinheiro. Passados os 5 dias, o valor poderá ser identificado em sua conta em até 7 dias úteis. Já o estorno da fatura do cartão de crédito varia de acordo com o meio de pagamento e pode ocorrer na fatura atual ou na seguinte.",
          icon: "tv",
        },
        {
          id: 4,
          showCard: false,
          isActive: false,
          title: "Qual a melhor forma de estudar para concursos públicos?",
          text:
            "Para estudar para concurso público, você deve avaliar as disciplinas e os assuntos cobrados e criar um plano de estudo personalizado, considerando o tempo disponível até a data da prova.  Dedique-se em criar metas diárias para administrar seu tempo de forma eficiente, e alterne as metodologias de estudo, entre videoaulas, resumos e resolução de provas anteriores — isso ajuda a entender o perfil da banca e a se familiarizar com o formato das questões do exame. Também tenha o hábito de revisar regularmente o material estudado, a fim de reforçar seus conhecimentos e garantir um bom desempenho no dia da prova. Aqui no Aprova, nossa equipe de especialistas trabalha com uma metodologia exclusiva que garante você saber quais os temas serão mais cobrados na prova, a metodologia “Direto ao Ponto”. Sempre que um novo Edital é publicado, nossa equipe confere as disciplinas e assuntos que serão exigidos na prova. Em seguida, analisamos os editais e as provas dos concursos anteriores da mesma instituição e banca. Assim, você tem certeza de que estudará os conteúdos mais importantes do Edital.",
          icon: "headset",
        },
        {
          id: 5,
          showCard: false,
          isActive: false,
          title: " Videoaulas versus apostilas e PDFs?",
          text:
            "O formato de conteúdo em videoaulas é dinâmico, por apresentar recursos visuais e verbais, o que facilita na compreensão de conceitos complexos. Já as apostilas/PDFs não requerem acesso à internet, sendo uma opção para quem opta por um ambiente de estudo off-line.",
          icon: "headset",
        },
      ],
    };
  },
};
</script>

<style scoped>
.faq {
  position: relative;
  z-index: 2;
  background: #f4f4f4;
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  padding-top: 2rem;
  padding-bottom: 4rem;
}

.container-faq {
  width: 100;
  display: block;
}
.cards-faq {
  padding: 2rem;
}
.content-faq {
  position: relative;
  z-index: 9;
}

.content-faq .title {
  margin-bottom: 2rem;
  text-transform: uppercase;
  font-size: 1.5rem;
}

.app-slot-faq {
  position: relative;
  margin-top: 1rem;
  background: #ffff;
  box-shadow: 0rem 0rem 0.5rem rgba(0, 0, 0, 0.2);
  z-index: 0;
  padding: 1rem 1rem;
  cursor: pointer;
}

.card-slot-hide {
  background: #c4c4c46e;
  z-index: 99;
  padding: 1rem 2rem;
  color: #232323;
}

span h1::before {
  content: "Lorem ipsum";
  position: absolute;
  display: block;
  opacity: 5;
  top: -0.6rem;
  left: 2.5rem;
  font-size: 2.5rem;
  color: rgba(70, 70, 70, 0.384);
}

.active::before {
  position: absolute;
  content: "";
  width: 0.2rem;
  height: 100%;
  top: 0;
  left: 0;
  background: #0a7298;
  border-radius: 0.1rem 0 0 0.1rem;
}

.active::before {
  position: absolute;
  content: "";
  width: 0.2rem;
  height: 100%;
  top: 0;
  left: 0;
  background: #0a7298;
  border-radius: 0.1rem 0 0 0.1rem;
}
@media screen and (min-width: 350px) and (max-width: 900px) {
  .container {
    padding: 3rem 1.2rem;
  }
  .faq {
    display: grid;
    grid-template-columns: 1fr;
  }
  .app-slot-faq,
  .card-slot-hide {
    font-size: 0.85rem;
  }
  span h1::before {
    content: "Lorem ipsum";
    position: absolute;
    display: block;
    opacity: 5;
    top: -0.6rem;
    left: 2.5rem;
    font-size: 1.5rem;
    color: #af9b5181;
  }
}
</style>
