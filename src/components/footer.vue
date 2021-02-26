<template>
  <div class="footer">
    <div class="footer_needProject needProject">
      <h2 class="header_text needProject_header">
        Нужен проект?
      </h2>
      <p class="blue_text needProject_content">
        Оставьте заявку, либо звоните, мы пообщаемся <br>
        и сами все за вас заполним: +7 812 915-15-15
      </p>
    </div>
    <form class="footer_feedback feedback">
      <input type="text">
      <input type="text">
      <input type="text">
      <input type="text">
      <button>Отправить</button>
      <p>
        Нажимая на кнопку, вы даете согласие на обработку <a href="">персональных данных</a>
        и соглашаетесь с <a href="">политикой конфиденциальности</a>
      </p>
    </form>
    <div class="contacts">
      <a href="mailto:reception@jetsetholding.com">reception@jetsetholding.com</a>
      <div class="contact_logo"></div>
      <div class="contact_fb"></div>
      <div class="contact_insta"></div>
    </div>
  </div>
</template>

<script>


export default {
  components: {

  },
  data(){
    return{

    }
  },
  methods: {
  },
  mounted() {

  }
}

</script>

<style lang="scss">
.footer{
  padding: 5.5vw 12.6%;
  display: flex;
  flex-flow: column wrap;
  background: url("~@/assets/img/footer_background.png") center no-repeat;
  background-size: cover;

  .needProject{
    &_header{
      font-size: 24px;
      line-height: 36px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin: 0 0 7px;
    }
    &_content{
      font-size: 18px;
      line-height: 27px;
      color: #150F0F;
      margin-top: 0;
    }
  }
}
</style>