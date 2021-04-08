<template>
  <div class="crew-wrapper">
    <Block-header>КОМАНДА</Block-header>
    <div class="crew">
      <div class="glide__track" data-glide-el="track">
        <div class="glide__slides">
          <div v-for="(member, index) in crew" :key="index" class="glide__slide">
            <div class="member_container">
              <img class="member"
                   :src="require(`../assets/img/crew/${member.name + ' ' + member.sername}.jpg`)"
              >
              <div class="details">
                <h2 class="header_text member-name">
                  {{ member.name }}<br>
                  {{ member.sername }}
                </h2>
                <h3 class="blue_text member-position">
                  {{ member.position }}
                </h3>
              </div>
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
      Glide: null,

      crew:[
        {
          name:"Денис",
          sername: "ПОПОВ",
          position: "CEO",
        },
        {
          name:"Сергей",
          sername: "Козырев",
          position: "Creative Director",
        },
        {
          name:"Мария",
          sername: "Клюкина",
          position: "Key Account Director",
        },
        {
          name:"Петр",
          sername: "Мартынов",
          position: "Moscow Regional Director",
        },
        {
          name:"Максим",
          sername: "Кудрявцев",
          position: "Production director",
        },
        {
          name:"Антон",
          sername: "Шипицын",
          position: "Event director",
        },
        {
          name:"Михаил",
          sername: "Суворов",
          position: "Art director",
        },
        {
          name:"Владимир",
          sername: "Ушаков",
          position: "Executive Director",
        },
        {
          name:"Алексей",
          sername: "Сахадж",
          position: "Project producer",
        },
        {
          name:"Инна",
          sername: "Сидорова",
          position: "Account manager",
        },
        {
          name:"Анна",
          sername: "Пузырева",
          position: "Account manager",
        },
        {
          name:"Карина",
          sername: "Фролова",
          position: "Account Manager",
        },
        {
          name:"Ксения",
          sername: "Тарасевич",
          position: "Account Manager",
        },
        {
          name:"Никита",
          sername: "Никулин",
          position: "Special Projects Manager",
        },
        {
          name:"Владимир",
          sername: "Дмитриев",
          position: "Senior production manager",
        },
        {
          name:"Артем",
          sername: "Быков",
          position: "Logistics Manager",
        },
        {
          name:"Михаил",
          sername: "Булиткин",
          position: "Production manager",
        },
        {
          name:"Екатерина",
          sername: "Онофрийчук",
          position: "Activation Technician",
        },
        {
          name:"Ксения",
          sername: "Логинова",
          position: "3D Designer",
        },
        {
          name:"Сергей",
          sername: "Смирнов",
          position: "Art director",
        },
        {
          name:"Екатерина",
          sername: "Землякова",
          position: "Art director",
        },
        {
          name:"Анастасия",
          sername: "Матюшечко",
          position: "Art Director",
        },
        {
          name:"Сергей",
          sername: "Сидоров",
          position: "Senior Designer",
        },
        {
          name:"Дарья",
          sername: "Мурашко",
          position: "Designer",
        },
        {
          name:"Вероника",
          sername: "Ульянич",
          position: "Designer",
        },
        {
          name:"Владислав",
          sername: "Мягченко",
          position: "Tech Lead",
        },
        {
          name:"Дмитрий",
          sername: "Фролов",
          position: "Editor-in-chief",
        },
        {
          name:"Александр",
          sername: "Заика",
          position: "Senior Copywriter",
        },
        {
          name:"Павел",
          sername: "Шкаровский",
          position: "Event manager",
        },
        {
          name:"Руслана",
          sername: "Овчинникова",
          position: "Lead Coordinator",
        },
        {
          name:"Анастасия",
          sername: "Слепцова",
          position: "Coordinator",
        },
        {
          name:"Татьяна",
          sername: "Маркова",
          position: "Financial analyst",
        },
        {
          name:"Елена",
          sername: "Бортнева",
          position: "Accountant",
        },
      ]
    }
  },
  methods:{

  },
  mounted() {
    this.Glide = new Glide('.crew',{
      startAt: 1,
      perView: 4,
      focusAt: 'center',
      gap: 28,
      breakpoints: {
        768: {
          gap: 10,
        },
        425: {
          startAt: 1,
          perView: 1,
          focusAt: 1,
          gap: 0,
        },
      }
    });
    this.Glide.mount();
  }
}
</script>
<style lang="scss">
.crew-wrapper{
  margin: 96px 0;
}
.glide__slides{
  overflow: visible !important;
}
.crew{
  width: 100%;
  .glide__slide{
    width: min-content;
    display: flex;
    .member_container{
      width: 100%;
      position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
      .member{
        width: 100%;
      }
      .details{
        position: absolute;
        bottom: 0;
        .member-name{
          color: #FFFFFF;
          font-size: 24px;
          line-height: 31px;
          text-align: center;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin: 0;
        }
        .member-position{
          font-size: 18px;
          line-height: 27px;
          text-align: center;
          letter-spacing: 1px;
          color: #FFFFFF;
          margin: 10px 0 42px;
        }
      }
    }
  }
  .glide__slide:nth-child(odd) {

    padding-bottom: 8.75vw;

  }
  .glide__slide:nth-child(even) {

    padding-top: 8.75vw;

  }
}

@media (max-width: 1200px) {
  .crew{
    .glide__slide{
      .member_container{
        .details{
          .member-name{
            font-size: 1.5vw;
            line-height: 1.94vw;
          }
          .member-position{
            font-size: 1.125vw;
            line-height: 1.68vw;
            margin: 6px 0 22px;
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .crew{
    .glide__slide{
      .member_container{
        .details{
          .member-name{
            font-size: 2.08vw;
            line-height: 2.6vw;
          }
          .member-position{
            font-size: 1.56vw;
            line-height: 2.34vw;
          }
        }
      }
    }
  }
}
@media (max-width: 425px) {
  .crew{
    .glide__slide{
      .member_container{
        width: 100%;
        padding: 0 14.6vw;
        .member{
          width: 100%;
        }
        .details{
          .member-name{
            font-size: 16px;
            line-height: 20px;
          }
          .member-position{
            font-size: 12px;
            line-height: 18px;
            letter-spacing: 1px;
          }
        }
      }
    }
  }
}
</style>