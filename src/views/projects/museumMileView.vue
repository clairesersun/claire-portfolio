<template>
    <div class="about museum-mile">
      <img 
      src="../../assets/museum/museummile3.jpeg" 
      alt="Museum Mile Cover Image"
      class="cover-img">
      <h1 class="title">Museum Mile</h1>
      <h2 class="subtitle">Photographer  ☁︎  2019</h2>
      <div class="content">
      <div class="img-container">
        <img src="../../assets/museum/museummile.jpeg" alt="Museum Mile" loading="lazy" class="align-img">
        <img src="../../assets/museum/museummile1.jpeg" alt="Museum Mile 1" loading="lazy" class="align-img">
        <img src="../../assets/museum/museummile2.jpeg" alt="Museum Mile 2" loading="lazy" class="align-img">
        <img src="../../assets/museum/museummile3.jpeg" alt="Museum Mile 3" loading="lazy" class="align-img">
        <img src="../../assets/museum/museummile4.jpeg" alt="Museum Mile 4" loading="lazy" class="align-img">
        <img src="../../assets/museum/museummile5.jpeg" alt="Museum Mile 5" loading="lazy" class="align-img">
        <img src="../../assets/museum/museummile6.jpeg" alt="Museum Mile 6" loading="lazy" class="align-img">
        <img src="../../assets/museum/museummile7.jpeg" alt="Museum Mile 7" loading="lazy" class="align-img">
        <img src="../../assets/museum/museummile8.jpeg" alt="Museum Mile 8" loading="lazy" class="align-img">
        <img src="../../assets/museum/museummile9.jpeg" alt="Museum Mile 9" loading="lazy" class="align-img">
        <img src="../../assets/museum/museummile10.jpeg" alt="Museum Mile 10" loading="lazy" class="align-img">
        <img src="../../assets/museum/museummile11.jpeg" alt="Museum Mile 11" loading="lazy" class="align-img">
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
  
    .about.museum-mile {
      min-height: 100vh;
      display: flex;
      align-items: start;
      justify-content: center;
      flex-direction: column;    
    }
    
    .museum-mile .cover-img {
      width: 100vw;
      height: 93vh;
      object-fit: cover;
      position: relative;
      top: 0;
      z-index: -1;
      opacity: 0.8;
    }

    .museum-mile .title {
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

    .museum-mile .subtitle {
      position: relative;
      width: 60vw;
      align-self: center;
      padding-top: 20px;
      padding-bottom: 20px;
      font-weight: 600;
    }

    .museum-mile .content {
      position: relative;
      width: 60vw;
      align-self: center;
      justify-content: center;
    }

    .museum-mile .section-title {
      font-family: 'Proza Libre', sans-serif;
      font-size: 1.2rem;
      text-align: left;
      font-weight: 600;
    }

    .museum-mile h2 {
      font-family: 'Proza Libre', sans-serif;
      font-size: 1.2rem;
      text-align: left;
    }

    .museum-mile p {
      font-family: 'Proza Libre', sans-serif;
        font-size: 1rem;
        line-height: 1.5;
        margin-bottom: 1rem;
        text-align: left;
    }

    .museum-mile .img-container {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-bottom: 2rem;
    }

    .museum-mile .align-img {
      position: relative;
      margin: 10px;
      width: auto;
      height: 80vh;
      justify-self: start;
      align-self: start;
  }


  .museum-mile .video-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .museum-mile iframe {
    position: relative;
    align-self: center;
    margin-bottom: 2rem;
    margin-top: 2rem;
    width: 744px;
    height: 397px;
  }

  .museum-mile .position-section {
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

  .museum-mile .position-title {
    font-family: 'Proza Libre', sans-serif;
    font-size: 1.2rem;
    text-align: left;
    font-weight: 600;
    margin-bottom: 0;
  } 
  
  .museum-mile .position-info {
    font-family: 'Proza Libre', sans-serif;
    font-size: 1rem;
    text-align: left;
    font-weight: 400;
    margin-bottom: 0;
  }

  .museum-mile .section-wrapper {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 40%
  }

  .museum-mile .section-wrapper.shift {
    margin-top: -55px;
}

  .museum-mile .section-title.link {
    position: relative;
    margin-top: 5rem;
    margin-bottom: 7rem;
    text-align: center;
    font-size: 2rem;
    font-family: 'Proza Libre', sans-serif;
    font-weight: 600;
    color: var(--color-heading);
  }







  @media screen and (min-width: 576px) {
  .museum-mile .title {
    font-size: 6rem;
    line-height: 6rem;
    top: 32vh;   
  }

  .museum-mile .position-section {
    flex-direction: column;
    align-content: center;
  }
}

@media screen and (min-width: 768px) {
  .museum-mile .title {
    font-size: 8rem;
    line-height: 8rem; 
    top: 30vh;
  }

  .museum-mile .position-section {
    padding-left: 100px;
    padding-right: 100px;
    flex-direction: row;
  }
}

@media screen and (min-width: 992px) {
  .museum-mile .title {
    font-size: 10rem;
    line-height: 10rem; 
    top: 27vh;
  }

  .museum-mile .position-section {
    padding-left: 100px;
    padding-right: 100px;
  }
}

@media screen and (min-width: 1200px) {
/* biggest */
.museum-mile .title {
    font-size: 15rem;
    line-height: 15rem;
    top: 12vh;
  }
}
  
  </style>