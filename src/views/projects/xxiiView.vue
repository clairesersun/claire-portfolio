<template>
    <div class="about xxii">
      <img 
      src="../../assets/xxii/cover.png" 
      alt="xxii Cover Image"
      class="cover-img">
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
  
    .about.xxii {
      min-height: 100vh;
      display: flex;
      align-items: start;
      justify-content: center;
      flex-direction: column;    
    }
    
    .xxii .cover-img {
      width: 100vw;
      height: 93vh;
      object-fit: cover;
      position: relative;
      top: 0;
      z-index: -1;
      opacity: 0.8;
    }

    .xxii .title {
      position: absolute;
      align-self: center;
      width: 100vw;
      word-break: break-word;
      top: 12vh;
      text-align: center;
      font-size: 15rem;
      line-height: 15rem;
      font-family: 'Proza Libre', sans-serif;
      font-weight: 400;
      color: var(--color-heading);
    }

    .xxii .subtitle {
      position: relative;
      width: 60vw;
      align-self: center;
      padding-top: 20px;
      padding-bottom: 20px;
      font-weight: 600;
    }

    .xxii .content {
      position: relative;
      width: 60vw;
      align-self: center;
      justify-content: center;
    }

    .xxii .section-title {
      font-family: 'Proza Libre', sans-serif;
      font-size: 1.2rem;
      text-align: left;
      font-weight: 600;
    }

    .xxii h2 {
      font-family: 'Proza Libre', sans-serif;
      font-size: 1.2rem;
      text-align: left;
    }

    .xxii p {
      font-family: 'Proza Libre', sans-serif;
        font-size: 1rem;
        line-height: 1.5;
        margin-bottom: 1rem;
        text-align: left;
    }

    .xxii .img-container {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-bottom: 2rem;
    }

    .xxii .align-img {
      width: 120%;
      position: relative;
      margin: 10px;
      justify-self: start;
      align-self: start;
  }

  .xxii .video-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .xxii iframe {
    position: relative;
    align-self: center;
    margin-bottom: 2rem;
    margin-top: 2rem;
    width: 744px;
    height: 397px;
  }

  .xxii .position-section {
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

  .xxii .position-title {
    font-family: 'Proza Libre', sans-serif;
    font-size: 1.2rem;
    text-align: left;
    font-weight: 600;
    margin-bottom: 0;
  } 
  
  .xxii .position-info {
    font-family: 'Proza Libre', sans-serif;
    font-size: 1rem;
    text-align: left;
    font-weight: 400;
    margin-bottom: 0;
  }

  .xxii .section-wrapper {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 40%
  }

  .xxii .section-wrapper.shift {
    margin-top: -55px;
}

  .xxii .section-title.link {
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
    .xxii iframe {
    width: 350px;
    height: auto;
  }}

  @media (max-width: 360px) {
    .xxii iframe {
    width: 250px;
  }}
  
  </style>