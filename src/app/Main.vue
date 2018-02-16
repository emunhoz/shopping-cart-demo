<template>
  <div id="app">
    <PageLoader></PageLoader>
    <main class="container">
      <SideBar></SideBar>
      <router-view></router-view>
    </main>
    <RootFooter></RootFooter>
  </div>
</template>

<script>
  import SideBar from 'components/root/aside/main.vue'
  import RootFooter from 'components/root/footer/main.vue'

  export default {
    name: 'App',
    components: { SideBar, RootFooter }
  }
</script>
