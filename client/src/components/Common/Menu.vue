<template lang="pug">
  div
    .overlay(ref="menu")
      ul.menu(@click="changeSection($event)")
        li(v-for="(item, i) in menu",
            :key="i",
            :class="item.btn ? 'btn' : 'menu__link'",
            :data-item="i+1",) {{ item.name }}

    .hamburger(ref="hamburger", @click="toggleMenu")
      span.line(v-for="n in 3", :key="n")

</template>
<style lang="scss">
  @import '../../assets/sass/vars';
  @import '../../assets/sass/mixins';
  .header__menu {
    position: absolute;
    top: 20px;
    right: 10%;
  }
  .menu {
    display: flex;
    align-items: center;
    .btn {
      order: 1;
    }
    @include laptop {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .btn {
        display: none;
      }
    }
  }
  .overlay {
    @include laptop {
      position: fixed;
      top: 0%;
      left: 0%;
      width: 100vw;
      height: 0%;
      background-color: $black;
      opacity: 0;
      z-index: 2;
      visibility: hidden;
      overflow: hidden;
      transition: opacity .35s, visibility .35s, height .35s;
    }
  }
  .overlay.is-active {
    opacity: .9;
    visibility: visible;
    height: 100%;
    z-index: 2;
    .menu {
      display: flex;
    }
  }
  .menu__link {
    color: #fff;
    margin-right: 35px;
    cursor: pointer;
    position: relative;
    font-size: 13px;
    text-transform: uppercase;
    font-family: 'Ubuntu Medium', sans-serif;
    opacity: 0;
    text-decoration: none;
    padding-bottom: 10px;
    &:hover:after,
    &:focus:after,
    &:active:after {
      width: 100%;
    }
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0%;
      transform: translateX(-50%);
      height: 3px;
      background: $accent;
      transition: .35s;
    }
    animation: fadeInRight .5s ease forwards;
    animation-delay: .35s;

    &:nth-of-type(2) {
      animation-delay: .4s;
    }
    &:nth-of-type(3) {
      animation-delay: .45s;
    }
    &:nth-of-type(4) {
      animation-delay: .50s;
    }
    &:nth-of-type(5) {
      animation-delay: .55s;
    }
    &:nth-of-type(6) {
      animation-delay: .6s;
    }
    &::before {
      content: '';
      display: block;
      width: 4px;
      height: 4px;
      border-radius: 100%;
      background-color: #fff;
      position: absolute;
      top: 40%;
      left: -20px;
    }
    &:first-child::before {
      display: none;
    }
    @include laptop {
      &::before {
        display: none;
      }
      margin-bottom: 35px;
      font-weight: 700;
      font-size: 18px;
      align-items: center;
      margin-right: 0;
    }
  }
  .hamburger {
    display: none;
    @include laptop {
      display: block;
      position: absolute;
      top: 10px;
      right: 10%;
      cursor: pointer;
      z-index: 3;
    }
  }
  .hamburger .line {
    width: 40px;
    height: 5px;
    margin: 8px auto;
    background-color: #fff;
    display: block;
    transition: all .3s ease-in-out;
    @include tablets {
      width: 28px;
      height: 3px;
      margin: 6px auto;
    }
  }
  .hamburger.is-active .line:nth-child(2) {
    opacity: 0;
  }
  .hamburger.is-active .line:nth-child(1) {
    transform: translateY(13px) rotate(45deg);
    @include tablets {
      transform: translateY(9px) rotate(45deg);
    }
  }
  .hamburger.is-active .line:nth-child(3) {
    transform: translateY(-13px) rotate(-45deg);
    @include tablets {
      transform: translateY(-9px) rotate(-45deg);
    }
  }
  @keyframes fadeInRight {
    0% {
      opacity: 0;
      left: 20%;
    }
    100% {
      opacity: 1;
      left: 0;
    }
  }
</style>
<script>
import Nav from './Nav.vue'
export default {
  data () {
    return {
      menu: [
        { name: 'О нас' },
        { name: 'Бургеры' },
        { name: 'Команда' },
        { name: 'Меню' },
        { name: 'Отзывы' },
        { name: 'Заказать', btn: true },
        { name: 'Контакты' }
      ],
      hamburger: this.$refs.hamburger
    }
  },
  components: {
    Nav
  },
  methods: {
    toggleMenu () {
      const hamburger = this.$refs.hamburger
      const menu = this.$refs.menu

      hamburger.classList.toggle('is-active')
      menu.classList.toggle('is-active')
    },
    changeSection (e) {
      let i = e.target.dataset.item
      this.$store.dispatch('setSection', i)
    }
  }
}
</script>
