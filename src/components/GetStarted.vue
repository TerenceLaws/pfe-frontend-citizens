<template>
  <div>
    <img alt="Vue logo" src="../assets/logoCovid.png">
    <h1>Welcome</h1>
    <div  class="text-center">
      <p>this application is exclusively</p>
      <p>anonymous, we do not seek to</p>
      <p>to recover your data</p>
    </div>
    
    <button  v-on:click="register()">
      Get started
    </button>
  </div>
</template>

<script>
import axios from "axios"
import router from "../router/index.js";
//import startScript from "@/notification";
import startScript from "../notification.js"

export default {
  name: "GetStarted",
  methods:{
    startScript,
    register: function (){
      //axios.post("https://pfe-backend-dev.herokuapp.com/citizens")
      axios.post("http://localhost:5000/citizens")
        .then( r =>{
          console.log(r)
          localStorage.id= r.data.id.valueOf()
          this.startScript()
          router.push('/')

        })
        .catch(r => console.error(r))
    }

  }
}

</script>

<style scoped>

</style>