<template>
  <div id="app">
    <keep-alive>
        <transition name="slide-fade">       
            <router-view ></router-view>       
        </transition> 
      </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-bottom: 140px;
}
</style>
