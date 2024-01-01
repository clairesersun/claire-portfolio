<template>
    <div class="about valleto">
      <img 
      src="../../assets/valleto/cover.jpeg" 
      alt="Valleto Cover Image"
      class="cover-img">
      <h1 class="title">VALLETO</h1>
      <h2 class="subtitle">Web Designer  ☁︎  UI / UX / Development / Graphic Design  ☁︎  2021-2022</h2>
    <div class="content">
      <h3 class="section-title">Problem</h3>
      <p>The site required maintenance and updates to keep up with the evolution of the dance company as new initiative were added, new works created, and the home city of the company changed. The site had slow load times and bounced many users off the site. There was a need for a merchandise store and a way for people to register for online zoom classes. Lastly, user experience needed to be elevated as well.</p>
      <div class="img-container">
        <img src="../../assets/valleto/valleto1.webp" alt="9 (1).png" width="564" height="317" style="width: 564px; height: 317px; object-fit: cover; object-position: 50% 50%;" fetchpriority="high" class="align-img-one">
        <img src="../../assets/valleto/valleto2.webp" alt="8-transparent.png" width="551" height="309" style="width: 551px; height: 309px; object-fit: cover; object-position: 50% 50%;" fetchpriority="high" class="align-img-two">
      </div>
      <h3 class="section-title">User Experience</h3>
      <p>When I first started working on the site, there were 8+ options in the menu. Menu items were congested which caused us to loose users. My goal was to simplify and streamline the menu bar while creating depth to the organization. There were 4 items that were related to the word 'Company' so I grouped them together to declutter the menu. This was by far the largest change, second to the workshops tab which has evolved over time to have between 2-4 nested pages. </p>
      <p>We also optimized the website to decrease load times by using CloudFare, changing many self hosted videos to Vimeo alternatives, and optimizing images.
      </p>
      <p>As the site evolved, constant upkeep and checks were made to ensure excellent mobile optimization. This is essential as a large group of our users view our site from Instagram on their mobile devices.</p>
      <div class="video-container">
      <video preload="none" autoplay loop playsinline="true" src="../../assets/valleto/valleto3.mp4"></video>
      <video preload="none" autoplay loop playsinline="true" src="../../assets/valleto/valleto4.mp4"></video>
      </div>
      <h3 class="section-title">Merchandise & Online Bookings</h3>
      <p>To satisfy the need for a merchandise store, I chose Shopify and integrated it into our preexisting website. This choice was due to the ease of linking print-on-demand services through the admin panel of Shopify. They also had a user friendly interface for admin upkeep and could integrate with our website including our given color palates. To encourage buyers, this page was placed in our main menu and given our demographic, MERCH was the chosen title.</p>
      <p>During COVID-19, the company turned to online dance classes, therefore a system for signing up, taking payment, and seeing who signed up for class had to be built. Because we use WordPress, we wanted a system that could seamlessly run straight from the backend. Then came Amelia. I integrated Amelia, setting up class informational pages, sign up forms and payment, log in pages for users and instructors, created instructor users in the backend, among others. </p>
      <img src="../../assets/valleto/valleto5.webp" alt="7.png" width="735" height="414" style="width: 735px; height: 414px; object-fit: cover; object-position: 50% 50%;" fetchpriority="high" class="align-img-three">
      <h3 class="section-title">Design</h3>
      <p>The hamburger menu required custom design elements. I used Illustrator to design each menu item, the regular and hovered text. Once I exported the PNG I uploaded it to WordPress and used custom CSS to layer in the images and the hover states.</p>
      <p>Adding new Work titles required several design elements to be made. First, the title of the page overlayed with images. This I did in both Illustrator and Photoshop. If no images were given, I would screenshot from videos provided. Next, the color theme had to be chosen. I often would use colors from the given video. Once the color palate was chosen, I would layer them into the background of the block elements. Once the page was created with videos, photos, and text provided, I would add it to the Works page. Once updating the project scroll, I would add custom CSS to overlay the image with text and create a hover state.</p>
      <p>Alongside creating the color palate for each Work, I created color palates for several other pages. Some palates were based off of other pages, others were images, and some were videos. I played in Photoshop and took inspiration from Miami, nature, and contemporary art.</p>
      <p>
        As the company evolved, pages were redesigned to fit new needs and additional ones added. 
      </p>
      <p>I took performance photos of the Work MOON. See selections <a href="https://valletodance.com/project/moon">here.</a></p>
      <div class="video-container">
        <video preload="none" autoplay loop playsinline="true" src="../../assets/valleto/valleto6.mp4"></video>
      </div>
      <div class="img-container">
        <img src="../../assets/valleto/valleto7.webp" alt="6-transparent.png" width="530" height="297" style="width: 530px; height: 297px; object-fit: cover; object-position: 50% 50%;" fetchpriority="high" class="align-img-four">
        <img src="../../assets/valleto/valleto8.webp" alt="5-transparent.png" width="227" height="153" style="width: 227px; height: 153px; object-fit: cover; object-position: 50% 50%;" fetchpriority="high" class="align-img-five">
      </div>
      <div class="position-section">
        <div class="section-wrapper">
          <h3 class="position-title">Position</h3>
          <p class="position-info">Web Designer</p>
        </div>
        <div class="section-wrapper">
          <h3 class="position-title">Work</h3>
          <p class="position-info">UI</p>
          <p class="position-info">UX</p>
          <p class="position-info">Development</p>
          <p class="position-info">Graphic Design</p>
        </div>
        <div class="section-wrapper shift">
          <h3 class="position-title">Org</h3>
          <p class="position-info">VALLETO</p>
        </div>
        <div class="section-wrapper"></div>
        <div class="section-wrapper">
          <h3 class="position-title">Year</h3>
          <p class="position-info">2021-2022</p>
        </div>
        <div class="section-wrapper">
          <h3 class="position-title">www</h3>
          <a href="https://valletodance.com/" target="_blank" class="position-info">valletodance.com</a>
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
  
    .about.valleto {
      min-height: 100vh;
      display: flex;
      align-items: start;
      justify-content: center;
      flex-direction: column;    
    }
    
    .valleto .cover-img {
      width: 100vw;
      height: 93vh;
      object-fit: cover;
      position: relative;
      top: 0;
      z-index: -1;
      opacity: 0.8;
    }

    .valleto .title {
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

    .valleto .subtitle {
      position: relative;
      width: 60vw;
      align-self: center;
      padding-top: 20px;
      padding-bottom: 20px;
      font-weight: 600;
    }

    .valleto .content {
      position: relative;
      width: 60vw;
      align-self: center;
    }

    .valleto .section-title {
      font-family: 'Proza Libre', sans-serif;
      font-size: 1.2rem;
      text-align: left;
      font-weight: 600;
    }

    .valleto h2 {
      font-family: 'Proza Libre', sans-serif;
      font-size: 1.2rem;
      text-align: left;
    }

    .valleto p {
      font-family: 'Proza Libre', sans-serif;
        font-size: 1rem;
        line-height: 1.5;
        margin-bottom: 1rem;
        text-align: left;
    }

    .valleto .img-container {
      width: 100%;
    }

    .valleto .align-img-one {
      position: relative;
      margin: 0px 0px -133px calc((100% - 980px) * 0.5);
      left: 391px;
      grid-area: 6 / 1 / 7 / 2;
      justify-self: start;
      align-self: start;
    }

    .valleto .align-img-two {
      position: relative;
      margin: 0px 0px 10px calc((100% - 980px) * 0.5);
      left: 14px;
      grid-area: 7 / 1 / 8 / 2;
      justify-self: start;
      align-self: start;
  }

  .valleto .align-img-three {
    position: relative;
    margin: 0px 0px 10px calc((100% - 980px) * 0.5);
    left: 122px;
    grid-area: 16 / 1 / 17 / 2;
    justify-self: start;
    align-self: start;
  }

  .valleto .align-img-four {
    position: relative;
    margin: 30px 0px -142px calc((100% - 980px) * 0.5);
    left: 224px;
    grid-area: 22 / 1 / 23 / 2;
    justify-self: start;
    align-self: start;
  }

  .valleto .align-img-five {
    position: relative;
    margin: 0px 0px -180px calc((100% - 300px));
    grid-area: 23 / 1 / 24 / 2;
    justify-self: start;
    align-self: start;
    transform: rotate(270deg);
  }

  .valleto .video-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .valleto video {
    position: relative;
    align-self: center;
    margin-bottom: 2rem;
    margin-top: 2rem;
    width: 744px;
    height: 397px;
  }

  .valleto .position-section {
    margin-top: 250px;
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

  .valleto .position-title {
    font-family: 'Proza Libre', sans-serif;
    font-size: 1.2rem;
    text-align: left;
    font-weight: 600;
    margin-bottom: 0;
  } 

  .valleto .position-info {
    font-family: 'Proza Libre', sans-serif;
    font-size: 1rem;
    text-align: left;
    font-weight: 400;
    margin-bottom: 0;
  }

  .valleto .section-wrapper {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 40%
  }

  .valleto .section-wrapper.shift {
    margin-top: -55px;
  }

  .valleto .section-title.link {
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
    .valleto iframe {
    width: 350px;
    height: auto;
  }}

  @media (max-width: 360px) {
    .valleto iframe {
    width: 250px;
  }}
  
  </style>
  