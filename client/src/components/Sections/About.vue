<template lang="pug">
  section.about
    .container.about__wrap
      .about__title
        .title Мы лучшие
      .about__content
        .about__col
          img.about__icon(src="../../assets/img/icons/meat.svg")
          .subtitle 100% свежее мясо
          .about__text Драма представляет собой деструктивный цикл. Анапест представляет собой анапест. Ямб неравномерен.
        .about__col
          img.about__icon(src="../../assets/img/icons/hand.svg")
          .subtitle Ручная сборка
          .about__text Драма представляет собой деструктивный цикл. Анапест представляет собой анапест. Ямб неравномерен. Драма представляет собой деструктивный цикл. Анапест представляет собой анапест. Ямб неравномерен.
        .about__col
          img.about__icon(src="../../assets/img/icons/natural.svg")
          .subtitle Натуральные ингредиенты
          .text Драма представляет собой деструктивный цикл. Анапест представляет собой анапест. Ямб неравномерен.

</template>
<style lang="scss">
  @import '../../assets/sass/vars';
  @import '../../assets/sass/mixins';
  .about {
    background: #000 url('../../assets/img/bg/bg-second.jpg') no-repeat center center/cover;
    display: flex;
    .title {
      margin-bottom: 80px;
      @include laptop {
        margin-bottom: 30px;
      }
    }
    .subtitle {
      margin-bottom: 15px;
    }
  }
  .about__wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    align-items: center;
  }
  .about__content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @include laptop {
      flex-direction: column;
    }
  }
  .about__col {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 30%;
  }
  .about__icon {
    width: 100px;
    height: 100px;
    margin-bottom: 30px;
    @include laptop {
      width: 50px;
      height: 50px;
    }
  }
  .about__text {
    font-size: 14px;
    font-family: 'Ubuntu Light', sans-serif;
    line-height: 1.6;
  }
</style>
<script>
</script>
