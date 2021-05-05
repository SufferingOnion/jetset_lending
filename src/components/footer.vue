<template>
  <div class="footer">
    <div class="footer_contacts contacts">
      <h2 class="header_text contacts_header">
        Наш офис:
      </h2>
      <p class="blue_text contacts_content">
        г. Санкт-Петербург, <br>
        Красногвардейская пл, д. 3 литер Е офис 313 <br>
        Design Disrtict DAA
      </p>
      <a class="blue_text email" href="mailto:welcome@jetsetholding.com">welcome@jetsetholding.com</a>
    </div>
    <form class="footer_proposal proposal">
      <input v-model="name" class="blue_text proposal_input input" type="text" placeholder="Ваше имя*" required>
      <input v-model="tel" v-mask="'+7(###)###-##-##'" class="blue_text proposal_input input" type="text" placeholder="+7(___)___-__-__"  required>
      <input v-model="email" class="blue_text proposal_input input" type="text" placeholder="Ваш email*"  required>
      <input v-model="msg" class="blue_text proposal_input input" type="text" placeholder="Описание проекта ">
      <button  class="blue_text sendProposal">Отправить</button>
      <p class="blue_text proposal_agreement">
        Нажимая на кнопку, вы даете согласие на обработку <a href="">персональных данных</a>
        и соглашаетесь с <a href="">политикой конфиденциальности</a>
      </p>
    </form>
    <div class="social">
      <a class="social_logo" @click="ScrollUp"></a>
      <a class="social_fb"></a>
      <a class="social_insta"></a>
    </div>
  </div>
</template>

<script>


export default {
  components: {

  },
  data(){
    return{
      name: '',
      tel: '',
      email: '',
      msg: '',
    }
  },
  methods: {
    ScrollUp(){
      let t,s;
      s=document.body.scrollTop||window.pageYOffset;
      t=setInterval(function(){if(s>0)window.scroll(0,s-=50);else clearInterval(t)},5);
    }
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
      min-width: 269px;
      max-width: 290px;
      width: 50%;
      padding: 10px 80px;
      margin: 23px 0 22px;
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
  .contacts{
    .email{
      font-size: 18px;
      line-height: 150%;
      color: #150F0F;
      margin-bottom: 2.7em;
    }
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
  .social{
    grid-column: 1;
    max-width: 320px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    &_logo{
      grid-column: span 2;
      display: block;
      background: url("../assets/icons/logo.svg") center no-repeat;
      width: 71px;
      height: 71px;
      //color: #1E30F4;
    }

    &_fb{
      display: block;
      mask: url("../assets/icons/facebook.svg") center no-repeat;
      width: 71px;
      height: 71px;
      background-color: #1E30F4;
    }
    &_insta{
      display: block;
      mask: url("../assets/icons/instagram.svg") center no-repeat;
      width: 71px;
      height: 71px;
      background-color: #1E30F4;
    }
    &_logo, &_fb, &_insta{
      cursor: pointer;
      transition: all 0.2s ease-in-out;
    }
    &_fb:hover, &_insta:hover{
      background-color: #FFFFFF;
    }
    &_logo:hover{
      background: url("../assets/icons/logo-hover.svg") center no-repeat;
      color: #1E30F4;
    }
  }
}
@media (max-width: 900px) {
  .footer{
    padding: 6vw 6vw;
    grid-template-columns: repeat(1, 100%);
    grid-auto-flow: row;
    grid-template-rows: auto;
    gap: 48px 0;
    &_proposal{
      max-width: 500px;

      grid-column: 1;
      grid-row: span 1;
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
        min-width: 269px;
        max-width: 290px;
        width: 100%;
      }
      .proposal_agreement{
        font-size: 12px;
        line-height: 150%;
      }
    }
    .contacts{
      max-width: 500px;

      &_header{
        font-size: 24px;
        line-height: 36px;
        margin: 0 0 7px;
      }
      &_content,.email{
        font-size: 20px;
        line-height: 27px;
        margin-top: 0;
      }

    }
    .social{

      grid-column: 1;
      &_logo{
        width: 71px;
        height: 71px;
        margin-right: 6em;

      }
      &_fb{
        width: 71px;
        height: 71px;
      }
      &_insta{
        width: 71px;
        height: 71px;
      }
    }
  }
}
@media (max-width: 500px) {
  .footer{
    padding: 9.375vw 4.68vw;

    &_proposal{

      .input{
        font-size: 18px;
        line-height: 150%;
        padding: 5px 0;
        margin-bottom: 27px;
      }
      .sendProposal{
        min-width: 269px;
        max-width: 290px;
        width: 100%;

      }
      .proposal_agreement{
        font-size: 10px;
        line-height: 150%;
      }
    }
    .contacts{

      &_header{
        font-size: 18px;
        line-height: 31px;
        margin: 0 0 13px;
      }
      &_content,.email{
        font-size: 15px;
        line-height: 22.5px;
        margin-top: 0;
      }

    }
    .social{
      grid-column: 1;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      max-width: 100%;
      &_logo{
        grid-column: span 2;
        width: 71px;
        height: 71px;
        margin-right: 0;


      }
      &_fb{
        width: 71px;
        height: 71px;
      }
      &_insta{
        width: 71px;
        height: 71px;
      }
    }
  }
}
</style>