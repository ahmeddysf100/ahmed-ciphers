<template>
  <form @submit.prevent="">
    <div class="container">
      <div class="title bounce-in-top">{{ store.title }}</div>
      <hr />
      <div class="input">
        <div class="inputText">
          <label for="a">enter text to convert : </label>
          <input type="text" v-model="textin" id="a" placeholder="only english" required /><br />

          <slot></slot>
        </div>
      </div>

      <div class="radio-button-container">
        <div class="radio-button">
          <input type="radio" v-model="radio" value="en" class="radio-button__input" id="radio1" name="radio-group"
            required />
          <label class="radio-button__label" for="radio1">
            <span class="radio-button__custom"></span>
            to morse
          </label>
        </div>
        <div class="radio-button">
          <input type="radio" v-model="radio" value="de" class="radio-button__input" id="radio2" name="radio-group"
            required />
          <label class="radio-button__label" for="radio2">
            <span class="radio-button__custom"></span>
            from morse
          </label>
        </div>
      </div>
      <hr />
      <div class="inputText2">
        <label for="a">enter text to convert : </label><br />
        <div class="out">
          <label for="">copy output </label>
          <button class="copy" @click="copy">
            <span data-text-end="Copied!" data-text-initial="Copy to clipboard" class="tooltip"></span>
            <span>
              <svg xml:space="preserve" style="enable-background: new 0 0 512 512" viewBox="0 0 6.35 6.35" y="0" x="0"
                height="20" width="20" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                xmlns="http://www.w3.org/2000/svg" class="clipboard">
                <g>
                  <path fill="currentColor"
                    d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z">
                  </path>
                </g>
              </svg>
              <svg xml:space="preserve" style="enable-background: new 0 0 512 512" viewBox="0 0 24 24" y="0" x="0"
                height="18" width="18" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                xmlns="http://www.w3.org/2000/svg" class="checkmark">
                <g>
                  <path data-original="#000000" fill="currentColor"
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z">
                  </path>
                </g>
              </svg>
            </span>
          </button>
        </div>

        <textarea v-model="store.text2" id="a" placeholder="!$! the output most of the time will be uppercase !$!"
          disabled :cols="numcols" rows="5"></textarea>
      </div>

      <button v-if="store.key  && store.text1 " style=" --button_outline_color: #000000;" id="btnm" @click="$emit('convert')">
        <span  class="button_top">Convert</span>
      </button>
      <button v-else class="else_btn" id="btnm" disabled>
        <span class="button_top else_btn">Enter inputs to activate the converion button</span>
      </button>
        
      
    </div>
  </form>
</template>

<script>
import { store } from "@/store";
import { Clipboard } from "v-clipboard";
export default {
  data() {
    return {
      store,
      numcols: "",
      textin: "",
      radio: "",
      empety: "",
    };
  },
  mounted() {
    // alert(window.innerWidth)
    if (window.innerWidth <= 600) {
      this.numcols = window.innerWidth / 20;
    } else {
      this.numcols = window.innerWidth / 40;
    }
  },
  updated() {
    store.text1 = this.textin;
    if (this.radio === "en") {
      store.encode = true;
      store.decode = false;
    } else if (this.radio === "de") {
      store.decode = true;
      store.encode = false;
    }
  },
  methods: {
    convertt() {
      this.$emit("convert");
    },
    copy() {
      Clipboard.copy(store.text2);
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Secular One", sans-serif;
  text-align: center;
}

.container {
  position: absolute;
  width: 50vw;
  background: #e4e4e481;
  padding: 40px 30px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  perspective: 2700px;
  border: solid 1px rgba(76, 42, 108, 0.734);
  border-radius: 1rem;
  transform: translate(-50%, -20%);
  top: 50%;
  left: 50%;
  display: grid;
  place-items: center;
}

hr {
  padding: 0px;
  border: none;
  border-top: solid 5px #4c2a6c76;
  border-radius: 5px;
  margin: 2rem 0;
  width: 95%;
}

.title {
  font-size: 2.5rem;
  font-weight: 900;
  color: #3f2e2e;
  padding: 5px;

  background: linear-gradient(to right top,
      #000000 20%,
      #373737 30%,
      #635400 70%,
      #887400 80%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 500% auto;
  animation: textShine 5s ease-in-out infinite alternate,
    scale-down-center 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
}

@keyframes textShine {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: 100% 50%;
  }
}

@keyframes scale-down-center {
  0% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
}

.inputText2 {
  display: grid;
  place-items: center;
}

textarea {
  line-height: 1.625;
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
}

#a {
  border-radius: 0.5rem;
  background-color: rgba(236, 234, 223, 0.498);
  border: solid 3px rgba(76, 42, 108, 0.462);
  font-family: "El Messiri", sans-serif;
}

.inputText #a {
  padding: 5px 10px;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.inputText2 #a {
  font-weight: 700;
  letter-spacing: 0.025em;
  font-size: 1.5rem;
}

