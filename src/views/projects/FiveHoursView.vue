<template>
    <div class="about fivehours">
      <img 
      src="../../assets/fivehours/cover.png" 
      alt="Five Hours Cover Image"
      class="cover-img">
      <h1 class="title">Five Hours</h1>
      <h2 class="subtitle">Choreographer  ☁︎  2019</h2>
    <div class="content">
      <p>This is a dance film exploration that was initiated by learning that the average person spends five hours a day on their cell phone.</p>
    <div class="video-container"> 
        <iframe width="560" height="315" src="https://www.youtube.com/embed/7_PPuTDh918?si=1hajmlJIRtJYm8Ik" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="position-section">
        <div class="section-wrapper">
            <h3 class="position-title">Presented at</h3>
          <p class="position-info">Dancers at Work at Marymount Manhattan College</p>
        </div>
        <div class="section-wrapper">
          <h3 class="position-title">Choreographed by</h3>
          <p class="position-info">Claire Sersun</p>
        </div>
        <div class="section-wrapper">
          <h3 class="position-title">Performed by</h3>
          <p class="position-info">Sam Behrens, Nancy Donnes, Maya Lam, Eleanor McKillop-Tague, Athena Petrizzo, Ambar Rivera-Soto, Kate Reyes, Gabrielle Williams</p>
        </div>
        <div class="section-wrapper"></div>
        <div class="section-wrapper">
          <h3 class="position-title">Costumes by</h3>
          <p class="position-info">Mondo Morales</p>
        </div>
        <div class="section-wrapper">
          <h3 class="position-title">Music by</h3>
          <p class="position-info">Michael Gordon, Dry</p>
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
  
    .about.fivehours {
      min-height: 100vh;
      display: flex;
      align-items: start;
      justify-content: center;
      flex-direction: column;    
    }
    
    .fivehours .cover-img {
      width: 100vw;
      height: 93vh;
      object-fit: cover;
      position: relative;
      top: 0;
      z-index: -1;
      opacity: 0.8;
    }

    .fivehours .title {
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

    .fivehours .subtitle {
      position: relative;
      width: 60vw;
      align-self: center;
      padding-top: 20px;
      padding-bottom: 20px;
      font-weight: 600;
    }

    .fivehours .content {
      position: relative;
      width: 60vw;
      align-self: center;
      justify-content: center;
    }

    .fivehours .section-title {
      font-family: 'Proza Libre', sans-serif;
      font-size: 1.2rem;
      text-align: left;
      font-weight: 600;
    }

    .fivehours h2 {
      font-family: 'Proza Libre', sans-serif;
      font-size: 1.2rem;
      text-align: left;
    }

    .fivehours p {
      font-family: 'Proza Libre', sans-serif;
        font-size: 1rem;
        line-height: 1.5;
        margin-bottom: 1rem;
        text-align: left;
    }

    .fivehours .img-container {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-bottom: 2rem;
    }

    .fivehours .align-img {
      position: relative;
      margin: 10px;
      width: 120%;
      height: auto;
      justify-self: start;
      align-self: start;
  }

  .fivehours .video-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .fivehours iframe {
    position: relative;
    align-self: center;
    margin-bottom: 2rem;
    margin-top: 2rem;
    width: 744px;
    height: 397px;
  }

  .fivehours .position-section {
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

  .fivehours .position-title {
    font-family: 'Proza Libre', sans-serif;
    font-size: 1.2rem;
    text-align: left;
    font-weight: 600;
    margin-bottom: 0;
  } 
  
  .fivehours .position-info {
    font-family: 'Proza Libre', sans-serif;
    font-size: 1rem;
    text-align: left;
    font-weight: 400;
    margin-bottom: 0;
  }

  .fivehours .section-wrapper {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 40%
  }

  .fivehours .section-wrapper.shift {
    margin-top: -55px;
}

  .fivehours .section-title.link {
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
    .fivehours iframe {
    width: 350px;
    height: auto;
  }}

  @media (max-width: 360px) {
    .fivehours iframe {
    width: 250px;
  }}
  
  </style>