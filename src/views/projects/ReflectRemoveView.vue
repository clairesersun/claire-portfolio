<template>
      <ThemeSwitcher id="project"/>
    <div class="about reflectremove">
      <div class="cover-img-wrapper">

        <img 
        src="../../assets/reflectremove/cover.jpeg" 
        alt="Rise Up Cover Image"
        class="cover-img">
      </div>
      <h1 class="title">Reflect: Remove</h1>
      <h2 class="subtitle">Videographer / Editor  ☁︎  2018</h2>
    <div class="content">
      <p>This video is a collaboration between Moving For Life and Komen Greater NYC.</p>
<div class="video-container">
    <video preload="none" autoplay loop controls playsinline webkit-playsinline x5-playsinline src="https://video.wixstatic.com/video/877ffb_24858f157d014753a91d33ce1a9ec7a1/720p/mp4/file.mp4"></video>
    </div>
<div class="position-section">
        <div class="section-wrapper">
          <h3 class="position-title">Position</h3>
          <p class="position-info">Videographer and Editor</p>
        </div>
        <div class="section-wrapper">
          <h3 class="position-title">Year</h3>
          <p class="position-info">2018</p>
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
    .reflectremove .position-section {
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