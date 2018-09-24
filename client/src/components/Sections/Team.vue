<template lang="pug">
  section.team
    .team__accordion
      .title Команда
      ul.accordion(@click="toggle($event)")
        li.accordion__item(v-for="(item, i) in team", ref="accordionItems")
          .accordion__trigger {{ item.name }}
          .accordion__content
            .accordion__photo
              img(:src="item.photo")
            .accordion__info
              .accordion__title {{ item.position }}
              .accordion__descr {{ item.descr }}
</template>
<style lang="scss">
  @import '../../assets/sass/vars';
  @import '../../assets/sass/mixins';
  .team {
    background: #000 url('../../assets/img/bg/bg-team.jpg') no-repeat center center/cover;
    display: flex;
    justify-content: flex-end;
    .title {
      margin-bottom: 80px;
      color: $accent;
    }
  }
  .team__accordion {
    width: 50%;
    background-color: rgba($black, .8);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 80px;
    @include laptop {
      width: 70%;
      padding: 50px;
    }
    @include tablets {
      width: 100%;
    }
  }
  .accordion {
    display: flex;
    flex-direction: column;
  }
  .accordion__item {
    display: flex;
    flex-direction: column;
    margin-left: 40px;
  }
  .accordion__trigger {
    font-family: 'Gagalin Regular', sans-serif;
    font-size: 14px;
    color: #fff;
    margin: 20px 0;
    position: relative;
    cursor: pointer;
    &::before {
      content: '';
      display: block;
      width: 0;
      height: 0;
      border: 6px solid transparent;
      border-bottom: 10px solid $accent;
      position: absolute;
      top: -2px;
      left: -30px;
      transition: .2s linear;
    }
  }
  .accordion__content {
    display: none;
  }
  .accordion__item--active {
    .accordion__trigger {
      color: $accent;
    }
    .accordion__trigger::before {
      transform: rotate(180deg);
    }
    .accordion__content {
      display: flex;
      @include tablets {
        flex-direction: column;
      }
    }
  }
  .accordion__photo {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    overflow: hidden;
    flex-shrink: 0;
    margin-right: 20px;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
    @include tablets {
      margin-bottom: 20px;
    }
  }
  .accordion__title {
    font-family: 'Ubuntu Medium', sans-serif;
    font-size: 14px;
    color: #fff;
    margin-bottom: 15px;
    font-weight: 700;
  }
  .accordion__descr {
    font-family: 'Ubuntu Regular', sans-serif;
    font-size: 14px;
    line-height: 1.6;
    color: #fff;
  }
</style>
<script>
export default {
  data () {
    return {
      team: [
        { photo: './static/img/team/team1.jpg', name: 'Дэниэл Редклиф', position: 'Оператор', descr: 'С радостью поможет подобрать идеальный бургер и оформить заказ' },
        { photo: './static/img/team/team1.jpg', name: 'Ричард Джеймс', position: 'Оператор', descr: 'С радостью поможет подобрать идеальный бургер и оформить заказ' },
        { photo: './static/img/team/team1.jpg', name: 'Джейк Финн', position: 'Оператор', descr: 'С радостью поможет подобрать идеальный бургер и оформить заказ' },
        { photo: './static/img/team/team1.jpg', name: 'Николай Иванов', position: 'Оператор', descr: 'С радостью поможет подобрать идеальный бургер и оформить заказ' }
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
      let trigger = target.closest('.accordion__trigger')
      let active = target.closest('.accordion__item')

      if (!trigger) return
      if (active.classList.contains('accordion__item--active')) {
        active.classList.remove('accordion__item--active')
      } else {
        this.items.forEach(item => {
          item.classList.remove('accordion__item--active')
        })
        active.classList.add('accordion__item--active')
      }
    }
  }
}
</script>
