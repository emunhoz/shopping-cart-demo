<template>
  <div class="load-container" v-if="show">
    <div class="loading"></div>
  </div>
</template>

<script>
export default {
  computed: {
    show () {
      return this.$store.state.CODECASTS_LOADER.show
    }
  }
}
</script>

<style>
 html, body {
   height: 100%;
 }
  .load-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(51, 51, 51, 0.57);
    position: absolute;
    z-index: 99999;
    width: 100%;
    height: 100%;
  }

  .loading {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: solid 4px rgba(255, 255, 255, 0.2);
    border-top-color: #FFF;
    -webkit-animation: spin 1s infinite linear;
    animation: spin 1s infinite linear;
  }

  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @-moz-keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
</style>
