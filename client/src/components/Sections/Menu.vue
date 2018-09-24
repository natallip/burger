<template lang="pug">
  section.menu-section
      .title Меню
      ul.accordion-menu(@click="toggle($event)")
        li.accordion-menu__item(v-for="(item, i) in menu", ref="accordionItems")
          .accordion-menu__trigger(:class="`accordion-menu__toggle--bg${i+1}`")
            .accordion-menu__text {{ item.title }}
          .accordion-menu__content {{ item.content }}

</template>
<style lang="scss">
  @import '../../assets/sass/vars';
  @import '../../assets/sass/mixins';
  .menu-section {
    background: #000 url('../../assets/img/bg/bg-menu.jpg') no-repeat center center/cover;
    display: flex;
    justify-content: space-between;
    .title {
      padding-top: 10%;
      padding-left: 10%;
      color: #fff;
    }
    @include tablets {
      flex-direction: column;
    }
  }
  .accordion-menu {
    display: flex;
    @include tablets {
      flex-direction: column;
    }
  }
  .accordion-menu__item {
    display: flex;
    @include tablets {
      flex-direction: column;
    }
  }
  .accordion-menu__trigger {
    width: 80px;
    cursor: pointer;
    position: relative;
    @include tablets {
      height: 80px;
      width: 100%;
    }
  }
  .accordion-menu__text {
    font-family: 'Gagalin Regular', sans-serif;
    font-size: 40px;
    color: #fff;
    white-space: nowrap;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-90deg);
    @include tablets {
      transform: translate(-50%, -50%);
      //position: relative;
      text-align: center;
    }
  }
  .accordion-menu__content {
    width: 0;
    display: none;
    transition: .2s linear;
  }
  .accordion-menu__item--active {
    .accordion-menu__content {
      display: flex;
      font-family: 'Ubuntu Regular', sans-serif;
      font-size: 14px;
      line-height: 1.6;
      color: rgba(#fff, .8);
      background-color: rgba($black, .8);
      padding: 60px 40px;
      width: 300px;
      @include tablets {
        height: 400px;
        width: 100%;
        padding: 30px 20px;
      }
    }
  }
  .accordion-menu__toggle--bg1 {
    background: url('../../assets/img/menu/menu1.jpg') no-repeat 0% 0%/cover;
    @include tablets {
      background: rgba($accent-dark, .7);
    }
  }
  .accordion-menu__toggle--bg2 {
    background: url('../../assets/img/menu/menu2.jpg') no-repeat 0% 0%/cover;
    @include tablets {
      background: rgba($accent, .7);
    }
  }
  .accordion-menu__toggle--bg3 {
    background: url('../../assets/img/menu/menu3.jpg') no-repeat 0% 0%/cover;
    @include tablets {
      background: rgba($accent-dark, .7);
    }
  }

</style>
<script>
export default {
  data () {
    return {
      menu: [
        { title: 'для мясоедов', content: 'Речевой акт редуцирует диалектический характер. Речевой акт редуцирует диалектический характер. Речевой акт редуцирует диалектический характер. Речевой акт редуцирует диалектический характер.' },
        { title: 'вегетарианское', content: 'Речевой акт редуцирует диалектический характер. Речевой акт редуцирует диалектический характер. Речевой акт редуцирует диалектический характер. Речевой акт редуцирует диалектический характер.' },
        { title: 'диетическое', content: 'Речевой акт редуцирует диалектический характер. Речевой акт редуцирует диалектический характер. Речевой акт редуцирует диалектический характер. Речевой акт редуцирует диалектический характер.' }
      ]
    }
  },
  computed: {
    items () {
      return this.$refs.accordionItems
    }
  },
  methods: {
    toggle (e) {
      let target = e.target
      let trigger = target.closest('.accordion-menu__trigger')
      let active = target.closest('.accordion-menu__item')

      if (!trigger) return
      if (active.classList.contains('accordion-menu__item--active')) {
        active.classList.remove('accordion-menu__item--active')
      } else {
        this.items.forEach(item => {
          item.classList.remove('accordion-menu__item--active')
        })
        active.classList.add('accordion-menu__item--active')
      }
    }
  }
}
</script>
