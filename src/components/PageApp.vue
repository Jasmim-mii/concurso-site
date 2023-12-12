<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-footer">
        <Icon
          icon="mingcute:close-fill"
          class="modal-default-button"
          @click="$emit('close')"
        />
      </div>
      <div class="modal-container">
        <div class="modal-header">
          <slot> </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: { Icon },
  computed: {
    civil() {
      return this.$store.state.civil;
    },
  },
};
</script>

<style scoped>
.modal-header {
  padding-bottom: 3rem;
  width: 100%;
  z-index: 9;
  @media screen and (max-width: 954px) {
    padding-bottom: 0;
  }
}
.modal-mask {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  /* display: table-cell;
  vertical-align: middle; */
}

.modal-container {
  width: 100%;
  height: 90vh;
  margin: 0px auto;
  background-color: #fff;
  overflow: scroll;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-default-button {
  float: right;
  margin-right: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #eee;
  font-size: 2rem;
  cursor: pointer;
}
</style>
