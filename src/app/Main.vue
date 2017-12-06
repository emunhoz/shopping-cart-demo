<template>
  <div id="app">
    <PageLoader></PageLoader>
    <!-- <RootHeader></RootHeader> -->
    <main class="container">
      <SideBar></SideBar>
      <router-view></router-view>
    </main>
    <RootFooter></RootFooter>
  </div>
</template>

<script>
  import RootHeader from 'components/root/header/main.vue'
  import SideBar from 'components/root/aside/main.vue'
  import RootFooter from 'components/root/footer/main.vue'

  export default {
    name: 'App',
    components: { RootHeader, SideBar, RootFooter },
    methods: {
      toggleMenuCart () {
        console.log('foi')
      }
    }
  }
</script>
