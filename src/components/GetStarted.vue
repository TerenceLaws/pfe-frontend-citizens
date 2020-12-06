<template>
  <div >
    <button v-on:click="register()">
      Get started
    </button>
  </div>
</template>

<script>
import axios from "axios"
import router from "../router/index.js";

export default {
  name: "GetStarted",
  methods:{
    register: function (){
      axios.post("https://pfe-backend-dev.herokuapp.com/citizens")
         .then( r =>{
           console.log(r)
           localStorage.id= r.data._id.valueOf()
           router.push('/')
         })
        .catch(r => console.error(r))

    },
  }
}

</script>

<style scoped>

</style>