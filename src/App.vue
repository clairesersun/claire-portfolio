<script setup>
import { RouterLink, RouterView } from 'vue-router'
import About from './components/AboutPopUp.vue';


import { ref } from 'vue'

const showAbout = ref(false)

function showModel() {
  if (showAbout.value === false) {
    showAbout.value = true;
  } else {
    showAbout.value = false;
  }
}

// sparkles flowing after cursor

let trailArr = [1, .9, .8, .5, .25, .6, .4, .3, .2];

function trailAnimation(e, i, callbackFn) {
  var elem = document.createElement('div');

  elem = styleSparkle(elem, e, i);

  if (typeof callbackFn == 'function') {
    elem = callbackFn(elem);    
  }
  
  elem.classList.add("sparkle");

  document.body.appendChild(elem);

  window.setTimeout(function () {
    document.body.removeChild(elem);
  }, Math.round(Math.random() * i * 1000));
}

function styleSparkle(elem, e, i) {
  let j = (1 - i) * 50;
  let size = Math.ceil(Math.random() * 10 * i) + 'px';
  
  elem.style.top = e.pageY - window.scrollY + Math.round(Math.random() * j - j / 2) + 'px';
  elem.style.left = e.pageX + Math.round(Math.random() * j - j / 2) + 'px';
  
  elem.style.width = size;
  elem.style.height = size;
  elem.style.borderRadius = size;
  // elem.style.background = 'hsla(' +
  //   Math.round(Math.random() * 160) + ', ' +
  //   '60%, ' +
  //   '90%, ' +
  //   i + ')';
  elem.style.background = 'rgb(' +
    '0' + ', ' +
    '161, ' +
    '189, ' +
    i + ')';
  
  return elem;
}

window.addEventListener('mousemove', function (e) {
  trailArr.forEach((i) => {trailAnimation(e, i)});

  trailArr.forEach((i) => {trailAnimation(e, i, (elem) => {
    elem.style.animation = "fallingsparkles 1s";
    
    return elem;
  })});
}, false);

</script>

<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <div class="main-body">
  <header>
    <div class="wrapper">

      <nav>
        <h1 v-if="showAbout" class="home-btn--about">
          Claire Sersun
        </h1>
        <RouterLink to="/" v-else><h1 class="home-btn">
          Claire Sersun
        </h1></RouterLink>
        <button
        class="btn"
        @click="showModel">About</button>
        <Transition name="modal-fade">
          
          <About v-show="showAbout" @close="showModel"/>
        </Transition>
        
      </nav>
    </div>
  </header>
  <RouterView />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;800&family=Proza+Libre:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap');

/* sparkles! */
.sparkle {
  position: fixed;
  z-index: 300;
  opacity: 0.5;
  pointer-events: none;
}

@keyframes fallingsparkles {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(50px);
  }
}

/* Make the element transition with duration 0.25s and easing ease into opacity 0 when it mounts and unmounts */
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: 0.25s ease all;
}

header {
  font-family: 'Proza Libre', sans-serif;
  line-height: 1.5;
  max-height: 100vh;
  top: 0;
  align-self: start;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
position: fixed;
  width: 100%;
  padding: 1rem 0;
  background-color: transparent;
}


nav {
  align-self: start;
  display: flex;
  place-items: center;
  justify-content: space-between;
  width: 100vw;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  padding-right: 3rem;
  padding-left: 3rem;
}


nav h1 {
  margin: 0;
  z-index: 200;
  font-weight: 500;
  padding: 0;
  font-size: 1.75rem;
}

.home-btn {
  color: var(--vt-c-text-dark-1);
  position: fixed;
  transform: translate(-50%, -50%);
  left: 50vw;
}

@media screen and (min-width: 576px) {
  .home-btn {
  position: relative;
  transform: none;
  left: 0;
}
}

.home-btn--about {
  color: var(--color-text);
}

nav button.router-link-exact-active {
  color: var(--color-text);
}

nav button.router-link-exact-active:hover {
  background-color: transparent;
}


.btn {
  display: inline-block;
  padding: 1rem;
  border: 3px solid var(--vt-c-divider-dark-2);
  background-color: transparent;
  color: var(--vt-c-text-dark-2);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  top: 85vh;
  position: fixed;
  transform: translate(-50%, -50%);
  left: 50vw;
}

.btn:hover {
  box-shadow: inset 0 0 0 2em var(--vt-c-divider-dark-1);
  border: 3px solid var(--vt-c-divider-dark-1);
  transition: 1s;
}

@media screen and (min-width: 576px) {
  .btn {
    position: relative;
    top: auto;
    transform: none;
    left: 0;
  }
}


</style>