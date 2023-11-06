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

</script>

<template>
  <div class="main-body">
  <header>
    <div class="wrapper">

      <nav>
        <RouterLink to="/"><h1>
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

<style scoped>
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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}


nav {
  align-self: start;
  display: flex;
  place-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  padding-right: 3rem;
  padding-left: 3rem;
}

h1 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  padding: 0;
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
  border: 1px solid var(--color-border);
  background-color: transparent;
  color: var(--color-text);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
}

.btn:hover {
  background-color: var(--color-border);
}


</style>
