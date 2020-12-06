<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>Welcome to blockCovid</p>
    <router-link to="/scan" class="btn btn-info">Scan</router-link>
    <button class="btn btn-info" v-on:click="sendNotification()">notify</button>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  methods:{
    sendNotification: function (){
      console.log("notification")
      this.$notify({
        group: 'foo',
        title: 'Important message',
        text: 'Hello user! This is a notification!'
      })
    }
  }
}
</script>
