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
        <h2>Links</h2>
        <p>Github logo btn</p>
        <p>LinkedIn logo btn</p>
        <p>Instagram logo btn</p>
        <p>Spotify logo btn</p>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;800&family=Proza+Libre:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap');

.modal-close-button {
  font-family: 'Proza Libre', sans-serif;
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
  font-family: 'Proza Libre', sans-serif;

  position: fixed;
  left: 0;
  top: 0;
  padding: 20%;

  z-index: 100;

  width: 100vw;
  height: 100vh;

  /* background: rgba(0, 0, 0, 0.2); */
  background: #000;

  display: flex;
  flex-direction: column;
}

h1 {
  font-family: 'Proza Libre', sans-serif;

  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-family: 'Proza Libre', sans-serif;

  font-size: 1.2rem;
}

h2 {
  font-family: 'Proza Libre', sans-serif;

  font-size: 1.2rem;
}

p {
  font-family: 'Proza Libre', sans-serif;
  
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1rem;
}

</style>
