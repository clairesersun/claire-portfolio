<template>
    <div class="about">
      <img 
      src="../../assets/logo.svg" 
      alt="Valleto Logo"
      class="cover-img">
      <div class="title">
      <h1>VALLETO</h1>
      <h2>Designer  ☁︎  UI / UX / Development / Graphic Design  ☁︎  2021-2022</h2>
    </div>
    <div class="content">
      <h3>Problem</h3>
      <p>The site required maintenance and updates to keep up with the evolution of the dance company as new initiative were added, new works created, and the home city of the company changed. The site had slow load times and bounced many users off the site. There was a need for a merchandise store and a way for people to register for online zoom classes. Lastly, user experience needed to be elevated as well.</p>
      <h3>User Experience</h3>
      <p>When I first started working on the site, there were 8+ options in the menu. Menu items were congested which caused us to loose users. My goal was to simplify and streamline the menu bar while creating depth to the organization. There were 4 items that were related to the word 'Company' so I grouped them together to declutter the menu. This was by far the largest change, second to the workshops tab which has evolved over time to have between 2-4 nested pages. </p>
      <p>We also optimized the website to decrease load times by using CloudFare, changing many self hosted videos to Vimeo alternatives, and optimizing images.
      </p>
      <p>As the site evolved, constant upkeep and checks were made to ensure excellent mobile optimization. This is essential as a large group of our users view our site from Instagram on their mobile devices.</p>
      <h3>Merchandise & Online Bookings</h3>
      <p>To satisfy the need for a merchandise store, I chose Shopify and integrated it into our preexisting website. This choice was due to the ease of linking print-on-demand services through the admin panel of Shopify. They also had a user friendly interface for admin upkeep and could integrate with our website including our given color palates. To encourage buyers, this page was placed in our main menu and given our demographic, MERCH was the chosen title.</p>
      <p>During COVID-19, the company turned to online dance classes, therefore a system for signing up, taking payment, and seeing who signed up for class had to be built. Because we use WordPress, we wanted a system that could seamlessly run straight from the backend. Then came Amelia. I integrated Amelia, setting up class informational pages, sign up forms and payment, log in pages for users and instructors, created instructor users in the backend, among others. </p>
      <h3>Design</h3>
      <p>The hamburger menu required custom design elements. I used Illustrator to design each menu item, the regular and hovered text. Once I exported the PNG I uploaded it to WordPress and used custom CSS to layer in the images and the hover states.</p>
      <p>Adding new Work titles required several design elements to be made. First, the title of the page overlayed with images. This I did in both Illustrator and Photoshop. If no images were given, I would screenshot from videos provided. Next, the color theme had to be chosen. I often would use colors from the given video. Once the color palate was chosen, I would layer them into the background of the block elements. Once the page was created with videos, photos, and text provided, I would add it to the Works page. Once updating the project scroll, I would add custom CSS to overlay the image with text and create a hover state.</p>
      <p>Alongside creating the color palate for each Work, I created color palates for several other pages. Some palates were based off of other pages, others were images, and some were videos. I played in Photoshop and took inspiration from Miami, nature, and contemporary art.</p>
      <p>
        As the company evolved, pages were redesigned to fit new needs and additional ones added. 
      </p>
      <p>I took performance photos of the Work MOON. See selections <a href="https://valletodance.com/project/moon">here.</a></p>
    </div>
    </div>
  </template>
  
  <style>
  
    .about {
      min-height: 100vh;
      display: flex;
      align-items: start;
      justify-content: center;
      flex-direction: column;    }
    
    .cover-img {
      width: 100vw;
      height: 45vh;
      object-fit: cover;
      position: relative;
      top: 0;
      z-index: -1;
    }

    .title {
      position: relative;
      width: 60vw;
      align-self: center;
    }

    .content {
      position: relative;
      width: 60vw;
      align-self: center;
    }

h1 {
  font-family: 'Proza Libre', sans-serif;
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  padding-top: 100px;
  top: -10px;
  text-align: left;
}

h3 {
  font-family: 'Proza Libre', sans-serif;
  font-size: 1.2rem;
  text-align: left;
}

h2 {
  font-family: 'Proza Libre', sans-serif;
  font-size: 1.2rem;
  text-align: left;
}

p {
  font-family: 'Proza Libre', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    text-align: left;
}
  
  </style>
  