<template>
  <v-app-bar
      app
      color="indigo"
      dark
  >
    <v-app-bar-nav-icon @click="changeDrawerValue"></v-app-bar-nav-icon>
    <v-toolbar-title>Application</v-toolbar-title>
  </v-app-bar>
</template>
<script>
export default {
  name: 'TopToolBar',
  props: ['drawer'],
  data () {
    return {

    }
  },
  methods: {
    changeDrawerValue () {
      this.$emit('changeDrawerValue', !this.drawer)
    }
  }
}
</script>
