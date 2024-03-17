<template>
      <ThemeSwitcher id="project"/>
    <div class="about rain">
      <div class="cover-img-wrapper">

        <img 
        src="../../assets/rain/cover.png" 
        alt="Rain Cover Image"
        class="cover-img">
      </div>
      <h1 class="title">Rain</h1>
      <h2 class="subtitle">Choreographer / Videographer / Editor  ☁︎  2019</h2>
    <div class="content">
      <p>This video is a short film exploring on-the-spot movement creation in relationship to different spaces.</p>
<div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/1zHOxIXpWIY?si=6FnFTa_Q6FvDF7x-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen autoplay loop playsinline="true" preload="none"></iframe>
      </div>
<div class="position-section">
        <div class="section-wrapper">
          <h3 class="position-title">Performed by</h3>
          <p class="position-info">Meghan Keeney</p>
        </div>
        <div class="section-wrapper">
          <h3 class="position-title">Choreographed, Edited, and Filmed by</h3>
          <p class="position-info">Claire Sersun</p>
        </div>
        <div class="section-wrapper">
            <h3 class="position-title">Year</h3>
            <p class="position-info">2019</p>
        </div>
        <div class="section-wrapper"></div>
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
  @media screen and (min-width: 768px) {
    .rain .position-section {
      margin-top: 60px;
    }
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