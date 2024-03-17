<template>
  <ThemeSwitcher id="project"/>
    <div class="about xxii">
      <div class="cover-img-wrapper">
        <img 
        src="../../assets/xxii/cover.png" 
        alt="xxii Cover Image"
        class="cover-img">
      </div>
      <h1 class="title">xxii:
        <br>
        Twenty-Two</h1>
        <h2 class="subtitle">Choreographer / Performer  ☁︎  2019</h2>
    <div class="content">
      <p>This piece is a questioning and exploring identity as a twenty-two year old woman.</p>
<div class="video-container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/nhdDP_3A8ww?si=o6loa7gSb7VVEJ-i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen autoplay loop playsinline="true" preload="none"></iframe>
      </div>
<div class="position-section">
        <div class="section-wrapper">
          <h3 class="position-title">Presented at</h3>
          <p class="position-info">Works in Progress at Marymount Manhattan College</p>
        </div>
        <div class="section-wrapper">
          <h3 class="position-title">Choreographed and Performed by</h3>
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
  .xxii .position-section {
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