/* radio css */

.radio-button-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
  margin-top: 2rem;
  padding-top: 0.6rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  border: solid 3px rgba(76, 42, 108, 0.462);
  border-radius: 0.5rem;
}

.radio-button {
  display: inline-block;
  position: relative;
  cursor: pointer;
}

.radio-button__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.radio-button__label {
  display: inline-block;
  padding-left: 30px;
  margin-bottom: 10px;
  position: relative;
  font-size: 15px;
  color: #f2f2f2;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.radio-button__custom {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #555;
  transition: all 0.3s ease;
}

.radio-button__input:checked+.radio-button__label .radio-button__custom {
  background-color: #4c8bf5;
  border-color: transparent;
  transform: scale(0.8);
  box-shadow: 0 0 20px #4c8bf580;
}

.radio-button__input:checked+.radio-button__label {
  color: #4c8bf5 !important;
}

.radio-button__label:hover .radio-button__custom {
  transform: scale(1.2);
  border-color: #4c8bf5;
  box-shadow: 0 0 20px #4c8bf580;
}

/* btn css */

#btnm {
  /* Variables */
  --button_radius: 0.75em;
  --button_color: #e8e8e8;
  --button_outline_color: #0000006a;
  font-size: 17px;
  font-weight: bold;
  border: none;
  border-radius: var(--button_radius);
  background: var(--button_outline_color);
  margin-top: 2rem;
}

.button_top {
  display: block;
  box-sizing: border-box;
  border: 2px solid var(--button_outline_color);
  border-radius: var(--button_radius);
  padding: 0.75em 1.5em;
  background: var(--button_color);
  color: var(--button_outline_color);
  transform: translateY(-0.2em);
  transition: transform 0.1s ease;
}

#btnm:hover .button_top {
  /* Pull the button upwards when hovered */
  transform: translateY(-0.33em);
}

#btnm:active .button_top {
  /* Push the button downwards when pressed */
  transform: translateY(0);
}

/*           clickboard */

/* tooltip settings 👇 */

.copy {
  /* button */
  bottom: 5px;
  --button-bg: #35343440;
  --button-hover-bg: #4c4c4c;
  --button-text-color: #3f2e2eCCC;
  --button-hover-text-color: #8bb9fe;
  --button-border-radius: 10px;
  --button-diameter: 36px;
  --button-outline-width: 1px;
  --button-outline-color: rgb(141, 141, 141);
  /* tooltip */
  --tooltip-bg: #f4f3f3;
  --toolptip-border-radius: 4px;
  --tooltip-font-family: Menlo, Roboto Mono, monospace;
  /* 👆 this field should not be empty */
  --tooltip-font-size: 12px;
  /* 👆 this field should not be empty */
  --tootip-text-color: rgb(50, 50, 50);
  --tooltip-padding-x: 7px;
  --tooltip-padding-y: 7px;
  --tooltip-offset: 8px;
  /* --tooltip-transition-duration: 0.3s; */
  /* 👆 if you need a transition, 
  just remove the comment,
  but I didn't like the transition :| */
}

.copy {
  box-sizing: border-box;
  width: var(--button-diameter);
  height: var(--button-diameter);
  border-radius: var(--button-border-radius);
  background-color: var(--button-bg);
  color: var(--button-text-color);
  border: none;
  cursor: pointer;
  position: relative;
  outline: none;
}

