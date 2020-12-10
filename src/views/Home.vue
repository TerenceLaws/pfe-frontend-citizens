<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logoCovid.png">
    <p>Welcome to blockCovid</p>
    <div  class="text-center">
      <p>
      scan the QR codes and create <br>
      a safer world<br>

      </p>
    </div>
    <router-link to="/scan" class="btn btn-info">Scan</router-link>
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
