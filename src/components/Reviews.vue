<template>
  <div class="reviews-wrapper">
    <Block-header>ОТЗЫВЫ</Block-header>
    <div class="dots dots-horizontal"></div>
    <div class="reviews">
      <div class="glide__track" data-glide-el="track">
        <div class="glide__slides">
          <div v-for="(reviewer, index) in reviews" :key="index" class="glide__slide">
            <div class="logo_container-review">
              <img class="logo" :src="require(`../assets/img/customers/${reviewer.img}-review.png`)">
              <img class="logo-hover" :src="require(`../assets/img/customers/${reviewer.img}-review-hover.png`)">
            </div>
            <div class="review">
              <p class="reviewer_name header_text">{{ reviewer.name }}</p>
              <p class="reviewer_position blue_text">{{ reviewer.position }}</p>
              <p class="reviewer_review blue_text" v-html="reviewer.review"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlockHeader from "@/components/block-header";
import Glide from "@glidejs/glide";

export default {
  components:{
    "Block-header": BlockHeader,
  },
  data(){
    return{
      vueGlide: null,

      reviews:[
        {
          img:"opumis",
          name:"Андрей Сазонов",
          position: "Заместитель директора по маркетингу\n" +
              "и рекламе «Орими Трейд»",
          review: 'Спасибо компании <span class="reviewer_review-blue">JetSet</span> за креативный подход к работе! \n' +
              'Только положительные впечатления от совместного сотрудничества.'
        },
        {
          img:"tsum",
          name:"Ольга Комиссар",
          position: "Маркетинг Директор «ЦУМ» 2018",
          review: '<span class="reviewer_review-blue">JetSet</span> – это качество в короткие сроки. Ответственность и дедлайны. Вместе сняли промо-ролик: все профессионально и на высоком уровне.'
        },
        {
          img:"lujniki",
          name:"Долгов Александр",
          position: "Управляющий Аквакомплекса АО «Лужники»",
          review: '<span class="reviewer_review-blue">Джет Сет Холдинг</span> это: Креатив. Профессионализм. Результат выше ожиданий. Команда Джет Сет Холдинга в кратчайшие сроки и крайне профессионально реализовала поставленные перед ней задачи! Recommend 100%'
        },
        {
          img:"dog",
          name:"Инесса Гаевская",
          position: "Генеральный директор, издатель журнала «Собака.ru»",
          review: 'Церемонии «Что Где Есть в Петербурге», Best Dressed и «ТОП-50 мы развивали вместе с <span class="reviewer_review-blue">JetSet</span>. Свежий взгляд и креативный подход к решению задач – то, что продолжает вдохновлять нас уже много лет. Спасибо за такое великолепное сотрудничество!'
        },
        {
          img:"rosoez",
          name:"Алексеева Елена",
          position: "Начальник отдела маркетинга\n" +
              "АО «Особая экономическая зона «Санкт-Петербург»",
          review: 'Всегда сложно оценить то, что еще не существует. Но есть задачи и желание сделать любой проект лучше, современнее, технологичнее, красивее, креативнее, чтобы «не как у всех».\n' +
              'Результаты сотрудничества с командой <span class="reviewer_review-blue">«Джетсет»</span> превосходили наши ожидания: от застройки экспозиций на форумах до съемки корпоративного фильма и разработки медиа-контента для выставочного оборудования.'
        },
        {
          img:"pm",
          name:"Cengiz Cilengiroglu",
          position: "Vice President Reduced Risk Products \n" +
              "at Philip Morris International",
          review: '<span class="reviewer_review-blue">JetSet</span> transcends beyond being a good agency or business partner, they go on the journey with you.  In every step of this journey, you feel personal touch, involvement, ownership and comforting presence ensuring you that it won’t just be ok, but beyond your expectations. Together we did numerous successful launches, but 2020 was probably our best collective work ever.'
        }
      ],
    }
  },
  methods: {

  },
  mounted() {


    this.vueGlide = new Glide('.reviews',{
      startAt: 0,
      perView: 1.2,
      focusAt: 0.1,
      gap: 45,
      breakpoints: {
        768: {
          perView: 1,
          focusAt: 'center',
          gap: 30,
        }
      }
    });

    this.vueGlide.mount();

  }
}
</script>
<style lang="scss">
.reviews-wrapper{
  position: relative;
  margin: 96px 0;
  .dots-horizontal {
    position: absolute;
    z-index: -1;
    width: 63.75%;
    height: 194.71px;
    mask-image: url("~@/assets/icons/dot.svg");
    mask-repeat: space;
    background-color: rgba(21,15,15,0.05);
    left: 18.125%;
    top: 0;
  }
}
.glide__slides{
  align-items: stretch;
}
.reviews{
  position: relative;
  z-index: 1;
  width: 100%;
  .glide__slide{
    width: 74.8vw;
    height: auto;
    display: flex;
    .logo_container-review{
        position: relative;
        display: flex;
        flex: 37.14% 1 1;
        //padding: 37.14%;
        justify-content: center;
        align-items: center;
        background: #1C2CDD;
        transition: background-color 0.2s ease;
        .logo{

        }
        .logo-hover{
          position: absolute;
          z-index: 2;
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        &:hover{
          background: #ffffff;
          .logo-hover{
            opacity: 1;
          }
        }
    }
    .review{
      flex: 70% 2 1;
      display: flex;
      flex-flow: column nowrap;
      padding: 40px 55px;
      background-color: #ffffff;
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
      p{
        margin: 0;
      }
      .reviewer_name{
        font-size: 24px;
        line-height: 31px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
      }
      .reviewer_position{
        font-size: 18px;
        line-height: 27px;
        margin: 10px 0 24px;
      }
      .reviewer_review {
        font-size: 18px;
        line-height: 27px;
        color: #150F0F;
        &-blue{
          color: #1E30F4;
        }
      }
    }
  }
}
@media (max-width: 1365px) {
  .reviews {
    .glide__slide {
      width: 80vw;
      padding: 0 4.68vw;
      flex-flow: column nowrap;
      .logo_container-review {
        overflow: hidden;
        position: relative;

        display: flex;
        flex: none;
        max-height: 200px;
        //padding: 37.14%;
        justify-content: flex-start;
        align-items: center;
        background: #1C2CDD;
        transition: background-color 0.2s ease;

        .logo {
          position: relative;
          //width: 60%;
        }

        .logo-hover {
          position: absolute;
          width: 60%;
          z-index: 2;
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        &:hover {
          background: #ffffff;

          .logo-hover {
            opacity: 1;
          }
        }
      }

      .review {
        flex: 70% 2 1;
        display: flex;
        flex-flow: column nowrap;
        padding: 40px 8.125vw;
        background-color: #ffffff;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);

        p {
          margin: 0;
        }

        .reviewer_name {
          font-size: 24px;
          line-height: 31px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .reviewer_position {
          font-size: 18px;
          line-height: 27px;
          margin: 10px 0 24px;
        }

        .reviewer_review {
          font-size: 18px;
          line-height: 27px;
          color: #150F0F;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .reviews {
    .glide__slide {
      .logo_container-review {

        .logo {
          width: 60%;
        }
      }
      .review {

        padding: 34px 8.125vw;
        p {
          margin: 0;
        }
        .reviewer_name {
          font-size: 16px;
          line-height: 20px;
        }
        .reviewer_position {
          font-size: 10px;
          line-height: 15px;
          margin: 8px 0 31px;
        }
        .reviewer_review {
          font-size: 14px;
          line-height: 20px;

        }
      }
    }
  }
}
</style>