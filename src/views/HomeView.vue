<script setup>
import ProjectCover from '../components/ProjectCover.vue'
import { ref } from 'vue'

const projects = ref([
  { id: 1, title: 'VALLETO', image: 'src/assets/logo.svg', link: '/projects/valleto' },
  { id: 2, title: 'Moving For Life', image: 'src/assets/logo.svg', link: '/projects/valleto' },
  { id: 3, title: 'timeslot', image: 'src/assets/logo.svg', link: '/projects/valleto' }
])


</script>

<template>
  <main>
    <ProjectCover :projects="projects"/>
    
  </main>
</template>

<style scoped>

</style>