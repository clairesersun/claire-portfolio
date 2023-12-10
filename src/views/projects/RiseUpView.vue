<template>
    <div class="about riseup">
      <img 
      src="../../assets/riseup/cover.jpeg" 
      alt="Rise Up Cover Image"
      class="cover-img">
      <h1 class="title">Rise Up</h1>
      <h2 class="subtitle">Videographer / Editor  ☁︎  2020</h2>
    <div class="content">
      <p>This video is a collaboration between Moving For Life and Komen Greater NYC.</p>
<div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/itaNfoGwCz4?si=6TL5maUpC73SOb-u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen autoplay loop playsinline="true" preload="none"></iframe>
      </div>
<div class="position-section">
        <div class="section-wrapper">
          <h3 class="position-title">Performed by</h3>
          <p class="position-info">Volunteer participants from Moving For Life and Komen Greater NYC Race for the Cure</p>
        </div>
        <div class="section-wrapper">
          <h3 class="position-title">Choreographed by</h3>
          <p class="position-info">Louisa Armstrong</p>
        </div>
        <div class="section-wrapper">
          <h3 class="position-title">Produced by</h3>
          <p class="position-info">Martha Eddy and Louisa Armstrong</p>
        </div>
        <div class="section-wrapper"></div>
        <div class="section-wrapper">
          <h3 class="position-title">Year</h3>
          <p class="position-info">2020</p>
        </div>
        <div class="section-wrapper">
          <h3 class="position-title">Video Editor</h3>
          <p class="position-info">Claire Sersun</p>
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
  
    .about.riseup {
      min-height: 100vh;
      display: flex;
      align-items: start;
      justify-content: center;
      flex-direction: column;    
    }
    
    .riseup .cover-img {
      width: 100vw;
      height: 93vh;
      object-fit: cover;
      position: relative;
      top: 0;
      z-index: -1;
    }

    .riseup .title {
      text-transform: uppercase;
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

    .riseup .subtitle {
      position: relative;
      width: 60vw;
      align-self: center;
      padding-top: 20px;
      padding-bottom: 20px;
      font-weight: 600;
    }

    .riseup .content {
      position: relative;
      width: 60vw;
      align-self: center;
      justify-content: center;
    }

    .riseup .section-title {
      font-family: 'Proza Libre', sans-serif;
      font-size: 1.2rem;
      text-align: left;
      font-weight: 600;
    }

    .riseup h2 {
      font-family: 'Proza Libre', sans-serif;
      font-size: 1.2rem;
      text-align: left;
    }

    .riseup p {
      font-family: 'Proza Libre', sans-serif;
        font-size: 1rem;
        line-height: 1.5;
        margin-bottom: 1rem;
        text-align: left;
    }

    .riseup .img-container {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-bottom: 2rem;
    }

    .riseup .align-img {
      position: relative;
      margin: 10px;
      width: 120%;
      height: auto;
      justify-self: start;
      align-self: start;
  }

  .riseup .video-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .riseup iframe {
    position: relative;
    align-self: center;
    margin-bottom: 2rem;
    margin-top: 2rem;
    width: 744px;
    height: 397px;
  }

  .riseup .position-section {
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

  .riseup .position-title {
    font-family: 'Proza Libre', sans-serif;
    font-size: 1.2rem;
    text-align: left;
    font-weight: 600;
    margin-bottom: 0;
  } 
  
  .riseup .position-info {
    font-family: 'Proza Libre', sans-serif;
    font-size: 1rem;
    text-align: left;
    font-weight: 400;
    margin-bottom: 0;
  }

  .riseup .section-wrapper {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 40%
  }

  .riseup .section-wrapper.shift {
    margin-top: -55px;
}

  .riseup .section-title.link {
    position: relative;
    margin-top: 5rem;
    margin-bottom: 7rem;
    text-align: center;
    font-size: 2rem;
    font-family: 'Proza Libre', sans-serif;
    font-weight: 600;
    color: var(--color-heading);
  }

  @media (max-width: 800px) {
    .riseup iframe {
    width: 350px;
    height: auto;
  }}

  @media (max-width: 360px) {
    .riseup iframe {
    width: 250px;
  }}
  
  </style>