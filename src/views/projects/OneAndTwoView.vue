<template>
    <div class="about oneandtwo">
      <img 
      src="../../assets/oneandtwo/cover.png" 
      alt="One and Two Cover Image"
      class="cover-img">
      <h1 class="title">.1 & .2</h1>
      <h2 class="subtitle">Choreographer  ☁︎  2018</h2>
    <div class="content">
      <p>This is a dance film exploration of the monotonous aspect of grief.</p>
      <p>.1 was the initial piece presented at Sonic Creative and .2 was a further exploration which added audience participation.</p>
    <div class="position-section">
        <div class="section-wrapper">
            <h3 class="position-title">Presented at</h3>
          <p class="position-info">Works in Progress at Marymount Manhattan College & Sonic Creative at Sonic Yoga</p>
        </div>
        <div class="section-wrapper">
          <h3 class="position-title">Choreographed by</h3>
          <p class="position-info">Claire Sersun</p>
        </div>
        <div class="section-wrapper"></div>
        <div class="section-wrapper">
          <h3 class="position-title">Performed by</h3>
          <p class="position-info">Tegan Hack, Kayla Ostrowski, Claire Sersun</p>
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
  
    .about.oneandtwo {
      min-height: 100vh;
      display: flex;
      align-items: start;
      justify-content: center;
      flex-direction: column;    
    }
    
    .oneandtwo .cover-img {
      width: 100vw;
      height: 93vh;
      object-fit: cover;
      position: relative;
      top: 0;
      z-index: -1;
      opacity: 0.8;
    }

    .oneandtwo .title {
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

    .oneandtwo .subtitle {
      position: relative;
      width: 60vw;
      align-self: center;
      padding-top: 20px;
      padding-bottom: 20px;
      font-weight: 600;
    }

    .oneandtwo .content {
      position: relative;
      width: 60vw;
      align-self: center;
      justify-content: center;
    }

    .oneandtwo .section-title {
      font-family: 'Proza Libre', sans-serif;
      font-size: 1.2rem;
      text-align: left;
      font-weight: 600;
    }

    .oneandtwo h2 {
      font-family: 'Proza Libre', sans-serif;
      font-size: 1.2rem;
      text-align: left;
    }

    .oneandtwo p {
      font-family: 'Proza Libre', sans-serif;
        font-size: 1rem;
        line-height: 1.5;
        margin-bottom: 1rem;
        text-align: left;
    }

    .oneandtwo .img-container {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-bottom: 2rem;
    }

    .oneandtwo .align-img {
      position: relative;
      margin: 10px;
      width: 120%;
      height: auto;
      justify-self: start;
      align-self: start;
  }

  .oneandtwo .video-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .oneandtwo iframe {
    position: relative;
    align-self: center;
    margin-bottom: 2rem;
    margin-top: 2rem;
    width: 744px;
    height: 397px;
  }

  .oneandtwo .position-section {
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

  .oneandtwo .position-title {
    font-family: 'Proza Libre', sans-serif;
    font-size: 1.2rem;
    text-align: left;
    font-weight: 600;
    margin-bottom: 0;
  } 
  
  .oneandtwo .position-info {
    font-family: 'Proza Libre', sans-serif;
    font-size: 1rem;
    text-align: left;
    font-weight: 400;
    margin-bottom: 0;
  }

  .oneandtwo .section-wrapper {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 40%
  }

  .oneandtwo .section-wrapper.shift {
    margin-top: -55px;
}

  .oneandtwo .section-title.link {
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
    .oneandtwo iframe {
    width: 350px;
    height: auto;
  }}

  @media (max-width: 360px) {
    .oneandtwo iframe {
    width: 250px;
  }}
  
  </style>