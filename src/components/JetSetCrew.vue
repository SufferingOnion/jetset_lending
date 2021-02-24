<template>
  <div class="reviews-wrapper">
    <Block-header>ОТЗЫВЫ</Block-header>
    <div class="crew">
      <div class="glide__track" data-glide-el="track">
        <div class="glide__slides">
          <div v-for="(member, index) in crew" :key="index" class="glide__slide">
            <div class="member_container">
              <img class="member"
                   :src="require(`../assets/img/crew/${member.name + ' ' + member.sername}.jpg`)"
                   :style="{width: 'calc(23.8125vw - 20px)'}"
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
          name:"Владимир",
          sername: "Дмитриев",
          position: "Senior production manager",
        },
        {
          name:"Антон",
          sername: "ШипицыН",
          position: "Event director",
        },
        {
          name:"Алексей",
          sername: "Сахадж",
          position: "Project producer",
        },
        {
          name:"Михаил",
          sername: "Суворов",
          position: "Art director",
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
          name:"Дмитрий",
          sername: "Фролов",
          position: "Editor-in-chief",
        },
        {
          name:"Александр",
          sername: "Заика",
          position: "Senior Copywriter",
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
      gap: 28
    });
    this.Glide.mount();
  }
}
</script>
<style lang="scss">
.glide__slides{
  overflow: visible !important;
}
.crew{
  width: 100%;
  .glide__slide{
    width: min-content;
    display: flex;
    .member_container{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

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
          margin-top: 10px;
        }
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
</style>