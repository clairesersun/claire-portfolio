<template>
    <div class="about portraitof">
      <img 
      src="../../assets/portraitof/cover.png" 
      alt="Portrait of Cover Image"
      class="cover-img">
      <h1 class="title">Portrait of a Dancer</h1>
      <h2 class="subtitle">Choreographer  ☁︎  2016</h2>
    <div class="content">
      <p>Portrait of a Dancer Transforming into a Young Woman:</p>
      <p>This is a dance film exploration of the existential push and pull of a mother and daughter.</p>
    <div class="position-section">
        <div class="section-wrapper">
            <h3 class="position-title">Performed by</h3>
          <p class="position-info">Reed Sapanza and Claire Sersun</p>
        </div>
        <div class="section-wrapper">
          <h3 class="position-title">Choreographed, Edited, and Filmed by</h3>
          <p class="position-info">Claire Sersun</p>
        </div>
        <div class="section-wrapper shift"></div>
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
  
    .about.portraitof {
      min-height: 100vh;
      display: flex;
      align-items: start;
      justify-content: center;
      flex-direction: column;    
    }
    
    .portraitof .cover-img {
      width: 100vw;
      height: 93vh;
      object-fit: cover;
      position: relative;
      top: 0;
      z-index: -1;
      opacity: 0.8;
    }

    .portraitof .title {
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

    .portraitof .subtitle {
      position: relative;
      width: 60vw;
      align-self: center;
      padding-top: 20px;
      padding-bottom: 20px;
      font-weight: 600;
    }

    .portraitof .content {
      position: relative;
      width: 60vw;
      align-self: center;
      justify-content: center;
    }

    .portraitof .section-title {
      font-family: 'Proza Libre', sans-serif;
      font-size: 1.2rem;
      text-align: left;
      font-weight: 600;
    }

    .portraitof h2 {
      font-family: 'Proza Libre', sans-serif;
      font-size: 1.2rem;
      text-align: left;
    }

    .portraitof p {
      font-family: 'Proza Libre', sans-serif;
        font-size: 1rem;
        line-height: 1.5;
        margin-bottom: 1rem;
        text-align: left;
    }

    .portraitof .img-container {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-bottom: 2rem;
    }

    .portraitof .align-img {
      position: relative;
      margin: 10px;
      width: 120%;
      height: auto;
      justify-self: start;
      align-self: start;
  }

  .portraitof .video-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .portraitof iframe {
    position: relative;
    align-self: center;
    margin-bottom: 2rem;
    margin-top: 2rem;
    width: 744px;
    height: 397px;
  }

  .portraitof .position-section {
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

  .portraitof .position-title {
    font-family: 'Proza Libre', sans-serif;
    font-size: 1.2rem;
    text-align: left;
    font-weight: 600;
    margin-bottom: 0;
  } 
  
  .portraitof .position-info {
    font-family: 'Proza Libre', sans-serif;
    font-size: 1rem;
    text-align: left;
    font-weight: 400;
    margin-bottom: 0;
  }

  .portraitof .section-wrapper {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 40%
  }

  .portraitof .section-wrapper.shift {
    margin-top: -55px;
}

  .portraitof .section-title.link {
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
    .portraitof iframe {
    width: 350px;
    height: auto;
  }}

  @media (max-width: 360px) {
    .portraitof iframe {
    width: 250px;
  }}
  
  </style>