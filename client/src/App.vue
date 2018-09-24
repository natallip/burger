<template lang="pug">
  .app
    Nav
    //.main(ref="main")
    TheHeader
    FirstScreen(ref="first")
    About(ref="about")
    Slider(ref="slider")
    Team(ref="team")
    Menu(ref="menu")
    Reviews(ref="reviews")
    Order(ref="order")
    Map(ref="map")
    // router-view
    TheFooter
</template>

<script>
import TheHeader from './components/Common/Header.vue'
import Nav from './components/Common/Nav.vue'
import FirstScreen from './components/Sections/FirstScreen.vue'
import About from './components/Sections/About.vue'
import Slider from './components/Sections/Slider.vue'
import Team from './components/Sections/Team.vue'
import Menu from './components/Sections/Menu.vue'
import Reviews from './components/Sections/Reviews.vue'
import Order from './components/Sections/Order.vue'
import Map from './components/Sections/Map.vue'
import TheFooter from './components/Common/Footer.vue'
export default {
  data () {
    return {
      inScroll: false
    }
  },
  computed: {
    sections () {
      let arr = [this.$refs.first.$el,
                  this.$refs.about.$el,
                  this.$refs.slider.$el,
                  this.$refs.team.$el,
                  this.$refs.menu.$el,
                  this.$refs.reviews.$el,
                  this.$refs.order.$el,
                  this.$refs.map.$el
      ]
      return arr
    },
    activeIndex () {
      return this.$store.state.activeSection
    },
    main () {
      return this.$refs.main
    }
  },
  components: {
    TheHeader,
    Nav,
    FirstScreen,
    About,
    Slider,
    Team,
    Menu,
    Reviews,
    Order,
    Map,
    TheFooter
  },
  mounted () {
    this.$store.dispatch('setSections', this.sections)
    this.scroll()
  },
  methods: {
    scroll333 () {
      function getCoords (elem) {
        let box = elem.getBoundingClientRect()

        return {
          top: box.top + pageYOffset,
          left: box.left + pageXOffset
        }
      }
      let position = -getCoords(this.sections[this.activeIndex]).top + 'px'
      console.log(777, position, this.sections[this.activeIndex])
      this.main.style.transform = 'translate3d(0,' + position + ', 0)'
      this.main.style.transitionDuration = '1.3s'
    },
    scroll222 () {
      let position = (this.activeIndex * -100) + 'vh'

      this.main.style.transform = 'translate3d(0,' + position + ', 0)'
      this.main.style.transitionDuration = '1.3s'
    },
    scroll () {
      let element = document.body
      let toTarget = this.sections[this.activeIndex]
      let duration = 1000
      console.log(888, toTarget)
      function scrollTo (element, toTarget, duration) {
        if (duration <= 0) return
        let difference = toTarget.getBoundingClientRect().top
        let perTick = difference / duration * 10

        setTimeout(() => {
          element.scrollTop = element.scrollTop + perTick
          console.log(999, element.scrollTop)
          scrollTo(element, toTarget, duration - 10)
        }, 10)
      }
      scrollTo(element, toTarget, duration)
    }
  },
  watch: {
    activeIndex: function () {
      this.scroll()
    }
  }
}
</script>

<style src="./assets/sass/main.scss" lang="scss">
</style>
