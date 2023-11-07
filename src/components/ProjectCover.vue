<script setup>
import ProjectsInfo from './ProjectsInfo.vue';
import LocomotiveScroll from 'locomotive-scroll';


defineProps(['projects'])




</script>

<template>
    <div 
    class="cover" 
    width="${projects.id}00vw">
        <div 
        class="cover-contents" >
            <ProjectsInfo
            
            v-for="project in projects"
            :key="project.id"
            :ref="project.id"
          :title="project.title"
          :projectImg="project.image"
          :projectLink="project.link"
          />
        </div>
    </div>
</template>

<style scoped>
.cover {
    display: flex;
    flex-direction: row;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100vh;
    background: var(--color-background);
    color: var(--color-text);
}

.cover-contents {
    flex-direction: column;
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
    color: var(--color-text);
    
}

img {
    width: auto;
    height: 100%;
    object-fit: cover;
}

</style>

