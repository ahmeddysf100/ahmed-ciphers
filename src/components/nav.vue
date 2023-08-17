<template>
  <div class="nn">
    <ul class="nav-links">
      <li v-for="list in routerLists" @click="embty" :key="list.namex" :class="list.class"><router-link
          class="custom-link" :to="list.to">{{ list.namex }}</router-link></li>

    </ul>
  </div>
</template>

<script>
import { store } from '@/store'

export default {
  data() {
    return {
      store,
      routerLists: [
        { class: "hvr-reveal", r_class: "custom-link", to: "/morse", namex: "Morse" },
        { class: "hvr-reveal", r_class: "custom-link", to: "/ceaser", namex: "Ceaser" },
        { class: "hvr-reveal", r_class: "custom-link", to: "/vernam", namex: "Vernam(OTP)" },
        { class: "hvr-reveal", r_class: "custom-link", to: "/tap", namex: "Tap" },
        { class: "hvr-reveal", r_class: "custom-link", to: "/ahmed", namex: "Ahmed" },


      ]
    }

  },
  methods: {
    embty() {
      store.text1 = ""
      store.text2 = ""
      store.encode = null
      store.decode = null
    }
  }
}
</script>


<style scoped>
* {
  font-family: 'Bungee Inline', cursive;
}


/* Style for the active router-link */
.custom-link.router-link-exact-active {
  font-size: 30px;
  font-weight: bold;
  /* color: #000; */
}

.nn {
  position: absolute;
  transform: translate(-50%, -70%);
  top: 20%;
  left: 50%;
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  align-items: center;
  background: #ffffff37;
  padding: 10px 0px;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  width: 50vw;
}

.nav-links li {
  list-style: none;
  margin-left: auto;
  margin-right: auto;

}

.nav-links li a {
  position: relative;
  color: rgb(0, 0, 0);
  font-size: 25px;
  padding: 0 20px;
  text-decoration: none;
}

.nav-links li a:hover {
  font-weight: bolder;
}




/* Reveal */
.hvr-reveal {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
}

.hvr-reveal:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-color: #1f0438a8;
  border-radius: 5px;
  border-style: solid;
  border-width: 0;
  -webkit-transition-property: border-width;
  transition-property: border-width;
  -webkit-transition-duration: 0.1s;
  transition-duration: 0.1s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}

.hvr-reveal:hover:before,
.hvr-reveal:focus:before,
.hvr-reveal:active:before {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  border-width: 4px;
}



@media screen and (max-width: 600px) {

  .nav-links li a {
    font-size: 20px;
    padding: 0 10px;
  }

  .custom-link.router-link-exact-active {
    font-size: 25px;
    font-weight: bold;
    /* color: #000; */
  }

  @media screen and (max-width: 400px) {

    .nav-links li a:before {
      bottom: 1px;
      height: 3px;
    }
  }

  .nav-links {
    width: 80vw;
  }

  .nn {
    top: 15% !important;
  }
}

@media screen and (max-width: 885px) {
  .nn {
    top: 18%;
  }
}</style>