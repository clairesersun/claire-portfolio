<template>
    <div class="modal-wrapper">
      <button 
          class="modal-close-button" @click="$emit('close')">
                X
              </button>
        <h1>This is an about pop up</h1>
        <h2>Hi! I am a multidisiplinary designer, artist, and coach.</h2>
        <p>I am currently working as a UI/UX Designer @ <a href="https://veoci.com/">Veoci</a> and a pilates instructor @ <a href="https://www.clubpilates.com/location/danbury">Club Pilates Danbury</a>.</p>
        <p>this is a placeholder for a switch to show the long, medium, or short version of my bio</p>
        <p>This is my bio</p>
        <h2>Contact</h2>
        <p>If you are interested in my work feel free to contact me at >>> put a component to compy email to clipboard >>> claire.sersun[at]gmail.com.</p>
        <h2>Press</h2>
        <p>List of press possibly with a + to reveal more info about it??? or just link to it??? or nothing???</p>
    </div>
</template>

<style scoped>
.modal-close-button {
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  padding: 0.5rem;
  border: none;
  background: none;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  z-index: 100;
}
.modal-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  padding: 20%;

  z-index: 50;

  width: 100vw;
  height: 100vh;

  /* background: rgba(0, 0, 0, 0.2); */
  background: #000;

  display: flex;
  flex-direction: column;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

</style>
