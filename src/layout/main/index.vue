<template>
  <v-app id="inspire">

    <navigation :drawer="drawer"
                @changeDrawerValue="changeDrawerValue" />
    <top-bar :drawer="drawer"
        @changeDrawerValue="changeDrawerValue" />

    <v-main>
      <div class="container">
        <router-view :key="$route.path"></router-view>
      </div>
    </v-main>
  </v-app>
</template>
<style>
body {
  overflow-x: hidden;
}
</style>
<script>
import TopBar from './ToolBar'
import Navigation from './NavigationBar'
export default {
  name: 'MainLayout',
  components: {
    TopBar,
    Navigation
  },
  props: {
    source: String,
  },
  data: () => ({
    drawer: false,
  }),
  methods: {
    changeDrawerValue (val) {
      this.drawer = val
    }
  }
}
</script>
