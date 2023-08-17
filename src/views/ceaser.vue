<template>
  <formm @convert="convert">
    <div class="inputText-slot">
      <label for="">enter the key : </label>
      <input type="number" id="a" v-model='store.key' placeholder="number only" required>
    </div>

  </formm>
</template>

<script>
import formm from "@/components/form.vue";
import { store } from "@/store";
import { Cipher } from "caeser-cipher-js";

export default {
  components: {
    formm,
  },
  data() {
    return {
      store,
      numberIndex: ""
    }
  }, mounted() {
    store.key = ""
    store.title = "Caeser Cipher"
  },
  methods: {
    convert() {
      if (store.encode) {

        var x = Cipher.encrypt(store.text1, store.key)
        store.text2 = x.msg
        this.numberIndex = x.numIndexes
      }
      else if (store.decode) {
        x = Cipher.decrypt(store.text1, -store.key, this.numberIndex)
        store.text2 = x.msg
      }
    }
  }
}
</script>

<style scoped>
.inputText-slot {
  margin-top: 2rem;
}

label {
  font-family: 'IBM Plex Sans Arabic', sans-serif;
  color: #392626 !important;
  font-weight: bolder;
  font-size: 1.1rem;
  text-transform: uppercase;
}

#a::placeholder {
  font-size: small;
  color: #3f2e2eac;
  text-align: center;
}

#a {
  border-radius: 0.5rem;
  background-color: rgba(236, 234, 223, 0.498);
  border: solid 3px rgba(76, 42, 108, 0.462);
  font-family: 'El Messiri', sans-serif;
  font-weight: 700;
  width: 7rem;
  text-align: center;
}
</style>