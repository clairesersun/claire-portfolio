<template>
        <ThemeSwitcher id="project"/>
    <div class="about persevere">
      <div class="cover-img-wrapper">
        <img 
        src="../../assets/presevere/cover.jpeg" 
        alt="persevere Cover Image"
        class="cover-img">
      </div>
      <h1 class="title">PRESEVERE</h1>
      <h2 class="subtitle">Videographer / Editor / Choreographer  ☁︎  2021</h2>
    <div class="content">
      <h3 class="section-title">Overview</h3>
      <p>This is a dance film exploration into what it would be like to create without ever having met the collaborators in person. Rehearsal were held on zoom and the choreographer was separated from the filming process only to later choreograph with the film itself.</p>
<p>The resulting work explores the anxiety, confusion, resilience, strength and overall perseverance embraced during the covid-19 pandemic. It&apos;s about finding the strength from within to keep going on.</p>
<div class="video-container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/0e-OFtQV9SU?si=jb4Oi88yxme2roCE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen autoplay loop playsinline="true" preload="none"></iframe>
      </div>
<h3 class="section-title">Director Statement</h3>
<p>The 2020 Covid-19 Pandemic brought isolation amongst the dance community with people fleeing cities and communities. It has caused many of us to feel alone in our suffering and creations. The main connector in todays society, social media, does not provide the one on one connections creatives need to thrive. In September 2020 I met an inspiring group of women through the fall virtual season of VALLETO. We connected, shared our struggles and joys, created, and persevered together. Not only that, but we did it all via zoom. I desired to take the next step by creating a short film virtually with one of the dancers I met through the virtual season, Luciana. We had never met in person prior to the creation of this film. This created an interesting dynamic between the two of us which allowed more discovery of each other and awareness of our current experience throughout this process.</p>
<p>I choreographed on Luciana through a zoom screen for 2 weeks with a total of 9, two hour long rehearsals. Luciana and Rein filmed the footage via an iPhone on one Saturday following a shot list I created. We did not have the final music yet so I gave Luciana a myriad of music to dance to from classical string compositions to upbeat techno. This allowed for a variety of textures to emerge from her movement. She then sent the footage through Apple Photos for me to edit and piece together the film. The goal was to create this throughout January so I had two weeks left to edit. I struggled with not being in control throughout the entirety of the process which allowed extra tension to surface in the final piece.</p>

<div class="img-container">
  <img src="https://static.wixstatic.com/media/877ffb_ee3cee40c146426e81f709853fb02e80~mv2.png/v1/fill/w_1726,h_965,al_c,q_90,enc_auto/877ffb_ee3cee40c146426e81f709853fb02e80~mv2.png" alt="" width="980" height="548" style="object-fit: cover; object-position: 50% 50%;" fetchpriority="high" class="align-img">
</div>
<div class="position-section">
        <div class="section-wrapper">
          <h3 class="position-title">Performed by</h3>
          <p class="position-info">Luciana Johnson</p>
        </div>
        <div class="section-wrapper">
          <h3 class="position-title">Choreographed and Edited</h3>
          <p class="position-info">Claire Sersun</p>
        </div>
        <div class="section-wrapper">
          <h3 class="position-title">Filmed by</h3>
          <p class="position-info">Rein Short</p>
        </div>
        <div class="section-wrapper"></div>
        <div class="section-wrapper">
          <h3 class="position-title">Year</h3>
          <p class="position-info">2021</p>
        </div>
        <div class="section-wrapper">
          <h3 class="position-title">www</h3>
          <a href="https://filmfreeway.com/PERSEVERE497" target="_blank" class="position-info">filmfreeway.com</a>
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
  .persevere .img-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-bottom: 2rem;
      }
  
      .persevere .align-img {
        position: relative;
        margin: 10px;
        width: 120%;
        height: auto;
        justify-self: start;
        align-self: start;
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