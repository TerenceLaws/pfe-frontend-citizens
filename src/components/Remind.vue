<template >
<div class="container-fluid">
<br>
  <div class="alert alert-primary" role="alert">
    don't forget to re-scan when you leave
  </div>

  <img alt="Vue logo" src="../assets/logoCovid.png">

</div>
</template>

<script>

import router from "@/router/index.js";


export default {
name: "Remind",

  mounted() {
   setTimeout(() => router.push('/'),3000)

  }

}
</script>

<style scoped>
.page{
  width:100%;
  height:100%;
}

</style>