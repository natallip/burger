<template lang="pug">
  section.order
    .container.order-wrap
      .title Закажите доставку
      form.form(@submit.prevent="sendOrder")
        .form__col
          .form__row
            .form__elem
              label.form__label(for="username") Имя
              input.form__input(type="text" id="username" name="username", v-model="name" required)
            .form__elem
              label.form__label(for="phone") Телефон
              input.form__input(type="phone" id="phone" name="phone" v-model="phone" required)
          .form__row
            .form__elem
              label.form__label(for="street") Улица
              input.form__input(type="text" id="street" name="street" v-model="street" required)
          .form__row.form__row--row-wrap
            .form__elem
              label.form__label(for="house") Дом
              input.form__input.form__input--small(type="text" id="house" name="house" v-model="house" required)
            .form__elem
              label.form__label(for="corps") Корпус
              input.form__input.form__input--small(type="text" id="corps" name="corps" v-model="corps")
            .form__elem
              label.form__label(for="room") Квартира
              input.form__input.form__input--small(type="text" id="room" name="room" v-model="room")
            .form__elem
              label.form__label(for="floor") Этаж
              input.form__input.form__input--small(type="text" id="floor" name="floor", v-model="floor")
        .form__col
          .form__row
            .form__elem
              label.form__label(for="comment") Комментарий
              textarea.form__textarea(id="comment" name="comment" v-model="comment" required)
          .form__row
            .form__elem.form__elem-check
              input.form__radio(type="radio" id="shortChange" name="payment" value="shortChange" v-model="payment")
              label.form__label.form__label--radio(for="shortChange") Потребуется сдача
            .form__elem.form__elem-check
              input.form__radio(type="radio" id="bankCard" name="payment" value="bankCard")
              label.form__label.form__label--radio(for="bankCard") Оплата по карте
          .form__row
            .form__elem.form__elem-check
              input.form__checkbox(type="checkbox" id="noPhone" name="noPhone" v-model="nophone")
              label.form__label.form__label--checkbox(for="noPhone") Не перезванивать
          .form__btns
            input.btn(type="submit", value="Заказать")
            .btn.bnt--transparent(@click="reset") Очистить
      Modal(v-if="showModal", :type="'order'",  @close="showModal=!showModal")

</template>
<style lang="scss">
  @import '../../assets/sass/vars';
  @import '../../assets/sass/mixins';
  .order {
    background: #000 url('../../assets/img/bg/bg-order.jpg') no-repeat center center/cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title {
      margin-bottom: 80px;
      color: $accent;
      text-align: center;
      @include tablets {
        margin-bottom: 30px;
      }
    }
  }
  .order-wrap {
    padding: 0 80px;
    @include laptop {
      padding: 0;
    }
  }
  .form {
    display: flex;
    position: relative;
    @include laptop {
      flex-direction: column;
    }
  }
  .form__col {
    width: 50%;
    display: flex;
    flex-direction: column;
    @include laptop {
      width: 100%;
    }
  }
  .form__row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;
    @include tablets {
      flex-direction: column;
      margin-bottom: 0;
    }
  }
  .form__row.form__row--row-wrap {
    flex-direction: row;
    flex-wrap: nowrap;
    @include tablets {
      flex-wrap: wrap;
    }
  }
  .form__label {
    color: #fff;
    font-family: 'Ubuntu Light', sans-serif;
    font-size: 14px;
    margin-bottom: 10px;
  }
  .form__input--small {
    width: 98px;
    @include laptop {
      width: 144px;
    }
    @include tablets {
      width: 118px;
    }
  }
  .form__elem {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    flex-shrink: 1;
    flex-grow: 1;
    @include tablets {
      margin-bottom: 20px;
    }
  }
  .form__input {
    border: 1px solid #fff;
    border-radius: 5px;
    background-color: #fff;
    padding: 0 10px;
    height: 34px;
    outline: $accent;
    flex-shrink: 1;
  }
  .form__textarea {
    height: 110px;
    padding: 10px 15px;
    border-radius: 5px;
    outline: none;
    display: flex;
    width: 100%;
    resize: none;
    overflow: auto;
  }
  input[type="radio"],
  input[type="checkbox"] {
    display: none;
  }
  .form__label--radio, .form__label--checkbox {
    position: relative;
    padding-left: 35px;
  }
  .form__label--radio::before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translateY(-50%);
  }
  input[type="radio"]:checked ~ .form__label::after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: red;
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
  }
  .form__label--checkbox::before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 2px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translateY(-50%);
  }
  input[type="checkbox"]:checked ~ .form__label::before {
    // content: '';
    // display: block;
    background: #fff url('../../assets/img/icons/check.svg') no-repeat center center/cover;
    // width: 10px;
    // height: 10px;
    // border-radius: 100%;
    // background-color: red;
    // position: absolute;
    // top: 50%;
    // left: 5px;
    // transform: translateY(-50%);
  }
  .form__btns {
    .btn {
      display: inline-block;
      margin-right: 20px;
      border: none;
    }
    @include laptop {
      display: flex;
      justify-content: center;
    }
  }
  .bnt--transparent {
    background-color: transparent;
  }
  .form__elem-check {
    flex-direction: row;
  }
</style>
<script>
import Modal from '../Common/Modal.vue'
export default {
  data () {
    return {
      showModal: false,
      name: undefined,
      phone: undefined,
      street: undefined,
      house: undefined,
      corps: undefined,
      room: undefined,
      floor: undefined,
      comment: undefined,
      payment: undefined,
      nophone: undefined
    }
  },
  computed: {
    status () {
      return this.$store.state.statusMailSend
    }
  },
  components: {
    Modal
  },
  methods: {
    show () {
      this.showModal = !this.showModal
    },
    sendOrder () {
      let data = {
        name: this.name,
        phone: this.phone,
        street: this.street,
        house: this.house,
        corps: this.corps,
        room: this.room,
        floor: this.floor,
        comment: this.comment,
        payment: this.payment,
        nophone: this.nophone
      }
      this.$store.dispatch('sendOrder', data)
      if (this.status !== undefined) {
        this.showModal = true
      }
      if (this.status === 'success') {
        this.reset()
      }
    },
    reset () {
      this.name = undefined
      this.phone = undefined
      this.street = undefined
      this.house = undefined
      this.corps = undefined
      this.room = undefined
      this.floor = undefined
      this.comment = undefined
      this.payment = undefined
      this.nophone = undefined
    }
  }
}
</script>
