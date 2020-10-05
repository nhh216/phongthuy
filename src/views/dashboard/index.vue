<template>
  <div>
    <compass />
  </div>
</template>
<style>
.test {
  width: 200px;
  height: 300px;
  margin-left: 100px;
  margin-top: 100px;
  background-color: pink;
}
</style>
<script>
import Compass from './Picture360degree'
export default {
  name: 'Dashboard',
  components: {
    Compass
  },
  data: () => {
    return {
    }
  }
}
</script>
