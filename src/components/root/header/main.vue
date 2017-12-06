<template>
  <header class="main-header">
    <a href="#0" class="logo"><img src="~assets/images/logo.svg" alt="Logo"></a>
    <nav class="main-menu">
      <a href="javascript:void(0);" title="menu" @click="toggleMenuCart">Menu</a>
    </nav>
    <sideBar></sideBar>
    <!-- <div id="cd-hamburger-menu"><a class="cd-img-replace" href="#0">Menu</a></div> -->
    <nav>
      <!-- <a href="javascript:void(0);" title="menu" @click="toggleMenuCart"><i class="fa fa-3" aria-hidden="true" :class="[ toggleMenu ? 'fa-times' : 'fa-shopping-cart', { 'notify' : notify } ] "></i></a> -->
      <!-- <span v-if="items.length && !toggleMenu">{{ quantityProducts }}</span> -->
    </nav>
  </header>
</template>
<script>
  import sideBar from './../aside/main.vue'
  export default {
    components: { sideBar },
    data () {
      return {
        isOpen: false
      }
    },
    methods: {
      toggleMenuCart () {
        this.$emit('sideBarAction')
        // this.isOpen = !this.isOpen
        console.log(this.isOpen)
      }
    }
  }
</script>
<style lang="css">
  .main-menu {
    outline: 1px solid red;
  }
</style>
