<template>
        <ThemeSwitcher id="project"/>
    <div class="about home">
      <div class="cover-img-wrapper">

        <img 
        src="../../assets/home/Sersun__image-6 copy.jpg" 
        alt="HOME Cover Image"
        class="cover-img">
      </div>
      <h1 class="title">HOME</h1>
      <h2 class="subtitle">Photographer  ☁︎  2020</h2>
      <div class="content">
      <div class="img-container">
        <img src="../../assets/home/Sersun__image-1 copy.jpg" alt="HOME 1" loading="lazy" class="align-img">
        <img src="../../assets/home/Sersun__image-2 copy.jpg" alt="HOME 2" loading="lazy" class="align-img">
        <img src="../../assets/home/Sersun__image-3 copy.jpg" alt="HOME 3" loading="lazy" class="align-img">
        <img src="../../assets/home/Sersun__image-4 copy.jpg" alt="HOME 4" loading="lazy" class="align-img">
        <img src="../../assets/home/Sersun__image-5 copy.jpg" alt="HOME 5" loading="lazy" class="align-img">
        <img src="../../assets/home/Sersun__image-6 copy.jpg" alt="HOME 6" loading="lazy" class="align-img">
        <img src="../../assets/home/Sersun__image-7 copy.jpg" alt="HOME 7" loading="lazy" class="align-img">
        <img src="../../assets/home/Sersun__image-8 copy.jpg" alt="HOME 8" loading="lazy" class="align-img">
        <img src="../../assets/home/Sersun__image-9 copy.jpg" alt="HOME 9" loading="lazy" class="align-img">
        <img src="../../assets/home/Sersun__image-10 copy.jpg" alt="HOME 10" loading="lazy" class="align-img">
        <img src="../../assets/home/Sersun__image-11 copy.jpg" alt="HOME 11" loading="lazy" class="align-img">
        <img src="../../assets/home/Sersun__image-12 copy.jpg" alt="HOME 12" loading="lazy" class="align-img">
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
    .home .img-container {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-bottom: 2rem;
    }

    .home .align-img {
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