.tooltip {
  position: absolute;
  opacity: 0;
  visibility: 0;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font: var(--tooltip-font-size) var(--tooltip-font-family);
  color: var(--tootip-text-color);
  background: var(--tooltip-bg);
  padding: var(--tooltip-padding-y) var(--tooltip-padding-x);
  border-radius: var(--toolptip-border-radius);
  pointer-events: none;
  transition: all var(--tooltip-transition-duration) cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.tooltip::before {
  content: attr(data-text-initial);
}

.tooltip::after {
  content: "";
  position: absolute;
  bottom: calc(var(--tooltip-padding-y) / 2 * -1);
  width: var(--tooltip-padding-y);
  height: var(--tooltip-padding-y);
  background: inherit;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  z-index: -999;
  pointer-events: none;
}

.copy svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.checkmark {
  display: none;
}

/* actions */

.copy:hover .tooltip,
.copy:focus:not(:focus-visible) .tooltip {
  opacity: 1;
  visibility: visible;
  top: calc((100% + var(--tooltip-offset)) * -1);
}

.copy:focus:not(:focus-visible) .tooltip::before {
  content: attr(data-text-end);
}

.copy:focus:not(:focus-visible) .clipboard {
  display: none;
}

.copy:focus:not(:focus-visible) .checkmark {
  display: block;
}

.copy:hover,
.copy:focus {
  background-color: var(--button-hover-bg);
}

.copy:active {
  outline: var(--button-outline-width) solid var(--button-outline-color);
}

.copy:hover svg {
  color: var(--button-hover-text-color);
}

.else_btn {
  color: red;
  /* font-size: 1.5rem; */
  animation-name: shake-slow;
  animation-duration: 40s;
  animation-timing-function:ease-in-out;
  animation-iteration-count: infinite;
}
@keyframes shake-slow {2% {transform: translate(-2px, 9px) rotate(-1.5deg);}4% {transform: translate(-7px, 10px) rotate(2.5deg);}6% {transform: translate(-5px, -9px) rotate(0.5deg);}8% {transform: translate(-4px, 6px) rotate(-1.5deg);}10% {transform: translate(8px, 9px) rotate(1.5deg);}12% {transform: translate(10px, 5px) rotate(-1.5deg);}14% {transform: translate(-1px, 5px) rotate(-0.5deg);}16% {transform: translate(2px, -2px) rotate(-0.5deg);}18% {transform: translate(1px, 10px) rotate(0.5deg);}20% {transform: translate(9px, 5px) rotate(-1.5deg);}22% {transform: translate(8px, -6px) rotate(2.5deg);}24% {transform: translate(-5px, -5px) rotate(3.5deg);}26% {transform: translate(-3px, -8px) rotate(2.5deg);}28% {transform: translate(5px, 0px) rotate(-0.5deg);}30% {transform: translate(5px, -8px) rotate(3.5deg);}32% {transform: translate(3px, -4px) rotate(0.5deg);}34% {transform: translate(5px, 0px) rotate(1.5deg);}36% {transform: translate(8px, -3px) rotate(2.5deg);}38% {transform: translate(5px, 5px) rotate(2.5deg);}40% {transform: translate(9px, 2px) rotate(-0.5deg);}42% {transform: translate(6px, -7px) rotate(2.5deg);}44% {transform: translate(10px, -8px) rotate(3.5deg);}46% {transform: translate(6px, -1px) rotate(1.5deg);}48% {transform: translate(2px, 7px) rotate(-1.5deg);}50% {transform: translate(5px, 6px) rotate(1.5deg);}52% {transform: translate(8px, 10px) rotate(-1.5deg);}54% {transform: translate(-8px, 6px) rotate(-0.5deg);}56% {transform: translate(3px, 7px) rotate(-0.5deg);}58% {transform: translate(9px, 4px) rotate(2.5deg);}60% {transform: translate(3px, -7px) rotate(-0.5deg);}62% {transform: translate(-5px, 1px) rotate(3.5deg);}64% {transform: translate(9px, 0px) rotate(2.5deg);}66% {transform: translate(-1px, -4px) rotate(1.5deg);}68% {transform: translate(7px, -1px) rotate(-2.5deg);}70% {transform: translate(-5px, 5px) rotate(1.5deg);}72% {transform: translate(8px, 5px) rotate(2.5deg);}74% {transform: translate(-9px, 8px) rotate(-0.5deg);}76% {transform: translate(-8px, -6px) rotate(-0.5deg);}78% {transform: translate(-8px, 9px) rotate(-0.5deg);}80% {transform: translate(-8px, -2px) rotate(2.5deg);}82% {transform: translate(-8px, -1px) rotate(-1.5deg);}84% {transform: translate(-2px, 4px) rotate(0.5deg);}86% {transform: translate(-5px, 4px) rotate(-0.5deg);}88% {transform: translate(1px, 5px) rotate(-2.5deg);}90% {transform: translate(7px, 6px) rotate(3.5deg);}92% {transform: translate(-4px, 7px) rotate(-2.5deg);}94% {transform: translate(-6px, 10px) rotate(1.5deg);}96% {transform: translate(-1px, 1px) rotate(-1.5deg);}98% {transform: translate(-5px, 0px) rotate(1.5deg);}0%, 100% {transform: translate(0, 0) rotate(0);}}



@media screen and (max-width: 1013px) {
  .radio-button-container {
    display: grid;
    column-gap: 100px;
    padding-top: 15px;
    padding-right: 40px;
    padding-left: 40px;
  }

  .container {
    width: 50vw;
  }

  .inputText2 #a {
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 513px) {
  .container {
    width: 80vw;
  }
}
</style>
