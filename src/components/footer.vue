<template>
  <div class="footer">
    <div class="footer_needProject needProject">
      <h2 class="header_text needProject_header">
        Нужен проект?
      </h2>
      <p class="blue_text needProject_content">
        Оставьте заявку, либо звоните, мы пообщаемся <br>
        и сами все за вас заполним: <a class="content_tel" href="tel:+7 812 915-15-15">+7 812 915-15-15</a>
      </p>
    </div>
    <form class="footer_proposal proposal">
      <input class="blue_text proposal_input input" type="text" placeholder="Ваше имя*">
      <input class="blue_text proposal_input input" type="text" placeholder="Ваш телефон*">
      <input class="blue_text proposal_input input" type="text" placeholder="Ваш email*">
      <input class="blue_text proposal_input input" type="text" placeholder="Описание проекта ">
      <button  class="blue_text sendProposal">Отправить</button>
      <p class="blue_text proposal_agreement">
        Нажимая на кнопку, вы даете согласие на обработку <a href="">персональных данных</a>
        и соглашаетесь с <a href="">политикой конфиденциальности</a>
      </p>
    </form>
    <div class="contacts">
      <a class="blue_text email" href="mailto:reception@jetsetholding.com">reception@jetsetholding.com</a>
      <a class="contacts_logo"></a>
      <a class="contacts_fb"></a>
      <a class="contacts_insta"></a>
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
  background: url("~@/assets/img/footer_background.png") center no-repeat;
  background-size: cover;
  //display: flex;
  //flex-flow: column wrap;
  display: grid;
  grid-template-columns: 41% 41.6%;
  grid-template-rows: 1fr 1fr;
  gap: 0 17.8%;
  &_proposal{
    grid-column: 2;
    grid-row: span 2;
    display: flex;
    flex-flow: column;
    .input{
      border: 0;
      border-bottom: 1px solid #150F0F;
      background: transparent;
      color: #150F0F;
      font-size: 18px;
      line-height: 150%;
      padding: 5px 0;
      margin-bottom: 22px;
      &::placeholder{
        color: #150F0F;
      }
    }
    .sendProposal{
      max-width: 269px;
      width: 50%;
      padding: 10px 80px;
      background: #1E30F4;
      border: 1px solid #FFFFFF;
      font-size: 18px;
      line-height: 150%;
      letter-spacing: 1px;
      color: #FFFFFF;
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover{
        background: #FFFFFF;
        color: #1E30F4;
        border: 1px solid #1E30F4;
      }
      &:focus{
        background: transparent;
        color: #1E30F4;
        border: 1px solid #1E30F4;
        outline: none;
      }
      &:active{
        background: transparent;
        color: #FFFFFF;
        border: 1px solid #FFFFFF;
      }
    }
    .proposal_agreement{
      font-size: 12px;
      line-height: 150%;
      color: #150F0F;
      a{
        text-decoration-line: underline;
        color: #150F0F;
      }
    }
  }
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
      .content_tel{
        font-size: inherit;
        line-height: inherit;
        color: inherit;
        text-decoration: inherit;
      }
    }

  }
  .contacts{
    grid-column: 1;

    display: flex;
    flex-flow: row wrap;

    .email{
      flex: 100% 1 1;
      font-size: 20px;
      line-height: 150%;
      color: #150F0F;
      margin-bottom: 2.7em;
    }
    &_logo{
      display: block;
      background: url("../assets/icons/logo.svg") center no-repeat;
      width: 71px;
      height: 71px;
      margin-right: 6em;

    }
    &_fb{
      display: block;
      background: url("../assets/icons/facebook.svg") center no-repeat;
      width: 71px;
      height: 71px;
    }
    &_insta{
      display: block;
      background: url("../assets/icons/instagram.svg") center no-repeat;
      width: 71px;
      height: 71px;
    }
  }
}
</style>