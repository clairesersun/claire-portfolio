<template>
    <div class="about modeling">
      <img 
      src="../../assets/modeling/cover.jpeg" 
      alt="Modeling Cover Image"
      class="cover-img">
      <h1 class="title">Modeling</h1>
      <div class="content">
<div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/X7glXyedyBE?si=wgJrYboIlQQlf7Do" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen autoplay loop playsinline="true" preload="none"></iframe>
      </div>
      <div class="img-container">
        <img src="../../assets/modeling/headshot.jpg" alt="Headshot Image" class="align-img">
        <img src="../../assets/modeling/MALVIE.png" alt="MALVIE Image" class="align-img">
        <img src="../../assets/modeling/millie.jpeg" alt="millie Image" class="align-img">
        <img src="../../assets/modeling/alexx.jpg" alt="alexx Image" class="align-img">
        <img src="../../assets/modeling/alexx2.jpg" alt="alexx Image" class="align-img">
        <img src="../../assets/modeling/claire.jpg" alt="claire Image" class="align-img">
        <img src="../../assets/modeling/finaldist.jpg" alt="final distribution Image" class="align-img">
        <img src="../../assets/modeling/claire2.jpg" alt="claire Image" class="align-img">
        <img src="../../assets/modeling/quyndita.jpg" alt="quyndita Image" class="align-img">
        <img src="../../assets/modeling/alexx3.jpg" alt="alexx Image" class="align-img">
        <img src="../../assets/modeling/scott.jpg" alt="scott Image" class="align-img">
        <img src="../../assets/modeling/nyc.jpg" alt="nyc Image" class="align-img">
        <img src="../../assets/modeling/louisa.jpg" alt="louisa Image" class="align-img">
        <img src="../../assets/modeling/roya.jpg" alt="roya Image" class="align-img">
        <img src="../../assets/modeling/roya2.jpg" alt="roya Image" class="align-img">
        <img src="../../assets/modeling/fashionweek.jpg" alt="Fashion Week Image" class="align-img">
        <img src="../../assets/modeling/chains.jpg" alt="Chains Image" class="align-img">
        <img src="../../assets/modeling/cover.jpeg" alt="Cover Image" class="align-img">
        <img src="../../assets/modeling/fashionweek2.jpg" alt="Fashion Week Image" class="align-img">
        <img src="../../assets/modeling/louisa2.jpg" alt="Louisa Image" class="align-img">
        <img src="../../assets/modeling/william.jpg" alt="William Image" class="align-img">
        <img src="../../assets/modeling/la.jpg" alt="LA Image" class="align-img">
        <img src="../../assets/modeling/josephs.jpg" alt="Josephs Image" class="align-img">
        <img src="../../assets/modeling/alexx4.jpg" alt="Alexx Image" class="align-img">
        <img src="../../assets/modeling/bird.jpg" alt="Bird Image" class="align-img">
        <img src="../../assets/modeling/jaqlin.jpg" alt="Jaqlin Image" class="align-img">
        <img src="../../assets/modeling/daniel.jpg" alt="Daniel Image" class="align-img">
        <img src="../../assets/modeling/ruby.jpg" alt="Ruby Image" class="align-img">
        <img src="../../assets/modeling/la2.jpg" alt="LA Image" class="align-img">
        <img src="../../assets/modeling/glitter.png" alt="Glitter Image" class="align-img">
        <img src="../../assets/modeling/bird2.jpg" alt="bird Image" class="align-img">
        <img src="../../assets/modeling/blue.jpg" alt="blue Image" class="align-img">
        <img src="../../assets/modeling/beach.jpg" alt="beach Image" class="align-img">
        <img src="../../assets/modeling/claire3.jpg" alt="Claire Image" class="align-img">
        <img src="../../assets/modeling/natalie.jpg" alt="Natalie Image" class="align-img">
        <img src="../../assets/modeling/cross.jpg" alt="cross Image" class="align-img">
        <img src="../../assets/modeling/claire4.jpg" alt="Claire Image" class="align-img">
        <img src="../../assets/modeling/glitter2.jpg" alt="glitter Image" class="align-img">
        <img src="../../assets/modeling/longhair.jpg" alt="Long Hair Image" class="align-img">
        <img src="../../assets/modeling/la3.jpg" alt="LA Image" class="align-img">
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
  
    .about.modeling {
      min-height: 100vh;
      display: flex;
      align-items: start;
      justify-content: center;
      flex-direction: column;    
    }
    
    .modeling .cover-img {
      width: 100vw;
      height: 93vh;
      object-fit: cover;
      position: relative;
      top: 0;
      z-index: -1;
    }

    .modeling .title {
      position: absolute;
      align-self: center;
      top: 30vh;
      text-align: center;
      font-size: 15rem;
      font-family: 'Proza Libre', sans-serif;
      font-weight: 400;
      color: var(--color-heading);
    }

    .modeling .subtitle {
      position: relative;
      width: 60vw;
      align-self: center;
      padding-top: 20px;
      padding-bottom: 20px;
      font-weight: 600;
    }

    .modeling .content {
      position: relative;
      /* width: 60vw; */
      width: 100vw;
      align-self: center;
      justify-content: center;
    }

    .modeling .section-title {
      font-family: 'Proza Libre', sans-serif;
      font-size: 1.2rem;
      text-align: left;
      font-weight: 600;
    }

    .modeling h2 {
      font-family: 'Proza Libre', sans-serif;
      font-size: 1.2rem;
      text-align: left;
    }

    .modeling p {
      font-family: 'Proza Libre', sans-serif;
        font-size: 1rem;
        line-height: 1.5;
        margin-bottom: 1rem;
        text-align: left;
    }

    .modeling .img-container {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 2rem;
    }

    .modeling .align-img {
      position: relative;
      /* margin: 10px; */
      height: auto;
      width: 400px;
      justify-self: start;
      align-self: start;
  }

  .modeling .video-container {
    width: 100%;
  }

  .modeling iframe {
    position: relative;
    margin: 0px 0px 10px calc((100% - 980px) * 0.5);
    left: 122px;
      justify-self: start;
      align-self: start;
    margin-bottom: 2rem;
    margin-top: 2rem;
    aspect-ratio: auto 744 / 397;
    width: 744px;
    height: 397px;
  }

  .modeling .position-section {
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

  .modeling .position-title {
    font-family: 'Proza Libre', sans-serif;
    font-size: 1.2rem;
    text-align: left;
    font-weight: 600;
    margin-bottom: 0;
  } 
  
  .modeling .position-info {
    font-family: 'Proza Libre', sans-serif;
    font-size: 1rem;
    text-align: left;
    font-weight: 400;
    margin-bottom: 0;
  }

  .modeling .section-wrapper {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 40%
  }

  .modeling .section-wrapper.shift {
    margin-top: -55px;
}

  .modeling .section-title.link {
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