<template lang="pug">
  footer.footer
    .container.footer__wrapper
      .footer__info
        .footer__address Санкт-Петербург, ул.Бабушкина, д.12/1, 15
        .footer__phone +7 (812) 377-13-77
      .footer__socials
        ul.socials
          li.socials__item(v-for="(item, i) in socials", :key="i")
            a.socials__link(href="#")
              img(:src="`./static/img/icons/${item}.svg`")
</template>
<style lang="scss">
  @import '../../assets/sass/vars';
  @import '../../assets/sass/mixins';
  .footer {
    background-color: $black;
  }
  .footer__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    @include laptop {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 20px;
    }
  }
  .footer__address {
    font-family: 'Ubuntu Light', sans-serif;
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    @include laptop {
      text-align: center;
    }
  }
  .footer__phone {
    font-family: 'Ubuntu Bold', sans-serif;
    font-size: 14px;
    color: $accent-dark;
    @include laptop {
      text-align: center;
    }
  }
  .footer__info {
    @include laptop {
      margin-bottom: 20px;
    }
  }
  .footer__socials {
    @include tablets {
      padding-bottom: 10px;
      width: 100%;
    }
  }
  .socials {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    @include tablets {
      width: 100%;
      justify-content: space-around;
    }
  }
  .socials__item {
    width: 22px;
    height: 22px;
    margin-left: 20px;
    img {
      width: 100%;
      height: auto;
    }
  }
  .socials__link {
    display: flex;
    align-items: center;
    opacity: .5;
  }
  .socials__link:hover {
    opacity: 1;
  }
</style>
<script>
export default {
  data () {
    return {
      socials: ['vk', 'fb', 'inst', 'twitter']
    }
  }
}
</script>
