<template>
  <div class="container-faq">
    <div class="card-faq" v-for="i in civilDestaque" :key="i.id">
      <div>
        <div class="app-slot-faq" @click="i.showCard = !i.showCard">
          <div>
            <p v-for="cards in i.cardModal" :key="cards.id">{{ cards.title }}</p>
          </div>
        </div>
        <div class="card-slot-hide" v-show="i.showCard">
          <p v-for="(card, index) in i.text" :key="index">
            {{ index }}- <span>{{ card.text }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    civilDestaque() {
      return this.$store.state.civilDestaque;
    },
  },
};
</script>

<style scoped>
.faq {
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  padding-top: 2rem;
}

.container-faq {
  width: 50%;
  padding-top: 3rem;
  padding-left: 3rem;
  display: block;
  z-index: 9999;
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
  box-shadow: 0rem 0rem 0.1rem rgba(0, 0, 0, 0.2);
  z-index: 0;
  padding: 1rem 1rem;
  cursor: pointer;
}

.card-slot-hide {
  background: #2323236e;
  z-index: 99;
  padding: 1rem 2rem;
}
.card-slot-hide p {
  margin-bottom: 1rem;
  font-weight: 600;
}
.card-slot-hide p span {
  color: #363636;
  font-size: 0.9rem;
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
