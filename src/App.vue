<template>
  <homeVue></homeVue>
</template>


<script>
import homeVue from './views/home.vue';

export default{
  components:{
    homeVue
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bungee+Inline&family=Bungee+Spice&family=El+Messiri&display=swap');

html{
  padding-bottom: 5rem;
}

body{
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(-45deg, #ee7752, #e73c7c, #23a6d5, #23d5ab);
  background-size: 400% 400%; /* Larger size to create movement effect */
  animation: moveGradient 10s ease-in-out infinite; /* Animation duration: 10 seconds */
  position: relative;

/* <!-- 
#365470
#047994
#009FA3
#38C39A
#97E283
#F9F871
--> */
}
@keyframes moveGradient {
  0% {
    background-position: 0% 50%; /* Start position (left) */
  }
  50% {
    background-position: 100% 50%; /* End position (right) */
  }
  100% {
    background-position: 0 50%; /* End position (left) */
  }
}
</style>
