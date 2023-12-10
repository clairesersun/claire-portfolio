<template>
    <div class="about reflectremove">
      <img 
      src="../../assets/reflectremove/cover.jpeg" 
      alt="Rise Up Cover Image"
      class="cover-img">
      <h1 class="title">Reflect: Remove</h1>
      <h2 class="subtitle">Videographer / Editor  ☁︎  2018</h2>
    <div class="content">
      <p>This video is a collaboration between Moving For Life and Komen Greater NYC.</p>
<div class="video-container">
    <video preload="none" autoplay loop controls playsinline webkit-playsinline x5-playsinline src="https://video.wixstatic.com/video/877ffb_24858f157d014753a91d33ce1a9ec7a1/720p/mp4/file.mp4"></video>
    </div>
<div class="position-section">
        <div class="section-wrapper">
          <h3 class="position-title">Position</h3>
          <p class="position-info">Videographer and Editor</p>
        </div>
        <div class="section-wrapper">
          <h3 class="position-title">Year</h3>
          <p class="position-info">2018</p>
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
  
    .about.reflectremove {
      min-height: 100vh;
      display: flex;
      align-items: start;
      justify-content: center;
      flex-direction: column;    
    }
    
    .reflectremove .cover-img {
      width: 100vw;
      height: 93vh;
      object-fit: cover;
      position: relative;
      top: 0;
      z-index: -1;
    }

    .reflectremove .title {
      position: absolute;
      align-self: center;
      /* justify-content: center; */
      top: 21vh;
      text-align: center;
      font-size: 15rem;
      line-height: 15rem;
      font-family: 'Proza Libre', sans-serif;
      font-weight: 400;
      color: var(--color-heading);
    }

    .reflectremove .subtitle {
      position: relative;
      width: 60vw;
      align-self: center;
      padding-top: 20px;
      padding-bottom: 20px;
      font-weight: 600;
    }

    .reflectremove .content {
      position: relative;
      width: 60vw;
      align-self: center;
      justify-content: center;
    }

    .reflectremove .section-title {
      font-family: 'Proza Libre', sans-serif;
      font-size: 1.2rem;
      text-align: left;
      font-weight: 600;
    }

    .reflectremove h2 {
      font-family: 'Proza Libre', sans-serif;
      font-size: 1.2rem;
      text-align: left;
    }

    .reflectremove p {
      font-family: 'Proza Libre', sans-serif;
        font-size: 1rem;
        line-height: 1.5;
        margin-bottom: 1rem;
        text-align: left;
    }

    .reflectremove .img-container {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-bottom: 2rem;
    }

    .reflectremove .align-img {
      position: relative;
      margin: 10px;
      justify-self: start;
      align-self: start;
  }

  .reflectremove .video-container {
    width: 100%;
  }

  .reflectremove video {
    position: relative;
    margin: 0px 0px 10px calc((100% - 980px) * 0.5);
    left: 122px;
    justify-self: start;
    align-self: start;
    margin-bottom: 2rem;
    margin-top: 2rem;
    aspect-ratio: auto 744 / 397;
    /* width: 744px; */
    height: 397px;
  }

  .reflectremove .position-section {
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

  .reflectremove .position-title {
    font-family: 'Proza Libre', sans-serif;
    font-size: 1.2rem;
    text-align: left;
    font-weight: 600;
    margin-bottom: 0;
  } 
  
  .reflectremove .position-info {
    font-family: 'Proza Libre', sans-serif;
    font-size: 1rem;
    text-align: left;
    font-weight: 400;
    margin-bottom: 0;
  }

  .reflectremove .section-wrapper {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 40%
  }

  .reflectremove .section-wrapper.shift {
    margin-top: -55px;
}

  .reflectremove .section-title.link {
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