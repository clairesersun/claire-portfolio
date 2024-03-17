<template>
        <ThemeSwitcher id="project"/>
    <div class="about oneandtwo">
      <div class="cover-img-wrapper">

        <img 
        src="../../assets/oneandtwo/cover.png" 
        alt="One and Two Cover Image"
        class="cover-img">
      </div>
      <h1 class="title">.1 & .2</h1>
      <h2 class="subtitle">Choreographer  ☁︎  2018</h2>
    <div class="content">
      <p>This is a dance film exploration of the monotonous aspect of grief.</p>
      <p>.1 was the initial piece presented at Sonic Creative and .2 was a further exploration which added audience participation.</p>
    <div class="position-section">
        <div class="section-wrapper">
            <h3 class="position-title">Presented at</h3>
          <p class="position-info">Works in Progress at Marymount Manhattan College & Sonic Creative at Sonic Yoga</p>
        </div>
        <div class="section-wrapper">
          <h3 class="position-title">Choreographed by</h3>
          <p class="position-info">Claire Sersun</p>
        </div>
        <div class="section-wrapper"></div>
        <div class="section-wrapper">
          <h3 class="position-title">Performed by</h3>
          <p class="position-info">Tegan Hack, Kayla Ostrowski, Claire Sersun</p>
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
<script>
import ThemeSwitcher from '../../components/ThemeSwitcher.vue'

export default {
  components: {
    ThemeSwitcher
  },
}
</script>