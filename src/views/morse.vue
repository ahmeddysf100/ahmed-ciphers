<template>
  <formm @convert="convert"></formm>
</template>

<script>
import formm from "@/components/form.vue";
import morse from "morse";
import { store } from '@/store'

export default {
  data() {
    return {
      store,
    }
  },
  components: {
    formm,
  },
  mounted() {
    store.title = "Morse Cipher"
    store.key = "not empty"
  },
  methods: {
    convert() {
      if (store.encode) {
        store.text2 = morse.encode(store.text1)
      }
      else if (store.decode) {
        store.text2 = morse.decode(store.text1)
      }
    }
  }
}
</script>

<style scoped></style>