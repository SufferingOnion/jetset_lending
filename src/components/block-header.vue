<template>
  <span class="block-header header_text">
    <slot></slot>
  </span>
</template>

<script>

</script>

<style lang="scss">
.block-header{
  width: 100%;
  margin: 45px 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  line-height: 1.2em;
  color: #1E30F4;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
@media (max-width: 1024px) {
  .block-header{
    font-size: 37px;
    line-height: 1.2em;
  }
}
@media (max-width: 768px) {
  .block-header{
    font-size: 30px;
    line-height: 1.2em;
    letter-spacing: 0.2em;
  }
}
@media (max-width: 425px) {
  .block-header{
    font-size: 25px;
    line-height: 1.2em;
  }
}
@media (max-width: 375px) {
  .block-header{
    font-size: 23px;
    line-height: 1.2em;
  }
}
@media (max-width: 320px) {
  .block-header{
    font-size: 21px;
    line-height: 1.2em;
  }
}
</style>