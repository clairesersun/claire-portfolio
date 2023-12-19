<template>
    <div class="about openyoureyes">
      <img 
      src="../../assets/openyoureyes/cover.png" 
      alt="Open Your Eyes Cover Image"
      class="cover-img">
      <h1 class="title">Open Your Eyes</h1>
      <h2 class="subtitle">Choreographer  ☁︎  2017</h2>
    <div class="content">
      <p>This is a dance film exploring psychological connection through the mundane, morning routines.</p>
    <div class="position-section">
        <div class="section-wrapper">
            <h3 class="position-title">Presented at</h3>
          <p class="position-info">Works in Progress at Marymount Manhattan College</p>
        </div>
        <div class="section-wrapper">
          <h3 class="position-title">Choreographed by</h3>
          <p class="position-info">Claire Sersun</p>
        </div>
        <div class="section-wrapper">
          <h3 class="position-title">Performed by</h3>
          <p class="position-info">Anita Chisum, Sofia Blasco, Alexandra Garrett, Emily Schmitt, Meghan Keeney, Madeline Gibson</p>
        </div>
        <div class="section-wrapper">
          <h3 class="position-title">Music by</h3>
          <p class="position-info">Chihei Hatakeyama, Bonfire On the Field</p>
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
  
    .about.openyoureyes {
      min-height: 100vh;
      display: flex;
      align-items: start;
      justify-content: center;
      flex-direction: column;    
    }
    
    .openyoureyes .cover-img {
      width: 100vw;
      height: 93vh;
      object-fit: cover;
      position: relative;
      top: 0;
      z-index: -1;
      opacity: 0.8;
    }

    .openyoureyes .title {
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

    .openyoureyes .subtitle {
      position: relative;
      width: 60vw;
      align-self: center;
      padding-top: 20px;
      padding-bottom: 20px;
      font-weight: 600;
    }

    .openyoureyes .content {
      position: relative;
      width: 60vw;
      align-self: center;
      justify-content: center;
    }

    .openyoureyes .section-title {
      font-family: 'Proza Libre', sans-serif;
      font-size: 1.2rem;
      text-align: left;
      font-weight: 600;
    }

    .openyoureyes h2 {
      font-family: 'Proza Libre', sans-serif;
      font-size: 1.2rem;
      text-align: left;
    }

    .openyoureyes p {
      font-family: 'Proza Libre', sans-serif;
        font-size: 1rem;
        line-height: 1.5;
        margin-bottom: 1rem;
        text-align: left;
    }

    .openyoureyes .img-container {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-bottom: 2rem;
    }

    .openyoureyes .align-img {
      position: relative;
      margin: 10px;
      width: 120%;
      height: auto;
      justify-self: start;
      align-self: start;
  }

  .openyoureyes .video-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .openyoureyes iframe {
    position: relative;
    align-self: center;
    margin-bottom: 2rem;
    margin-top: 2rem;
    width: 744px;
    height: 397px;
  }

  .openyoureyes .position-section {
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

  .openyoureyes .position-title {
    font-family: 'Proza Libre', sans-serif;
    font-size: 1.2rem;
    text-align: left;
    font-weight: 600;
    margin-bottom: 0;
  } 
  
  .openyoureyes .position-info {
    font-family: 'Proza Libre', sans-serif;
    font-size: 1rem;
    text-align: left;
    font-weight: 400;
    margin-bottom: 0;
  }

  .openyoureyes .section-wrapper {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 40%
  }

  .openyoureyes .section-wrapper.shift {
    margin-top: -55px;
}

  .openyoureyes .section-title.link {
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
    .openyoureyes iframe {
    width: 350px;
    height: auto;
  }}

  @media (max-width: 360px) {
    .openyoureyes iframe {
    width: 250px;
  }}
  
  </style>