<script setup>
import ProjectCover from '../components/ProjectCover.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { animate, scroll, glide, inView } from "motion";

const projects = ref([
  { id: 1, title: 'VALLETO', image: 'src/assets/logo.svg', link: '/projects/valleto' },
  { id: 2, title: 'Moving For Life', image: 'src/assets/logo.svg', link: '/projects/valleto' },
  { id: 3, title: 'timeslot', image: 'src/assets/logo.svg', link: '/projects/valleto' }
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
    <!-- :height="`${projects.length}00vh`" -->
        <div 
        class="cover-contents" >
            <ProjectCover
            v-for="project in projects"
            :key="project.id"
            :ref="project.id"
            :title="project.title"
            :projectImg="project.image"
            :projectLink="project.link"
          />
        </div>
        <div class="progress-bar"></div>
    </div>
    
  </main>
</template>

<style scoped>

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
  height: 500vh;
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