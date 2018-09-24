<template lang="pug">
  section.slider-section
    .container.slider__wrap
      .slider
        .slider__wrap
          ul.slider__list(ref="slider")
            li.slider__item(v-for="(slide, i) in slides", :key="i", ref="slide")
              .slider__photo
                img(:src="slide.photo")
              .slider__descr
                .title {{ slide.name }}
                .text {{ slide.descr }}
                .slider__price-wrap
                  .slider__price
                    .slider__number {{ slide.price }}
                    .slider__curr рублей
                  .slider__order.btn Заказать

              .slider__composition.composition
                .composition__name состав
                .composition__table.table
                  .table__row(v-for="(item, i) in slide.composition", :key="i")
                    img.table__icon(:src="iconSrc(item.name)")
                    .table__text {{ item.name }}
                    .table__number {{ item.weight }} г

              .slider__kkal.kkal
                .kkal__text ккал
                .kkal__value {{ slide.kkal }}

        .slider__controls
          .slider__btn.slider__btn--prev(@click="moveSlide('prev')")
            img.icon-arrow(src="../../assets/img/icons/arrow-scroll.svg")
          .slider__btn.slider__btn--next(@click="moveSlide('next')")
            img.icon-arrow(src="../../assets/img/icons/arrow-scroll.svg")
        </div>
</template>
<style lang="scss">
  @import '../../assets/sass/vars';
  @import '../../assets/sass/mixins';
  .slider-section {
    display: flex;
    background: -moz-linear-gradient( 0deg, rgb(249,180,59) 0%, rgb(235,140,56) 48%, rgb(249,180,59) 74%);
    background: -webkit-linear-gradient( 0deg, rgb(249,180,59) 0%, rgb(235,140,56) 48%, rgb(249,180,59) 74%);
    background: -ms-linear-gradient( 0deg, rgb(249,180,59) 0%, rgb(235,140,56) 48%, rgb(249,180,59) 74%);
    background: linear-gradient( 0deg, rgb(249,180,59) 0%, rgb(235,140,56) 48%, rgb(249,180,59) 74%);
    .title {
      color: #fff;
      margin-bottom: 30px;
      white-space: normal;
    }
    .text {
      color: #fff;
      margin-bottom: 30px;
      white-space: normal;
      @include laptop {
        margin-bottom: 20px;
      }
    }
  }
  .slider {
    position: relative;
    height: 480px;
    width: 1100px;
    @include laptop {
      width: 668px;
    }
    @include tablets {
      width: 300px;
    }
  }
  .slider__wrap {
    overflow: hidden;
    display: flex;
    align-items: center;
    margin: auto;
    height: 480px;
    width: 1100px;
    @include laptop {
      width: 668px;
    }
    @include tablets {
      width: 300px;
    }
  }
  .slider__list {
    position: absolute;
    white-space: nowrap;
    font-size: 0;
    top: 0%;
    left: 0%;
    transition: .5s all linear;
  }
  .slider__btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .slider__btn--prev {
    left: 0%;
    transform: rotate(90deg);
  }
  .slider__btn--next {
    right: 0%;
    transform: rotate(-90deg);
  }
  .slider__item {
    display: flex;
    width: 1100px;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
    position: relative;
    @include laptop {
      width: 668px;
      flex-direction: column;
      padding: 0 30px;
    }
    @include tablets {
      width: 300px;
    }
  }
  .slider__photo {
    width: 49%;
    @include laptop {
      width: 50%;
      margin-bottom: 26px;
    }
    @include tablets {
      width: 80%;
    }
    img {
      width: 100%;
    }
  }
  .slider__descr {
    display: flex;
    flex-direction: column;
    width: 49%;
    @include laptop {
      width: 90%;
    }
  }
  .slider__composition {
    position: absolute;
    top: 0;
    left: 0;
    @include tablets {
      display: none;
    }
  }
  .composition {
    width: 90px;
    height: 90px;
    border-radius: 5px;
    text-align: center;
    background: $accent-dark url("../../assets/img/icons/burger.svg") no-repeat 50% 25%;
    cursor: pointer;
    @include laptop {
      width: 60px;
      height: 70px;
    }
    &__name {
      color: #fff;
      font-family: 'Gagalin Regular', sans-serif;
      font-size: 14px;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 10%;
      @include laptop {
        bottom: 3px;
      }
    }
    &__table {
      display: none;
    }
  }
  .composition:hover {
    .composition__table {
      display: block;
    }
  }
  .table {
    background: #fff;
    border-radius: 5px;
    opacity: .9;
    width: 270px;
    padding: 5px 20px;
    position: absolute;
    top: 0;
    left: 90px;
    @include laptop {
      left: 60px;
      width: 240px;
    }
  }
  .table__row {
    display: flex;
    padding: 10px 0;
    font-size: 14px;
    align-items: center;
    justify-content: space-between;
  }
  .table__icon {
    width: 30px;
    height: 30px;
    @include laptop {
      width: 20px;
      height: 20px;
    }
  }
  .table__text {
    font-family: 'Ubuntu Medium', sans-serif;
    flex-grow: 1;
    text-align: left;
    padding-left: 20px;
  }
  .table__number {
    font-family: 'Ubuntu Light', sans-serif;
  }
  .slider__price-wrap {
    display: flex;
    align-items: flex-end;
  }
  .slider__price {
    display: flex;
    align-items: flex-end;
    margin-right: 20px;
    @include tablets {
      margin-right: 15px;
    }
  }
  .slider__number, .slider__curr {
    font-family: 'Gagalin Regular', sans-serif;
    font-size: 68px;
    color: $accent-dark;
    @include laptop {
      font-size: 54px;
    }
    @include tablets {
      font-size: 38px;
    }
  }
  .slider__number {
    margin-right: 10px;
    line-height: 64px;
    @include laptop {
      line-height: 54px;
      margin-right: 5px;
    }
    @include tablets {
      line-height: 38px;
    }
  }
  .slider__curr {
    font-size: 32px;
    @include laptop {
      font-size: 22px;
    }
    @include tablets {
      font-size: 20px;
    }
  }
  .slider__kkal {
    position: absolute;
    bottom: 0;
    left: 0;
    @include laptop {
      top: 0;
      left: 90%;
    }
    @include tablets {
      left: 85%;
      display: none;
    }
  }
  .kkal {
    width: 65px;
    height: 80px;
    background: url("../../assets/img/icons/kkal.svg") no-repeat 50% 0%/contain;
    text-align: center;
    opacity: .5;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: 'Gagalin Regular', sans-serif;
    @include laptop {
      width: 45px;
      height: 60px;
      opacity: .8;
    }
    &__text {
      font-size: 14px;
      position: absolute;
      bottom: 0;
      @include laptop {
        font-size: 12px;
      }
    }
    &__value {
      font-size: 20px;
      @include laptop {
        font-size: 16px;
      }
    }
    @include tablets {
      display: none;
    }
  }
