<template>
  <div>

    <div class="scan">
      <qrcode-drop-zone @decode="onDecode" @init="logErrors" >
        <qrcode-stream @decode="onDecode" @init="onInit" style="position: absolute; top:0; left:0;
            width: 100%;height: 100%;" />
      </qrcode-drop-zone>

      <qrcode-capture v-if="noStreamApiSupport" @decode="onDecode" />
    </div>
    <div class="back">
      <router-link style="position:absolute" to="/"> <i class="fa fa-arrow-left fa-2x" aria-hidden="true"></i></router-link>
    </div>

    <div class="validation" v-if="success">
      <i class="fa fa-check-circle" style="color:green; font-size: 10em" aria-hidden="true"></i>
    </div>

  </div>
</template>

<script>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'
import axios from 'axios'

export default {

  components: { QrcodeStream, QrcodeDropZone, QrcodeCapture },

  data () {
    return {
      result: '',
      noStreamApiSupport: false,
      success: false
    }
  },

  methods: {
    onDecode (result) {
      console.log("decode")
      if(result !== ''){
        this.result = result
        console.log(result)

        const data= {
          citizen_id: localStorage.id,
          qrcode_id:result
        }
        axios.post("https://pfe-backend-dev.herokuapp.com/qrcodes/scan",data).then(r => console.log(r)).catch(r => console.error(r))
        // axios.post("http://localhost:5000/qrcodes/scan",data).then(r => console.log(r)).catch(r => console.error(r))
        console.log("ici")

        //axios.post("https://pfe-backend-dev.herokuapp.com/scannedcodes",data).then(r => console.log(r)).catch(r => console.error(r))
        this.success = true

      }
    },

    logErrors (promise) {
      promise.catch(console.error)
    },

    async onInit (promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'StreamApiNotSupportedError') {
          this.noStreamApiSupport = true
        }
      }
    }
  }
}
</script>

<style>
.back{
  position: absolute;
}
.validation {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50%;
  margin-bottom: auto;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  text-align: center;
}
</style>