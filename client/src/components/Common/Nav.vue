<template lang="pug">
  .nav(@click="changeSection($event)")
    .nav__item(v-for="(item, i) in sections",
                :key="i",
                ref="navItems",
                :data-item="i",
                :class="i === +activeIndex? 'nav__item--active' : ''")
</template>
<style lang="scss">
  @import '../../assets/sass/vars';
  @import '../../assets/sass/mixins';
  .nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 9%;
    right: 9%;
    z-index: 1;
  }
  .nav__item {
    width: 7px;
    height: 7px;
    border-radius: 100%;
    background: #fff;
    margin-bottom: 18px;
    position: relative;
  }
  .nav__item:hover::after, .nav__item--active::after {
    content: '';
    display: block;
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 100%;
    background: transparent;
    border: 1px solid $accent;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
<script>
export default {
  computed: {
    activeIndex () {
      return this.$store.state.activeSection
    },
    sections () {
      return this.$store.state.sections
    }
  },
  mounted () {
    this.setActive()
  },
  methods: {
    setActive () {
      let items = this.$refs.navItems
      items.forEach(item => {
        item.classList.remove('nav__item--active')
      })
      items[this.activeIndex].classList.add('nav__item--active')
    },
    changeSection (e) {
      let i = e.target.dataset.item
      this.$store.dispatch('setSection', i)
    }
  }
}
</script>
