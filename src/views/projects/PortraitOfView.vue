<template>
        <ThemeSwitcher id="project"/>
    <div class="about portraitof">
      <div class="cover-img-wrapper">
        <img 
        src="../../assets/portraitof/cover.png" 
        alt="Portrait of Cover Image"
        class="cover-img">
      </div>
      <h1 class="title">Portrait of a Dancer</h1>
      <h2 class="subtitle">Choreographer  ☁︎  2016</h2>
    <div class="content">
      <p>Portrait of a Dancer Transforming into a Young Woman:</p>
      <p>This is a dance film exploration of the existential push and pull of a mother and daughter.</p>
    <div class="position-section">
        <div class="section-wrapper">
            <h3 class="position-title">Performed by</h3>
          <p class="position-info">Reed Sapanza and Claire Sersun</p>
        </div>
        <div class="section-wrapper">
          <h3 class="position-title">Choreographed, Edited, and Filmed by</h3>
          <p class="position-info">Claire Sersun</p>
        </div>
        <div class="section-wrapper shift"></div>
        <div class="section-wrapper">
          <h3 class="position-title">Music by</h3>
          <p class="position-info">Michael Gordon, Dry</p>
      </div>
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