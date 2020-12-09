<template>
  <div id="app">
    <notifications group="foo" />

    <router-view/>
  </div>
</template>


<script>

import router from "./router/index.js";
import startScript from "./notification.js"

export default {
  name: 'App',
  data () {
    return {
      
    }
  },
  methods:{
     startScript
  },


  mounted() {
    console.log("mounted")
   if (!localStorage.id) {
     //axios.get("https://pfe-backend-dev.herokuapp.com/notifiaction/publickey")
     //    .then( r =>{
     //      console.log(r)
     //      localStorage.publicKey= r.data.valueOf()  
     //    })
     //   .catch(r => console.error(r))

      router.push('getstarted')
      
    }
    this.startScript()
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
