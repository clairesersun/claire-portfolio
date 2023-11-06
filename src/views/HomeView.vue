<script setup>
import ProjectCover from '../components/ProjectCover.vue'
import { ref } from 'vue'

const projects = ref([
  { id: 1, title: 'VALLETO', image: '../assets/logo.svg', link: '/projects/valleto' },
  { id: 2, title: 'Moving For Life', image: '../assets/logo.svg', link: '/projects/valleto' },
  { id: 3, title: 'timeslot', image: '../assets/logo.svg', link: '/projects/valleto' }
])

console.log(projects.value)

</script>

<template>
  <main>
      <ProjectCover 
      v-for="project in projects"
      :key="project.id"
      :title="project.title"
      :projectImg="project.image"
      :projectLink="project.link"/>
    
  </main>
</template>

<style scoped>

img {
  width: auto;
  height: 100%;
  object-fit: cover;
}
</style>