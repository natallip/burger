<template lang="pug">
  header.header
    .header__logo
      img.logo(src="../../assets/img/logo.png")
    .header__menu
      Menu

</template>
<style lang="scss">
  @import '../../assets/sass/vars';
  @import '../../assets/sass/mixins';
  .header {
    position: relative;
    z-index: 1;
  }
  .header__logo {
    position: absolute;
    top: 10px;
    left: 20px;
    width: 92px;
    height: 70px;
    @include tablets {
      width: 60px;
      height: auto;
    }
  }
  .logo {
    display: block;
    width: 100%;
    height: auto;
  }
  .header__menu {
    position: absolute;
    top: 20px;
    right: 10%;
  }
</style>
<script>
import Nav from './Nav.vue'
import Menu from './Menu.vue'
export default {
  data () {
    return {
      menu: [
        { name: 'О нас' },
        { name: 'Бургеры' },
        { name: 'Команда' },
        { name: 'Меню' },
        { name: 'Отзывы' },
        { name: 'Контакты' },
        { name: 'Заказать', btn: true }
      ],
      hamburger: this.$refs.hamburger
    }
  },
  components: {
    Nav,
    Menu
  },
  methods: {
    toggleMenu () {
      const hamburger = this.$refs.hamburger
      const menu = this.$refs.menu

      hamburger.classList.toggle('is-active')
      menu.classList.toggle('is-active')
    }
  }
}
</script>
