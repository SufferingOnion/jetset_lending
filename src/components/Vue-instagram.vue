<template>
  <div class="insta_container">
    <Block-header>НАШ INSTAGRAM</Block-header>
    <div class="insta_wrapper">
        <div v-for="(item, index) in 8" class="item" :key="index">
          <a href="https://www.instagram.com/jetsetholding/" class="img_wrapper" :style="{background: 'url(./inst/insta' + item + '.jpg) no-repeat', backgroundSize: 'cover'}">
<!--            <img loading="lazy" :src="require(`./inst/insta${item}.jpg`)" class="img" alt="">-->
            <div class="img_descr">
                <div class="stats">
                  <img class="like_img" loading="lazy" src="../assets/icons/like.svg" alt="">
                  <span class="blue_text count">136</span>
                  <img class="comment_img" loading="lazy" src="../assets/icons/comments.svg" alt="">
                  <span class="blue_text count">28</span>
                </div>
                <p class="blue_text">Сегодня в Петербурге прошла церемония награждения победителей ресторанной премии «Что, где есть в Петербурге» журнала @sobaka_ru. Город в очередной...</p>
            </div>
          </a>
        </div>
    </div>
  </div>
</template>

<script>

import BlockHeader from "@/components/block-header";

export default {
  components: {
    "Block-header": BlockHeader,
  }
}
</script>

<style lang="scss">
.insta_container{
  padding: 0 12.6%;
  margin: 96px 0;
}
.insta_wrapper{
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 0;
  .img_wrapper{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
    padding-bottom: 100%;
    height: 0;
    .img_descr{
      display: flex;
      justify-content: space-between;
      flex-flow: column nowrap;
      position: absolute;
      opacity: 0;
      bottom: 0;
      left: 0;
      z-index: 10;
      height: 100%;
      width: 100%;
      padding: 30px;
      background: rgba(30, 48, 244, 0.8);
      transition: opacity  0.3s 100ms ease;
      .stats{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 17px;
        .like_img{
          margin-right: 10px;
        }
        .comment_img{
          margin-left: 24px;
          margin-right: 10px;
        }
        .count{
          font-size: 18px;
          line-height: 150%;
          letter-spacing: 1.06039px;
          color: #FFFFFF;
        }
      }
      p{
        width: 100%;
        color: #FFFFFF;
        font-size: 18px;
        line-height: 130%;
        margin: 0;
        letter-spacing: 0;
      }
    }

    .img{
      width: 120%;
      //height: 100%;
    }
  }
  .img_wrapper:hover{
    .img_descr{
      opacity: 1;
    }
  }
}
@media (min-width: 1600px) {
  .insta_wrapper{
    .img_wrapper{
      .img_descr{
        padding: 20px;
        .stats{
          margin-top: 11px;
          .like_img{

            width: 2.5vw;
          }
          .comment_img{
            width: 2.5vw;


          }
          .count{
            font-size: 1.15vw;
            line-height: 27px;
            letter-spacing: 0;
          }
        }
        p{
          font-size: 1.15vw;
        }
      }
    }
  }
}

@media (max-width: 1440px) {
  .insta_wrapper{
    .img_wrapper{
      .img_descr{
        padding: 15px;
        .stats{
          margin-bottom: 11px;
          .like_img{

            width: 2.5vw;
          }
          .comment_img{
            width: 2.5vw;


          }
          .count{
            font-size: 18px;
            line-height: 27px;
            letter-spacing: 0;
          }
        }
        p{
          font-size: 1.2vw;
        }
      }
    }
  }
}
@media (max-width: 1024px) {
  .insta_wrapper{
    .img_wrapper{
      .img_descr{
        padding: 15px;
        .stats{
          margin-bottom: 11px;
          .like_img{

            width: 2.5vw;
          }
          .comment_img{
            width: 2.5vw;


          }
          .count{
            font-size: 12px;
            line-height: 18px;
            letter-spacing: 0;
          }
        }
        p{
          font-size: 1.1vw;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .insta_container{
    padding: 0 8%;
    min-width: 320px;
  }
  .insta_wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
  .insta_wrapper{
    .img_wrapper{
      .img_descr{
        padding: 15px;
        .stats{
          margin-bottom: 11px;
          .like_img{

            width: 5.6vw;
          }
          .comment_img{
            width: 5.6vw;


          }
          .count{
            font-size: 2.5vw;
            line-height: 150%;
            letter-spacing: 0;
          }
        }
        p{
          width: 100%;
          font-size: 2.5vw;
          line-height: 150%;
          margin: 0;
        }
      }
    }
  }
}
@media (max-width: 425px) {
  .insta_wrapper{
    .img_wrapper{
      .img_descr{
        padding: 15px;
        p{
          font-size: 9.5px;
        }
      }
    }
  }
}
@media (max-width: 375px) {
  .insta_wrapper{
    .img_wrapper{
      .img_descr{
        padding: 10px;
        p{
          font-size: 9px;
        }
      }
    }
  }
}
@media (max-width: 350px) {
  .insta_container{
    padding: 0 15px;
    min-width: 290px;
  }
  .insta_wrapper{
    .img_wrapper{
      .img_descr{
        padding: 10px;
        .stats{
          margin-bottom: 11px;
          .like_img{

            width: 5.6vw;
          }
          .comment_img{
            width: 5.6vw;


          }
          .count{
            font-size: 9px;
            line-height: 14px;
            letter-spacing: 0;
          }
        }
        p{
          width: 100%;
          font-size: 8px;
          line-height: 12px;
          margin: 0;
        }
      }
    }
  }
}
</style>