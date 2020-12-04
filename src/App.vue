<template>

  <div id="app">
    <notifications group="foo" />
    <div v-if="!seeScan">
      <img alt="Vue logo" src="./assets/logo.png">
      <p>Welcome to blockCovid</p>
      <button  class="btn btn-info" v-on:click="setSeeScan()">Scan</button>
      <button  class="btn btn-info" v-on:click="sendNotification()">notify</button>
    </div>
    
    <Scan v-if="seeScan" msg="Welcome to Your scan"/> 

  </div>
</template>

<script>
import Scan from './components/Scan.vue'

export default {
  name: 'App',

  data () {
    return {
      seeScan: false
    }
  },
  methods:{
    sendNotification: function (){
      console.log("ok")
      this.$notify({
        group: 'foo',
        title: 'Important message',
        text: 'Hello user! This is a notification!'
      });
    },
    setSeeScan: function () {
      this.seeScan = true
    }

  },
  components: {
    Scan
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