</style>
<script>
export default {
  data () {
    return {
      indexActive: 0,
      slides: [
        { photo: './static/img/burgers-slider/burger_sandwich_PNG4124.png', id: 0, name: 'Dark BEEF Burger0', descr: 'Ваш старый добрый знакомый, с рубленым бифштексом из 100% говядины, тремя кусочками нежнейшего сыра эмменталь, двумя помидорами, луком, салатом и соусом гриль теперь с добавлением экзотического соуса чураско.', price: '500', kkal: '1200', composition: [{name: 'говядина', weight: '300'}, {name: 'булочки', weight: '100'}, {name: 'зелень', weight: '70'}, {name: 'соус', weight: '150'}, {name: 'овощи', weight: '200'}, {name: 'сыр', weight: '80'}] },
        { photo: './static/img/burgers-slider/Chiken-burger.png', id: 1, name: 'Dark BEEF Burger1', descr: 'Ваш старый добрый знакомый, с рубленым бифштексом из 100% говядины, тремя кусочками нежнейшего сыра эмменталь, двумя помидорами, луком, салатом и соусом гриль теперь с добавлением экзотического соуса чураско.', price: '600', kkal: '1200', composition: [{name: 'говядина', weight: '300'}, {name: 'булочки', weight: '100'}, {name: 'зелень', weight: '70'}, {name: 'соус', weight: '150'}, {name: 'овощи', weight: '200'}, {name: 'сыр', weight: '80'}] },
        { photo: './static/assets/img/burgers-slider/burger_sandwich_PNG4124.png', id: 2, name: 'Dark BEEF Burger2', descr: 'Ваш старый добрый знакомый, с рубленым бифштексом из 100% говядины, тремя кусочками нежнейшего сыра эмменталь, двумя помидорами, луком, салатом и соусом гриль теперь с добавлением экзотического соуса чураско.', price: '700', kkal: '1200', composition: [{name: 'говядина', weight: '300'}, {name: 'булочки', weight: '100'}, {name: 'зелень', weight: '70'}, {name: 'соус', weight: '150'}, {name: 'овощи', weight: '200'}, {name: 'сыр', weight: '80'}] },
        { photo: './static/assets/img/burgers-slider/Chiken-burger.png', id: 0, name: 'Dark BEEF Burger3', descr: 'Ваш старый добрый знакомый, с рубленым бифштексом из 100% говядины, тремя кусочками нежнейшего сыра эмменталь, двумя помидорами, луком, салатом и соусом гриль теперь с добавлением экзотического соуса чураско.', price: '800', kkal: '1200', composition: [{name: 'говядина', weight: '300'}, {name: 'булочки', weight: '100'}, {name: 'зелень', weight: '70'}, {name: 'соус', weight: '150'}, {name: 'овощи', weight: '200'}, {name: 'сыр', weight: '80'}] }
      ]
    }
  },
  computed: {
    slider () {
      return this.$refs.slider
    }
  },
  methods: {
    moveSlide (type) {
      let items = this.$refs.slide

      type === 'next' ? this.indexActive += 1 : this.indexActive -= 1
      if (this.indexActive < 0) this.indexActive = items.length - 1
      if (this.indexActive > items.length - 1) this.indexActive = 0

      this.slider.style.left = this.indexActive * (-100) + '%'
    },
    iconSrc (type) {
      let name = ''
      if (type === 'говядина') name = 'beef'
      if (type === 'булочки') name = 'buns'
      if (type === 'зелень') name = 'salad'
      if (type === 'соус') name = 'sauce'
      if (type === 'овощи') name = 'cucumber'
      if (type === 'сыр') name = 'cheese'
      let src = `./static/img/icons/${name}.svg`
      return src
    }
  }
}
</script>
