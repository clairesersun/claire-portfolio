<template>
    <div class="about illusion">
      <img 
      src="../../assets/illusion/illusion5.jpeg" 
      alt="Illusion Cover Image"
      class="cover-img">
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
  
    .about.illusion {
      min-height: 100vh;
      display: flex;
      align-items: start;
      justify-content: center;
      flex-direction: column;    
    }
    
    .illusion .cover-img {
      width: 100vw;
      height: 93vh;
      object-fit: cover;
      position: relative;
      top: 0;
      z-index: -1;
      opacity: 0.8;
    }

    .illusion .title {
      position: absolute;
      align-self: center;
      top: 30vh;
      width: 100vw;
      word-break: break-word;
      text-align: center;
      font-size: 15rem;
      font-family: 'Proza Libre', sans-serif;
      font-weight: 400;
      color: var(--color-heading);
    }

    .illusion .subtitle {
      position: relative;
      width: 60vw;
      align-self: center;
      padding-top: 20px;
      padding-bottom: 20px;
      font-weight: 600;
    }

    .illusion .content {
      position: relative;
      width: 60vw;
      align-self: center;
      justify-content: center;
    }

    .illusion .section-title {
      font-family: 'Proza Libre', sans-serif;
      font-size: 1.2rem;
      text-align: left;
      font-weight: 600;
    }

    .illusion h2 {
      font-family: 'Proza Libre', sans-serif;
      font-size: 1.2rem;
      text-align: left;
    }

    .illusion p {
      font-family: 'Proza Libre', sans-serif;
        font-size: 1rem;
        line-height: 1.5;
        margin-bottom: 1rem;
        text-align: left;
    }

    .illusion .img-container {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
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


  .illusion .video-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .illusion iframe {
    position: relative;
    align-self: center;
    margin-bottom: 2rem;
    margin-top: 2rem;
    width: 744px;
    height: 397px;
  }

  .illusion .position-section {
    margin-top: 100px;
    background-color: var(--color-background-soft);
    border-radius: 10px;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 100px;
    padding-right: 100px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: auto;
    justify-content: space-around;
    width: 60vw;
  }

  .illusion .position-title {
    font-family: 'Proza Libre', sans-serif;
    font-size: 1.2rem;
    text-align: left;
    font-weight: 600;
    margin-bottom: 0;
  } 
  
  .illusion .position-info {
    font-family: 'Proza Libre', sans-serif;
    font-size: 1rem;
    text-align: left;
    font-weight: 400;
    margin-bottom: 0;
  }

  .illusion .section-wrapper {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 40%
  }

  .illusion .section-wrapper.shift {
    margin-top: -55px;
}

  .illusion .section-title.link {
    position: relative;
    margin-top: 5rem;
    margin-bottom: 7rem;
    text-align: center;
    font-size: 2rem;
    font-family: 'Proza Libre', sans-serif;
    font-weight: 600;
    color: var(--color-heading);
  }
  
  </style>