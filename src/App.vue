<template>
  <Precepts msg="뷰 시작함- npm run build  는 안함. ."/>
</template>

<script>
import Precepts from './components/mind/Precepts.vue'


export default {
  name: 'App',
  components: {
    Precepts
  }
}





</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
