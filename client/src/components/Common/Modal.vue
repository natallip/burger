<template lang="pug">
  .modal(ref="modal", @click="close")
    .modal__bg
    .modal__block
      .modal__name(v-if="type==='review'") {{ item.name }}
      .modal__text(v-if="type==='review'") {{ item.text }}
      .modal__text(v-if="type==='order'") Сообщение отправлено
      .modal__close
        img(src="../../assets/img/icons/close.svg")

</template>
<style lang="scss">
  @import '../../assets/sass/vars';
  @import '../../assets/sass/mixins';
  .modal {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
  }
  .modal__bg {
    width: 100%;
    height: 100%;
    background-color: rgba($black, .9);
    position: absolute;
    top: 0;
    left: 0;
  }
  .modal__block {
    max-width: 460px;
    height: auto;
    padding: 30px 20px;
    background-color: #fff;
    color: $black;
    position: relative;
    border-radius: 5px;
    @include tablets {
      max-width: 300px;
    }
  }
  .modal__close {
    position: absolute;
    top: 12px;
    right: 10px;
    width: 20px;
    height: 20px;
    fill: red;
    opacity: .8;
    &:hover {
      transform: scale(1.1);
      opacity: .9;
    }
  }
  .modal__name {
    font-family: 'Gagalin Regular', sans-serif;
    font-size: 14px;
    margin-bottom: 20px;
    font-weight: 700;
  }
  .modal__text {
    font-family: 'Ubuntu Light', sans-serif;
    font-size: 14px;
    line-height: 1.6;
  }
</style>
<script>
export default {
  props: {
    item: Object,
    type: String
  },
  methods: {
    close (e) {
      if (!e.target.closest('.modal__block') || e.target.closest('.modal__close')) this.$emit('close')
    }
  }
}
</script>
