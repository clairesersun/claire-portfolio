<template>
        <ThemeSwitcher id="project"/>
    <div class="about dance">
      <img 
      src="../../assets/dance/cover.png" 
      alt="Dance Cover Image"
      class="cover-img">
      <h1 class="title">Dance</h1>
      <div class="content">
<div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/-c9WCo3gyVY?si=Iey5WV0n4rKh3jmS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen autoplay loop playsinline="true" preload="none"></iframe>
      </div>
      <h3 class="section-title link">
    <RouterLink 
    to="/"
    class="section-title link"
    >
    See More Projects
  </RouterLink>
  </h3>
    </div>
    </div>
  </template>
  
  <style>
  
   
    
    .dance .cover-img {
      width: 100vw;
      height: 93vh;
    }

    
  </style>

<script>
import ThemeSwitcher from '../../components/ThemeSwitcher.vue'

export default {
  components: {
    ThemeSwitcher
  },
}
</script>