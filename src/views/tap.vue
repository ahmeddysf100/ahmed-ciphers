<template>
    <formm @convert="convert"></formm>
</template>

<script>
import formm from '@/components/form.vue';
import { store } from '@/store'
import { tap } from '@/ciphers/tap';
export default {
    components: {
        formm
    },
    data() {
        return {
            store,
        }
    }, mounted() {
        store.title = "Tap Cipher"
        store.key = "not empty"
    },
    methods: {
        convert() {
            if (store.encode) {
                store.text2 = tap.tap_enc(store.text1)
            }
            else if (store.decode) {
                store.text2 = tap.tap_dec(store.text1)
            }
        }
    }

}
</script>

<style scoped></style>@/ciphers/tap.mjs