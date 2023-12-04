<template>
    <div class="about moving-for-life">
      <img 
      src="../../assets/movingforlife/cover.png" 
      alt="Moving For Life Cover Image"
      class="cover-img">
      <h1 class="title">Moving For Life</h1>
      <h2 class="subtitle">Programming and Administrative Assistant   ☁︎  UI / UX / Graphic Designer ☁︎  2019-2021</h2>
    <div class="content">
      <h3 class="section-title">Website Tasks & Tools</h3>
      <p>The site needed to increase load times, be kept up to date with current teachers, donation links, classes, donors, etc, and ensure that users can easily register for class and donate to the organization. 
      </p>
      <p>The organization utilized WordPress, Beaver Builder, Google Calendar, and Network For Good for the upkeep and implementation of projects. We used users' feedback from phone calls, website statistics, and live commentary.</p>
      <div class="video-container">
        <video preload="none" autoplay loop playsinline="true" src="https://video.wixstatic.com/video/877ffb_3e479097116c499594b40a1854f2761f/1080p/mp4/file.mp4"></video>
      </div>
      <h3 class="section-title">Social Media & Email Campaigns</h3>
      <p>I worked on designs for events, classes, holidays, and everything in between. Designs were specifically made for Mailchimp, Instagram, Facebook, and NetworkForGood.</p>
      <p>I also worked on several promotional and informative videos.
        To see them, <a href="https://www.clairesersun.com/video" target="_blank">click here.</a>
      </p>
<div class="img-container">
  <img src="https://static.wixstatic.com/media/877ffb_82cfbff3f40e4006af1c7ecaee7c2055~mv2.jpg/v1/fill/w_530,h_530,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/185702932_4186885571355541_1723693171288885982_n.jpg" alt="185702932_4186885571355541_1723693171288885982_n.jpg" width="265" height="265" style="width: 265px; height: 265px; object-fit: cover; object-position: 50% 50%;" fetchpriority="high" class="align-img">
  <img src="https://static.wixstatic.com/media/877ffb_e4bf3cbe20b0475c81a58a08313958b7~mv2.png/v1/fill/w_530,h_530,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/262043996_4798780000166092_4236518040069145730_n.png" alt="262043996_4798780000166092_4236518040069145730_n.png" width="265" height="265" style="width: 265px; height: 265px; object-fit: cover; object-position: 50% 50%;" fetchpriority="high" class="align-img">
  <img src="https://static.wixstatic.com/media/877ffb_447123825bfd4b928593dc8c342c0879~mv2.png/v1/fill/w_938,h_666,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/126434168_3722608981116538_3422337502405381014_n.png" alt="126434168_3722608981116538_3422337502405381014_n.png" width="469" height="333" style="width: 469px; height: 333px; object-fit: cover; object-position: 50% 50%;" fetchpriority="high" class="align-img">
  <img src="https://static.wixstatic.com/media/877ffb_f62a8bee952640bebe81bfde67cda398~mv2.png/v1/fill/w_840,h_840,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Moving%20For%20Life's%20Daily%20Classes%20(2)%20(1).png" alt="Moving For Life's Daily Classes (2) (1).png" width="420" height="420" style="width: 420px; height: 420px; object-fit: cover; object-position: 50% 50%;" fetchpriority="high" class="align-img">
  <img src="https://static.wixstatic.com/media/877ffb_a2bd557754874738b53f410e852b02e8~mv2.png/v1/fill/w_718,h_718,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/244605511_4618619198182174_3652215008355355427_n.png" alt="244605511_4618619198182174_3652215008355355427_n.png" width="359" height="359" style="width: 359px; height: 359px; object-fit: cover; object-position: 50% 50%;" fetchpriority="high" class="align-img">
</div>

      <div class="position-section">
        <div class="section-wrapper">
          <h3 class="position-title">Position</h3>
          <p class="position-info">Programming and Administrative Assistant</p>
        </div>
        <div class="section-wrapper">
          <h3 class="position-title">Work</h3>
          <p class="position-info">UI</p>
          <p class="position-info">UX</p>
          <p class="position-info">Graphic Design</p>
        </div>
        <div class="section-wrapper shift">
          <h3 class="position-title">Org</h3>
          <p class="position-info">Moving For Life</p>
        </div>
        <div class="section-wrapper"></div>
        <div class="section-wrapper">
          <h3 class="position-title">Year</h3>
          <p class="position-info">2019-2021</p>
        </div>
        <div class="section-wrapper">
          <h3 class="position-title">www</h3>
          <a href="https://www.movingforlife.org/" target="_blank" class="position-info">movingforlife.org</a>
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
  
    .about.moving-for-life {
      min-height: 100vh;
      display: flex;
      align-items: start;
      justify-content: center;
      flex-direction: column;    
    }
    
    .moving-for-life .cover-img {
      width: 100vw;
      height: 93vh;
      object-fit: cover;
      position: relative;
      top: 0;
      z-index: -1;
    }

    .moving-for-life .title {
      position: absolute;
      align-self: center;
      top: 25vh;
      line-height: 15rem;
      text-align: center;
      font-size: 15rem;
      font-family: 'Proza Libre', sans-serif;
      font-weight: 400;
      color: var(--color-heading);
    }

    .moving-for-life .subtitle {
      position: relative;
      width: 60vw;
      align-self: center;
      padding-top: 20px;
      padding-bottom: 20px;
      font-weight: 600;
    }

    .moving-for-life .content {
      position: relative;
      width: 60vw;
      align-self: center;
      justify-content: center;
    }

    .moving-for-life .section-title {
      font-family: 'Proza Libre', sans-serif;
      font-size: 1.2rem;
      text-align: left;
      font-weight: 600;
    }

    .moving-for-life h2 {
      font-family: 'Proza Libre', sans-serif;
      font-size: 1.2rem;
      text-align: left;
    }

    .moving-for-life p {
      font-family: 'Proza Libre', sans-serif;
        font-size: 1rem;
        line-height: 1.5;
        margin-bottom: 1rem;
        text-align: left;
    }

    .moving-for-life .img-container {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    .moving-for-life .align-img {
      position: relative;
      margin: 10px;
      justify-self: start;
      align-self: start;
  }

  .moving-for-life .video-container {
    width: 100%;
  }

  .moving-for-life video {
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

  .moving-for-life .position-section {
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

  .moving-for-life .position-title {
    font-family: 'Proza Libre', sans-serif;
    font-size: 1.2rem;
    text-align: left;
    font-weight: 600;
    margin-bottom: 0;
  } 

  .moving-for-life .position-info {
    font-family: 'Proza Libre', sans-serif;
    font-size: 1rem;
    text-align: left;
    font-weight: 400;
    margin-bottom: 0;
  }

  .moving-for-life .section-wrapper {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 40%
  }

  .moving-for-life .section-wrapper.shift {
    margin-top: 0px;
  }

  .moving-for-life .section-title.link {
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