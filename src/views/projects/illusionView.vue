<template>
    <div class="about illusion">
      <div class="cover-img-wrapper">

        <img 
        src="../../assets/illusion/illusion5.jpeg" 
        alt="Illusion Cover Image"
        class="cover-img">
      </div>
      <h1 class="title">Illusion</h1>
      <h2 class="subtitle">Photographer & Creative Director  ☁︎  2019</h2>
      <div class="content">
        <p>The Illusion of Pearls</p>
        <p>Elegant Magazine September 2019</p>
        <p>Beauty Issue #2</p>
        <p>Model / Makeup & Hair: Camri Hewie</p>
      <div class="img-container">
        <img src="../../assets/illusion/illusion1.jpeg" alt="Illusion 1" loading="lazy" class="align-img">
        <img src="../../assets/illusion/illusion2.jpeg" alt="Illusion 2" loading="lazy" class="align-img">
        <img src="../../assets/illusion/illusion3.jpeg" alt="Illusion 3" loading="lazy" class="align-img">
        <img src="../../assets/illusion/illusion4.jpeg" alt="Illusion 4" loading="lazy" class="align-img">
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
    .illusion .img-container {
      display: flex;
      justify-content: space-around;
      margin-bottom: 2rem;
    }

    .illusion .align-img {
      position: relative;
      margin: 10px;
      width: auto;
      height: 80vh;
      justify-self: start;
      align-self: start;
    }
  
  </style>