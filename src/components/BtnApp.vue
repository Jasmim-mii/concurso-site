<template>
  <a href="#policia-federal" class="btn btn-primary">{{ btnPrimaryTitle }}</a>
  <a href="#contact" class="btn btn-secondy">{{ btnSecondyTilte }}</a>
</template>

<script>
export default {
  props: {
    btnPrimaryTitle: {
      type: String,
    },
    btnSecondyTilte: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  padding: 1rem 1.5rem;
  text-align: center;
  border: none;
  font-size: 0.75rem;
  margin-top: 1rem;
  border-radius: 0.2rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  margin-right: 0.8rem;
  transition: 0.3s linear;
  &:hover {
    color: #eee;
    background: #074d66;
  }
}
.btn-primary {
  background: #fff;
}
.btn-secondy {
  background: #000;
  color: #eee;
}

@media screen and (min-width: 350px) and (max-width: 600px) {
  .btn {
    padding: 0.89rem 1.2rem;
    text-align: center;
    border: none;
    display: block;
    font-size: 0.65rem;
    margin-top: 1rem;
    border-radius: 0.5rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #eee;
    background: #000;
    transition: 0.2s linear;
    cursor: pointer;
  }
}
</style>
