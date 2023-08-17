<template>
  <formm @convert="convert">
    <div class="inputText-slot">
      <label for="">enter the key : </label>
      <input type="text" id="a" v-model="store.key" placeholder="text only" required />
    </div>
  </formm>
</template>

<script>
import formm from "@/components/form.vue";
import { store } from "@/store";
import { ahmed_otp } from "@/ciphers/vernam";

export default {
  components: {
    formm,
  },
  data() {
    return {
      store,
    };
  },
  mounted() {
    store.key = ""
    store.title = "Vernam Cipher";
  },
  methods: {
    convert() {
      if (store.encode) {
        var x = ahmed_otp.enc(store.text1, store.key);

        store.text2 = x;
      }
      if (store.decode) {
        var x2 = ahmed_otp.dec(store.text1, store.key);

        store.text2 = x2;
      }
    },
  },
};
</script>

<style scoped>
.inputText-slot {
  margin-top: 2rem;
}

label {
  font-family: "IBM Plex Sans Arabic", sans-serif;
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
  font-family: "El Messiri", sans-serif;
  font-weight: 700;
  width: 7rem;
  text-align: center;
}
</style>
@/ciphers/vernam.mjs