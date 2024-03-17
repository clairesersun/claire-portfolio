<template>
    <div class="about museum-mile">
      <div class="cover-img-wrapper">
      <img 
      src="../../assets/museum/museummile3.jpeg" 
      alt="Museum Mile Cover Image"
      class="cover-img">
      </div>
      <h1 class="title">Museum Mile</h1>
      <h2 class="subtitle">Photographer  ☁︎  2019</h2>
      <div class="content">
      <div class="img-container">
        <img src="../../assets/museum/museummile.jpeg" alt="Museum Mile" loading="lazy" class="align-img">
        <img src="../../assets/museum/museummile1.jpeg" alt="Museum Mile 1" loading="lazy" class="align-img">
        <img src="../../assets/museum/museummile2.jpeg" alt="Museum Mile 2" loading="lazy" class="align-img">
        <img src="../../assets/museum/museummile3.jpeg" alt="Museum Mile 3" loading="lazy" class="align-img">
        <img src="../../assets/museum/museummile4.jpeg" alt="Museum Mile 4" loading="lazy" class="align-img">
        <img src="../../assets/museum/museummile5.jpeg" alt="Museum Mile 5" loading="lazy" class="align-img">
        <img src="../../assets/museum/museummile6.jpeg" alt="Museum Mile 6" loading="lazy" class="align-img">
        <img src="../../assets/museum/museummile7.jpeg" alt="Museum Mile 7" loading="lazy" class="align-img">
        <img src="../../assets/museum/museummile8.jpeg" alt="Museum Mile 8" loading="lazy" class="align-img">
        <img src="../../assets/museum/museummile9.jpeg" alt="Museum Mile 9" loading="lazy" class="align-img">
        <img src="../../assets/museum/museummile10.jpeg" alt="Museum Mile 10" loading="lazy" class="align-img">
        <img src="../../assets/museum/museummile11.jpeg" alt="Museum Mile 11" loading="lazy" class="align-img">
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
  

    .museum-mile .img-container {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-bottom: 2rem;
    }

    .museum-mile .align-img {
      position: relative;
      margin: 10px;
      width: auto;
      height: 80vh;
      justify-self: start;
      align-self: start;
  }
  
  </style>