<template>
  <div >
    <div class="scan">
      <qrcode-drop-zone @decode="onDecode" @init="logErrors" >
          <qrcode-stream @decode="onDecode" @init="onInit" style="position: absolute; top:0; left:0;
            width: 100%;height: 100%;" />
      </qrcode-drop-zone>

      <qrcode-capture v-if="noStreamApiSupport" @decode="onDecode" />
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
        axios.get(result).then(r => console.log(r)).catch(r => console.error(r))
        //axios.post("https://pfe-backend-dev.herokuapp.com/doctors",data).then(r => console.log(r)).catch(r => console.error(r))
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
.validation {
  position:absolute;
  top:40%;
  left:35%
}
</style>