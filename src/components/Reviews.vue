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
      <div class="glide__arrows" data-glide-el="controls">
        <div class="glide__arrow glide__arrow--left" data-glide-dir="<"></div>
        <div class="glide__arrow glide__arrow--right" data-glide-dir=">"></div>
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
          img:"pm",
          name:"Cengiz Cilengiroglu",
          position: "Vice President Reduced Risk Products \n" +
              "at Philip Morris International",
          review: '<span class="reviewer_review-blue">JetSet</span> transcends beyond being a good agency or business partner, they go on the journey with you.  In every step of this journey, you feel personal touch, involvement, ownership and comforting presence ensuring you that it won’t just be ok, but beyond your expectations. Together we did numerous successful launches, but 2020 was probably our best collective work ever.'
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
          img:"opumis",
          name:"Андрей Сазонов",
          position: "Заместитель директора по маркетингу\n" +
              "и рекламе «Орими Трейд»",
          review: 'Спасибо компании <span class="reviewer_review-blue">JetSet</span> за креативный подход к работе! \n' +
              'Только положительные впечатления от совместного сотрудничества.'
        }
      ],
    }
  },
  methods: {

  },
  mounted() {


    this.vueGlide = new Glide('.reviews',{
      startAt: 0,
      perView: 1.15,
      focusAt: 0,
      gap: 45,
      breakpoints: {
        1200: {
          gap: 39,
        },
        1050: {
          gap: 27,
        },
        768: {
          perView: 1,
          focusAt: 'center',
          gap: 22,
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
  margin: 6vw 0 4.31vw;
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
  overflow: hidden;
  .glide__slides{
    overflow: visible !important;
    padding-left: 12.6%;
  }
  .glide__track{
    overflow: visible;
    cursor: grab;
  }
  .glide__slide{
    width: 74.8vw;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .logo_container-review{
      position: relative;
      display: flex;
      height: 100%;
      flex: 1 2 34%;
      justify-content: center;
      align-items: center;
      background: #1C2CDD;
      transition: background-color 0.2s ease;
      .logo{
        width: 100%;
        }
      .logo-hover{
        position: absolute;
        width: 100%;
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
      height: 100%;
      flex: 2 1 70%;
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
        line-height: 130%;
        letter-spacing: 0.2em;
        text-transform: uppercase;
      }
      .reviewer_position{
        font-size: 18px;
        line-height: 150%;
        margin: 10px 0 24px;
      }
      .reviewer_review {
        font-size: 18px;
        line-height: 150%;
        color: #150F0F;
        &-blue{
          color: #1E30F4;
        }
      }
    }
  }
  .glide__arrows{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    pointer-events: none;
    .glide__arrow{
      pointer-events: all;
      cursor: pointer;
      max-width: 120px;
      height: 100%;
      width: 20vw;
      background-color: transparent;
    }
  }

}
@media (max-width: 1200px) {
  .reviews {
    .glide__slides{
      padding-left: 8%;
    }
    .glide__slide {
      .review {
        padding: 33px 46px 27px;
        .reviewer_name {
          font-size: 20px;
        }
        .reviewer_position {
          font-size: 15px;
          margin: 8px 0 20px;
        }
        .reviewer_review {
          font-size: 15px;

        }
      }
    }
  }
}
@media (max-width: 1050px) {
  .reviews {
    .glide__slide {
      .review {
        padding: 22px 31px 20px;
        .reviewer_name {
          font-size: 13px;
        }
        .reviewer_position {
          font-size: 10px;
          margin: 7px 0 15px;
        }
        .reviewer_review {
          font-size: 10px;

        }
      }
    }
  }
}
@media (max-width: 760px) {
  .reviews {
    .glide__slides{
      padding-left: 0;
    }
    .glide__slide {
      width: 80vw;
      padding: 0 4.68vw;
      flex-flow: column nowrap;
      .logo_container-review {
        overflow: hidden;
        position: relative;
        padding-bottom: 40%;
        display: flex;
        flex: 1 1 30%;
        width: 100%;
        max-height: 200px;
        //padding: 37.14%;
        justify-content: flex-start;
        align-items: center;
        background: #1C2CDD;
        transition: background-color 0.2s ease;

        .logo {
          position: absolute;
          top: 0;
          width: auto;
          height: 100%;
        }

        .logo-hover {
          position: absolute;
          width: auto;
          height: 100%;
          z-index: 2;
          top: 0;
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
        padding: 10.625vw 8.125vw 17px;
        background-color: #ffffff;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);

        p {
          margin: 0;
        }

        .reviewer_name {
          font-size: 16px;
        }

        .reviewer_position {
          font-size: 10px;
          margin: 8px 0 31px;
        }

        .reviewer_review {
          font-size: 14px;
          color: #150F0F;
        }
      }
    }
  }
}
@media (max-width: 760px) {
  .reviews {
    .glide__slide {
      .logo_container-review {

        .logo {
          //width: 60%;
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