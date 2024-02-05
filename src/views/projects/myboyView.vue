<template>
    <div class="about myboy">
      <img 
      src="../../assets/myboy/cover.png" 
      alt="my boy Cover Image"
      class="cover-img">
      <h1 class="title">my boy</h1>
      <h2 class="subtitle">Videographer / Editor  ☁︎  2019</h2>
    <div class="content">
      <p>A dance concept video by Claire Sersun and Melissa Valente.</p>
<div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/rFkTwYjk51E?si=eWVa-sUYY6XJpMbE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    </div>
    <div class="position-section">
        <div class="section-wrapper">
          <h3 class="position-title">Choreographer</h3>
          <p class="position-info">Melissa Valente</p>
        </div>
        <div class="section-wrapper">
          <h3 class="position-title">Video Editor</h3>
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
  
    .about.myboy {
      min-height: 100vh;
      display: flex;
      align-items: start;
      justify-content: center;
      flex-direction: column;    
    }
    
    .myboy .cover-img {
      width: 100vw;
      height: 93vh;
      object-fit: cover;
      position: relative;
      top: 0;
      z-index: -1;
      opacity: 0.8;
    }

    .myboy .title {
      position: absolute;
      align-self: center;
      /* justify-content: center; */
      top: 30vh;
      width: 100vw;
      word-break: break-word;
      text-align: center;
      font-size: 15rem;
      line-height: 15rem;
      font-family: 'Proza Libre', sans-serif;
      font-weight: 400;
      color: var(--color-heading);
    }

    .myboy .subtitle {
      position: relative;
      width: 60vw;
      align-self: center;
      padding-top: 20px;
      padding-bottom: 20px;
      font-weight: 600;
    }

    .myboy .content {
      position: relative;
      width: 60vw;
      align-self: center;
      justify-content: center;
    }

    .myboy .section-title {
      font-family: 'Proza Libre', sans-serif;
      font-size: 1.2rem;
      text-align: left;
      font-weight: 600;
    }

    .myboy h2 {
      font-family: 'Proza Libre', sans-serif;
      font-size: 1.2rem;
      text-align: left;
    }

    .myboy p {
      font-family: 'Proza Libre', sans-serif;
        font-size: 1rem;
        line-height: 1.5;
        margin-bottom: 1rem;
        text-align: left;
    }

    .myboy .img-container {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-bottom: 2rem;
    }

    .myboy .align-img {
      position: relative;
      margin: 10px;
      width: 120%;
      height: auto;
      justify-self: start;
      align-self: start;
  }

  .myboy .video-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .myboy iframe {
    position: relative;
    align-self: center;
    margin-bottom: 2rem;
    margin-top: 2rem;
    width: 744px;
    height: 397px;
  }

  .myboy .position-section {
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

  .myboy .position-title {
    font-family: 'Proza Libre', sans-serif;
    font-size: 1.2rem;
    text-align: left;
    font-weight: 600;
    margin-bottom: 0;
  } 
  
  .myboy .position-info {
    font-family: 'Proza Libre', sans-serif;
    font-size: 1rem;
    text-align: left;
    font-weight: 400;
    margin-bottom: 0;
  }

  .myboy .section-wrapper {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 40%
  }

  .myboy .section-wrapper.shift {
    margin-top: -55px;
}

  .myboy .section-title.link {
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
    .myboy iframe {
    width: 350px;
    height: auto;
  }}

  @media (max-width: 360px) {
    .myboy iframe {
    width: 250px;
  }}




  @media screen and (min-width: 576px) {
  .myboy .title {
    font-size: 6rem;
    line-height: 6rem;
    top: 32vh;   
  }

  .myboy .position-section {
    flex-direction: column;
    align-content: center;
  }
}

@media screen and (min-width: 768px) {
  .myboy .title {
    font-size: 8rem;
    line-height: 8rem; 
    top: 30vh;
  }

  .myboy .position-section {
    padding-left: 100px;
    padding-right: 100px;
    flex-direction: row;
  }
}

@media screen and (min-width: 992px) {
  .myboy .title {
    font-size: 10rem;
    line-height: 10rem; 
    top: 27vh;
  }

  .myboy .position-section {
    padding-left: 100px;
    padding-right: 100px;
  }
}

@media screen and (min-width: 1200px) {
/* biggest */
.myboy .title {
    font-size: 15rem;
    line-height: 15rem;
    top: 12vh;
  }
}
  
  </style>