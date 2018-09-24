<template lang="pug">
  section.reviews-section
    ul.reviews
      li.review(v-for="(item, i) in reviews")
        img(:src="item.photo")
        .review__content
          .review__name {{ item.name }}
          .review__text {{ item.text }}
          .review__btn.btn(@click="show(item)") Подробнее
    Modal(v-if="showModal", :item="active", :type="'review'",  @close="showModal=!showModal")

</template>
<style lang="scss">
  @import '../../assets/sass/vars';
  @import '../../assets/sass/mixins';
  .reviews-section {
    min-height: auto;
    width: 100%;
    background-color: #000;
  }
  .reviews {
    display: flex;
    flex-wrap: wrap;
    //height: auto;
    width: 100%;
  }
  .review {
    width: 25%;
    position: relative;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
    @include laptop {
      width: 50%;
    }
    @include phones {
      width: 100%;
    }
  }
  .review__content {
    display: none;
  }
  .review__name {
    font-family: 'Ubuntu Medium', sans-serif;
    font-size: 14px;
    color: #fff;
    margin-bottom: 15px;
    font-weight: 700;
  }
  .review__text {
    font-family: 'Ubuntu Regular', sans-serif;
    font-size: 14px;
    line-height: 1.6;
    color: #fff;
    margin-bottom: 20px;
    @include tablets {
      display: none;
    }
  }
  .review__btn.btn {
    display: inline-block;
    background-color: $black;
    &:hover {
      background-color: $accent;
      color: #fff;
    }
  }
  .review:hover {
    .review__content {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba($black, .8);
      width: 100%;
      height: 100%;
      padding: 50px 30px;
    }
  }
</style>
<script>
import Modal from '../Common/Modal.vue'
export default {
  data () {
    return {
      showModal: false,
      active: {},
      reviews: [
        { photo: './static/img/reviews/photo1.jpg', name: 'Константин Спилберг1', text: 'Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным.' },
        { photo: './static/img/reviews/photo2.jpg', name: 'Константин Спилберг2', text: 'Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным.' },
        { photo: './static/img/reviews/photo3.jpg', name: 'Константин Спилберг3', text: 'Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным.' },
        { photo: './static/img/reviews/photo4.jpg', name: 'Константин Спилберг4', text: 'Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным.' },
        { photo: './static/img/reviews/photo5.jpg', name: 'Константин Спилберг5', text: 'Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным.' },
        { photo: './static/img/reviews/photo6.jpg', name: 'Константин Спилберг6', text: 'Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным.' },
        { photo: './static/img/reviews/photo7.jpg', name: 'Константин Спилберг7', text: 'Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным.' },
        { photo: './static/img/reviews/photo8.jpg', name: 'Константин Спилберг8', text: 'Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным.' }
      ]
    }
  },
  components: {
    Modal
  },
  methods: {
    show (item) {
      this.active = item
      this.showModal = !this.showModal
    }
  }
}
</script>
