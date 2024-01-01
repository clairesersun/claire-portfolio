<template>
    <div class="about home">
      <img 
      src="../../assets/home/Sersun__image-6 copy.jpg" 
      alt="HOME Cover Image"
      class="cover-img">
      <h1 class="title">HOME</h1>
      <h2 class="subtitle">Photographer  ☁︎  2020</h2>
      <div class="content">
      <div class="img-container">
        <img src="../../assets/home/Sersun__image-1 copy.jpg" alt="HOME 1" loading="lazy" class="align-img">
        <img src="../../assets/home/Sersun__image-2 copy.jpg" alt="HOME 2" loading="lazy" class="align-img">
        <img src="../../assets/home/Sersun__image-3 copy.jpg" alt="HOME 3" loading="lazy" class="align-img">
        <img src="../../assets/home/Sersun__image-4 copy.jpg" alt="HOME 4" loading="lazy" class="align-img">
        <img src="../../assets/home/Sersun__image-5 copy.jpg" alt="HOME 5" loading="lazy" class="align-img">
        <img src="../../assets/home/Sersun__image-6 copy.jpg" alt="HOME 6" loading="lazy" class="align-img">
        <img src="../../assets/home/Sersun__image-7 copy.jpg" alt="HOME 7" loading="lazy" class="align-img">
        <img src="../../assets/home/Sersun__image-8 copy.jpg" alt="HOME 8" loading="lazy" class="align-img">
        <img src="../../assets/home/Sersun__image-9 copy.jpg" alt="HOME 9" loading="lazy" class="align-img">
        <img src="../../assets/home/Sersun__image-10 copy.jpg" alt="HOME 10" loading="lazy" class="align-img">
        <img src="../../assets/home/Sersun__image-11 copy.jpg" alt="HOME 11" loading="lazy" class="align-img">
        <img src="../../assets/home/Sersun__image-12 copy.jpg" alt="HOME 12" loading="lazy" class="align-img">
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
  
    .about.home {
      min-height: 100vh;
      display: flex;
      align-items: start;
      justify-content: center;
      flex-direction: column;    
    }
    
    .home .cover-img {
      width: 100vw;
      height: 93vh;
      object-fit: cover;
      position: relative;
      top: 0;
      z-index: -1;
      opacity: 0.8;
    }

    .home .title {
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

    .home .subtitle {
      position: relative;
      width: 60vw;
      align-self: center;
      padding-top: 20px;
      padding-bottom: 20px;
      font-weight: 600;
    }

    .home .content {
      position: relative;
      width: 60vw;
      align-self: center;
      justify-content: center;
    }

    .home .section-title {
      font-family: 'Proza Libre', sans-serif;
      font-size: 1.2rem;
      text-align: left;
      font-weight: 600;
    }

    .home h2 {
      font-family: 'Proza Libre', sans-serif;
      font-size: 1.2rem;
      text-align: left;
    }

    .home p {
      font-family: 'Proza Libre', sans-serif;
        font-size: 1rem;
        line-height: 1.5;
        margin-bottom: 1rem;
        text-align: left;
    }

    .home .img-container {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-bottom: 2rem;
    }

    .home .align-img {
      position: relative;
      margin: 10px;
      width: 120%;
      height: auto;
      justify-self: start;
      align-self: start;
  }


  .home .video-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .home iframe {
    position: relative;
    align-self: center;
    margin-bottom: 2rem;
    margin-top: 2rem;
    width: 744px;
    height: 397px;
  }

  .home .position-section {
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

  .home .position-title {
    font-family: 'Proza Libre', sans-serif;
    font-size: 1.2rem;
    text-align: left;
    font-weight: 600;
    margin-bottom: 0;
  } 
  
  .home .position-info {
    font-family: 'Proza Libre', sans-serif;
    font-size: 1rem;
    text-align: left;
    font-weight: 400;
    margin-bottom: 0;
  }

  .home .section-wrapper {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 40%
  }

  .home .section-wrapper.shift {
    margin-top: -55px;
}

  .home .section-title.link {
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