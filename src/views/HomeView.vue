<script setup>
import ProjectCover from '../components/ProjectCover.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { animate, scroll } from "motion";

const projectsWeb = ref([
  { id: 1, title: 'VALLETO', image: 'src/assets/valleto/cover.jpeg', link: '/projects/valleto', role: 'Web Designer' },
  { id: 2, title: 'Moving For Life', image: 'src/assets/movingforlife/cover.png', link: '/projects/movingforlife', role: 'Web Designer' },
  { id: 3, title: 'timeslot', image: 'src/assets/logo.svg', link: '/projects/timeslot', role: 'Web Designer' }
])

const projectsFilm = ref([
  { id: 4, title: 'PRESEVERE', image: 'src/assets/presevere/cover.jpeg', link: '/projects/presevere', role: 'Videographer/Editor'},
  { id: 5, title: 'Rise Up', image: 'src/assets/riseup/cover.jpeg', link: '/projects/riseup', role: 'Videographer/Editor'},
  { id: 6, title: 'Reflect: Re-move', image: 'src/assets/reflectremove/cover.jpeg', link: '/projects/reflectremove', role: 'Videographer/Editor'},
  { id: 7, title: 'my boy', image: 'src/assets/myboy/cover.png', link: '/projects/myboy', role: 'Videographer/Editor'}
])

const projectsDance = ref([
  { id: 8, title: 'Dance', image: 'src/assets/dance/cover.png', link: '/projects/dance', role: 'Dancer'}
])

const projectsModel = ref([
  { id: 9, title: 'Modeling', image: 'src/assets/modeling/cover.jpeg', link: '/projects/modeling', role: 'Model'}
])

const projectsChoreography = ref([
  { id: 10, title: 'Rain', image: 'src/assets/rain/cover.png', link: '/projects/rain', role: 'Choreographer'},
  { id: 11, title: 'xxii: Twenty-Two', image: 'src/assets/xxii/cover.png', link: '/projects/xxii', role: 'Choreographer'}
])



const observer = new IntersectionObserver((entries, observer) => {
  console.log(entries)
});



onMounted(() => {
  const items = document.querySelectorAll(".item");
  const target = document.querySelector(".cover");
  const contents = document.querySelector(".cover-contents");
  const progressBar = document.querySelector(".progress-bar");
  const progress = document.querySelector(".progress");
  observer.observe(target, items, contents, progressBar, progress);
  scroll(
    animate(contents, {
      transform: ["none", `translateX(-${items.length - 1}00vw)`]
    }),
    { 
      target: target },
    
  );

  
// Pass an animation or timeline to automatically scrub
scroll(
  animate(progressBar, { scaleX: [0, 1] })
);

// // Or pass a function to directly use the scroll info
// scroll(({ y }) => {
//   if (y > .3 ) {
//   scroll(
//     animate(contents, { x: [0, "100vw"] })
//   );}
//   else if (.3 < y < .6) {
//     scroll(
//       animate(contents, { x: [0, "200vw"] })
//     );}  else if (y > .6) {
//       scroll(
//         animate(contents, { x: [0, "300vw"] })
//       );} else { return}
// });
  
  
})

// Probably optional
onUnmounted(() => {
  observer.disconnect()
})





</script>

<template>
  <main>
    <div 
    class="cover"
    >
    <div class="dropdown">
      <div class="filter">Filter</div>
      <div class="dropdown-content">
        <button class="btn active" @click="filterSelection('All')">All</button>
        <button class="btn" @click="filterSelection('Web Design')">Web Design</button>
        <button class="btn" @click="filterSelection('Videographer/Editor')">Videographer/Editor</button>
      </div>
    </div>
    <!-- :height="`${projects.length}00vh`" -->
        <!-- show all -->
        <div 
        class="cover-contents filterDiv all" >
            <ProjectCover
            v-for="web in projectsWeb"
            :key="web.id"
            :ref="web.id"
            :title="web.title"
            :projectImg="web.image"
            :projectLink="web.link"
            :role="web.role"
          />
          <ProjectCover
            v-for="film in projectsFilm"
            :key="film.id"
            :ref="film.id"
            :title="film.title"
            :projectImg="film.image"
            :projectLink="film.link"
            :role="film.role"
          />
          <ProjectCover
            v-for="dance in projectsDance"
            :key="dance.id"
            :ref="dance.id"
            :title="dance.title"
            :projectImg="dance.image"
            :projectLink="dance.link"
            :role="dance.role"/>
          <ProjectCover
            v-for="model in projectsModel"
            :key="model.id"
            :ref="model.id"
            :title="model.title"
            :projectImg="model.image"
            :projectLink="model.link"
            :role="model.role"/>
          <ProjectCover
            v-for="choreography in projectsChoreography"
            :key="choreography.id"
            :ref="choreography.id"
            :title="choreography.title"
            :projectImg="choreography.image"
            :projectLink="choreography.link"
            :role="choreography.role"/>
        </div>
        <!-- only show web
        <div 
        class="cover-contents filterDiv web" >
            <ProjectCover
            v-for="web in projectsWeb"
            :key="web.id"
            :ref="web.id"
            :title="web.title"
            :projectImg="web.image"
            :projectLink="web.link"
            :role="web.role"
          />
        </div>
        only show film -->
        <!-- <div 
        class="cover-contents filterDiv film" >
          <ProjectCover
            v-for="film in projectsFilm"
            :key="film.id"
            :ref="film.id"
            :title="film.title"
            :projectImg="film.image"
            :projectLink="film.link"
            :role="film.role"
          /> -->
        <!-- </div> --> 
        <div class="progress-bar"></div>
    </div>
    
  </main>
</template>

<style scoped>

.dropbtn {
  background-color: transparent;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: flex;
  flex-direction: column;
}

.dropdown-content {
  display: none;
  position: absolute;
  padding-top: 200px;
  padding-left: 115px;
  background-color: transparent;
  /* min-width: 160px; */
  widows: min-content;
  z-index: 1;
}

.dropdown-content button {
  border: 1px solid var(--color-border);
  background-color: transparent;
  color: var(--color-text);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 var(--color-border);
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content button:hover {
  background-color: var(--color-border)
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .filter {
  background-color: #3e8e41;
}

.dropdown {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  top: 18%;
  right: 13%;
}


.filter.router-link-exact-active {
  color: var(--color-text);
}


.filter.router-link-exact-active:hover {
  background-color: transparent;
}


.filter {
  display: inline-block;
  padding: 1rem;
  border: 1px solid var(--color-border);
  background-color: transparent;
  color: var(--color-text);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 var(--color-border);
  z-index: 5;
}

.filter:hover {
  box-shadow: inset 0 0 0 2em var(--color-border);
  transition: 1s;
  /* background-color: var(--color-border); */
}



/* .filterDiv {
  display: none; /* Hidden by default 
} */
/* .cover-contents .filterDiv .all {
  display: block !important;
} */

.progress-bar {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: 10px;
      background: hsla(160, 100%, 37%, 1);
      transform: scaleX(0);
      transform-origin: 0%;
    }

.cover {
  height: 800vh;
  position: relative;
    /* display: flex;
    flex-direction: row;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100vh;
    background: var(--color-background);
    color: var(--color-text); */
}

.cover-contents {
  display: flex;
  position: sticky;
  top: 0;
    /* flex-direction: column;
    position: sticky;
    top: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background: var(--color-background);
    color: var(--color-text); */
    
}


img {
    width: auto;
    height: 100%;
    object-fit: cover;
}

</style>