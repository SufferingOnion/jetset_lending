<template>
  <div class="insta_container">
    <Block-header>НАШ INSTAGRAM</Block-header>
    <div class="insta_wrapper">
        <div v-for="(item, index) in 8" class="item" :key="index">
          <a href="https://www.instagram.com/jetsetholding/" class="img_wrapper">
            <img loading="lazy" :src="require(`../assets/img/insta${item}.jpg`)" class="img" alt="">
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
    .img_descr{
      display: flex;
      justify-content: flex-end;
      flex-flow: column nowrap;
      position: absolute;
      opacity: 0;
      z-index: 10;
      height: 100%;
      width: 100%;
      padding: 20px;
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

</style>