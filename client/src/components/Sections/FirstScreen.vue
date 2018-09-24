<template lang="pug">
  section.first-screen
    .container.first-screen__wrap
      img.first-screen__img(src="../../assets/img/bg/bg-burger.png")
      .first-screen__title
        .title Мы делаем
        .subtitle натуральные бургеры
      .first-screen__arrow-down(@click="changeSection(1)")
        img.icon-arrow(src="../../assets/img/icons/arrow-scroll.svg")

</template>
<style lang="scss">
  @import '../../assets/sass/vars';
  @import '../../assets/sass/mixins';
  .first-screen {
    background: #000 url('../../assets/img/bg/bg-first.jpg') no-repeat center center/cover;
    display: flex;
  }
  .first-screen__wrap {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include tablets {
      flex-direction: column;
    }
  }
  .first-screen__img {
    width: 40%;
    height: auto;
    display: block;
    margin-top: -60px;
    @include tablets {
      width: 70%;
      margin-top: -80px;
      margin-bottom: 30px;
    }
  }
  .first-screen__title {
    width: 55%;
    .title {
      color: $accent;
      margin-bottom: 20px;
    }
    .subtitle {
      color: #fff;
      font-size: 56px;
      max-width: 300px;
      @include laptop {
        font-size: 40px;
      }
      @include tablets {
        font-size: 30px;
      }
      @include phones {
        font-size: 20px;
      }
    }
  }
  .first-screen__arrow-down {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
  .icon-arrow {
    width: 33px;
    height: 33px;
    opacity: .6;
    &:hover {
      opacity: 1;
    }
  }
</style>
<script>
export default {
  methods: {
    changeSection (e) {
      let i = e
      this.$store.dispatch('setSection', i)
    }
  }
}
</script>
