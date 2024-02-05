<template>
    <div class="modal-wrapper">
      <button 
          class="modal-close-button" @click="$emit('close')">
                X
      </button>
      <div class="about-wrapper">
        <section class="intro-section">
          <img src="../assets/claire.png" alt="Claire Sersun" class="about-image">
          <h1>About Claire</h1>
        <!-- <h2>multidisiplinary designer, artist, and coach</h2> -->
        <p></p>
        </section>
        <section class="bio">
          <div class="bio-header-wrapper">
          <h2>Bio</h2>
          <section class="about-switch">
            <button @click="longBioVisibility" class="about-long-btn"><h3>Long</h3></button>
            <button @click="shortBioVisibility" class="about-short-btn"><h3>Short</h3></button>
          </section>
          </div>
          <div class="about-long">
            <p>Claire Sersun is an artist, web designer, dancer, choreographer, movement instructor, and photographer. She earned a Master of Arts in Mass Communication with a focus on Web Design from the University of Florida. Claire received her Bachelor of Arts in Dance and Kinesiology from Marymount Manhattan College. Currently working as a UI/UX Designer @ <a href="https://veoci.com/" target="_blank">Veoci</a> and a Pilates Instructor @ <a href="https://www.clubpilates.com/location/danbury" target="_blank">Club Pilates Danbury</a>.</p>
            <p>Initially working within the dance and fitness industry, Claire gathered a wide array of web design clients. She helped nonprofits, marketing agencies, dance companies, and individual performers on various stages of their website design, development, and maintenance - from full creation and design to redesigning infrastructure. Claire&apos;s work has connected breast cancer survivors to movement resources, classes, and communities. She&apos;s reformed the infrastructure of a dance company&apos;s website which resulted in an increase to their yearly donations. Her work has also bolstered performers branding to assist them landing jobs and connections. Claire is passionate about helping to build out the voice of the individual, company, or organization through their website&apos;s presence.</p>
            <p>Claire holds multiple certifications as a fitness instructor and coach. Alongside her Bachelor of Arts in Kinesiology and Dance, she holds a Personal Training Certification from the American Council on Exercise (ACE). She is a 500-Hour Comprehensively trained Pilates Instructor and 200-Hour Registered Yoga Teacher. She is trained in somatic based fitness and dance programs as well as pedagogy for those facing the side-effects of cancer and aging. Claire is a Moving For Life Certified Instructor and Certified BodyMind Dancing Teacher. She is trained in the Bridging The Gap Movement Method™ which is a neurophysiological conditioning program. Her passion is in getting people moving so that they can love their bodies and live their lives to the fullest.</p>
            
          </div>
          <div class="about-short">
            <p>Claire Sersun is an artist, web designer, dancer, choreographer, movement instructor, and photographer. She earned a Master of Arts in Mass Communication with a focus on Web Design from the University of Florida. Claire received her Bachelor of Arts in Dance and Kinesiology from Marymount Manhattan College. Currently working as a UI/UX Designer @ <a href="https://veoci.com/" target="_blank">Veoci</a> and a Pilates Instructor @ <a href="https://www.clubpilates.com/location/danbury" target="_blank">Club Pilates Danbury</a>.</p>
          </div>
        </section>
        <section class="movement-offerings">
          <h2>Movement Offerings</h2>
          <section class="movement-offering-wrapper">
          <button @click="privatePilatesVisibility" class="private-pilates-btn"><h3>Private Pilates Sessions</h3></button>
          <button @click="groupPilatesVisibility" class="group-pilates-btn"><h3>Group Pilates Classes</h3></button>
          <button @click="movingForLifeVisibility" class="moving-for-life-btn"><h3>Moving For Life DanceExercise Classes</h3></button>
          <button @click="personalTrainingVisibility" class="personal-training-btn"><h3>Personal Training</h3></button>
          <button @click="yogaClassesVisibility" class="yoga-classes-btn"><h3>Yoga Classes</h3></button>
          <button @click="bodyMindDancingVisibility" class="bodymind-dancing-btn"><h3>BodyMind Dancing</h3></button>
          <!-- info about movement offerings -->
          <p class="private-pilates-info">Come as you are - receive personalized pilates sessions that will help you reach your goals, no matter where you're starting from. My goal is to help you be comfortable and proud of what your body can do. Whether you want to be able to pick up your grandkids when they come over or win the next 5k, you can achieve all that and more in this safe and fun environment. Sessions are offered in person at Club Pilates Danbury or online zoom sessions.</p>
          <p class="group-pilates-info">Flow with me in full-body reformer based pilates group classes. Each class combines work with the springboard, EXO-chair, TRX, bosu, and more. Classes focus on form and alignment to master pilates fundamentals and progressions. I currently teach at <a href="https://www.clubpilates.com/location/danbury">Club Pilates Danbury</a> on Tuesdays at 4:30pm / 5:30pm / 6:30pm / 7:30pm and Thursdays at 6pm / 7pm.</p>
          <div class="moving-for-life-info">
            <p>The <a href="https://www.movingforlife.org/">Moving for Life</a> DanceExercise Class was designed in 1999 to deal with the effects of cancer treatment: fatigue, weakness, weight gain, depression, lymphedema and the diminished movement range around the shoulder girdle and center of weight in the pelvis. This class was developed first for women in breast cancer treatment, but over the past 20 years has been developed to be beneficial for older adults and people of any age dealing with the effects of cancer. It is a training to encourage women to actively participate in their healing process in a group setting. It is empowering - teaching self-help. The movement training encourages each participant to find trust and respect in her body and in herself as a whole person. Methods used in class are supported by research that confirms engagement in therapeutic dance improves quality of life, speeds up recovery time, enhances survivorship, and reduces the chances of recurrence. It is fun, scientifically sound, and endorsed by a panel of award-winning doctors.</p>
            <p>I currently teach at the YMCA Greenknoll Branch in CT on Fridays at 12:30pm.</p>
          </div>
          <p class="personal-training-info">Come as you are - receive personalized programs that will help you reach your goals, no matter where you're starting from. My goal is to help you be comfortable and proud of what your body can do. Whether you want to be able to pick up your grandkids when they come over or win the next 5k, you can achieve all that and more in this safe and fun environment. We can work in your home gym, at the Y, online, or in the park. We can progress to your goals wherever we may train. Not sure what your goals may be? Let's chat!</p>
          <p class="yoga-classes-info">Connect both mind and body through breathe and movement. Classes can be taught to provide a way to slow down the mind and body in prep for the end of the day. I also offer power vinyasa flows to provide more of a challenge and reinvigorate you for the day. Every class starts and ends with a brief meditation to center our bodies in preparation for class and for leaving the mat. I am trained in Vinyasa and Hatha techniques, so many of my classes combine these processes.</p>
          <p class="yoga-classes-info">I am currently only accepting new corporate clients at the time.</p>
          <p class="bodymind-dancing-info">BodyMind Dancing™ is a unique synthesis of some of the finest forms of somatic education: the language of human movement - Laban Movement Analysis and Bartenieff Fundamentals which teach movement efficiency and Body-Mind Centering® which helps to bring consciousness to all parts of the body. As a whole, BodyMind Dancing™ is an anatomically informed dance experience that integrates technical skill building exercises with improvisation. Each student has an experience that both invites introspection and awareness of self while meeting the best practices in fitness.</p>
          </section>
        </section>
        <section class="exhibitions-wrapper">
          <h2 class="exhibitions-title">Exhibitions</h2>
          <ol class="exhibitions-content-wrapper">
            <li class="exhibitions-year">
              <p class="exhibitions-year-title">2021</p>
              <ol class="exhibitions-year-list">
                <li class="exhibitions-year-list-item">
                  <p>Life in the Pandemic Group Show</p>
                  <p><a href="https://davisortongallery.com/2021-exhibitions/" target="_blank">Davis Orton Gallery</a></p>
                </li>
                </ol>
            </li>
            <li class="exhibitions-year">
              <p class="exhibitions-year-title">2020</p>
              <ol class="exhibitions-year-list">
                <li class="exhibitions-year-list-item">
                  <p>The Performer</p>
                  <p><a href="https://www.loosenart.com/blogs/magazine/the-performer?fbclid=IwAR2U3sMY12HhSnXjptbmQURf6n7m0PufecDb9K0BYX93MUqHfilxYNKy_DE" target="_blank">LoosenArt</a></p>
                </li>
                <li class="exhibitions-year-list-item">
                  <p>Shadow Proximity</p>
                  <p>The Hewitt Gallery of Art</p>
                </li>
                </ol>
            </li>
            <li class="exhibitions-year">
              <p class="exhibitions-year-title">2019</p>
              <ol class="exhibitions-year-list">
                <li class="exhibitions-year-list-item">
                  <p>Complementary Colors</p>
                  <p>The Hewitt Gallery of Art</p>
                </li>
                </ol>
            </li>
          </ol>
        </section>
        <section class="publications-wrapper">
          <h2 class="publications-title">Publications</h2>
          <ol class="publications-content-wrapper">
            <li class="publications-year">
              <p class="publications-year-title">2019</p>
              <ol class="publications-year-list">
                <li class="publications-year-list-item">
                  <p>Elegant Magazine</p>
                  <p><a href="https://www.magcloud.com/browse/issue/1660965" target="_blank">Beauty #2</a></p>
                </li>
                <li class="publications-year-list-item">
                  <p>Iridescent Women</p>
                  <p><a href="https://iridescentwomen.com/2018/09/11/you-were-not-created-for-photoshop/" target="_blank">You Were Not Created For Photoshop</a></p>
                </li>
                <li class="press-year-list-item">
                  <p>Masthead Magazine</p>
                  <p><a href="https://mastheadmagazine.com/thingswelove/darner-socks/" target="_blank">Darner Socks</a></p>
                </li>
              </ol>
            </li>
            <li class="publications-year">
              <p class="publications-year-title">2015</p>
              <ol class="publications-year-list">
                <li class="publications-year-list-item">
                  <p>LADYGUNN</p>
                  <p><a href="https://www.ladygunn.com/fashion-style/ode-to-the-summer-wonderland/" target="_blank">ODE TO THE SUMMER WONDERLAND</a></p>
                </li>
              </ol>
            </li>
            </ol>
        </section>
        <section class="awards-wrapper">
          <h2 class="awards-title">Awards</h2>
          <ol class="awards-content-wrapper">
            <li class="awards-year">
              <p class="awards-year-title">2022</p>
              <ol class="awards-year-list">
                <li class="awards-year-list-item">
                  <p>Oz Indie Film Festival</p>
                  <p>Honorable Meniton</p>
                </li>
              </ol>
            </li>
            <li class="awards-year">
              <p class="awards-year-title">2021</p>
              <ol class="awards-year-list">
                <li class="awards-year-list-item">
                  <p>Athens International Monthly Art Film Festival</p>
                  <p>Honorable Mention</p>
                </li>
                <li class="awards-year-list-item">
                  <p>Berlin Indie Film Festival</p>
                  <p><a href="https://berlinindiefilmfestival.com/winners-2021/winners-2021-february/" target="_blank">Winner</a></p>
                </li>
                <li class="awards-year-list-item">
                  <p>FROSTBITE International Indie Fest</p>
                  <p>Finalist</p>
                </li>
                <li class="awards-year-list-item">
                  <p>Munich New Wave Short Film Festival</p>
                  <p><a href="https://www.newwavefilmfestival.com/february-winners" target="_blank">Winner</a></p>
                </li>
              </ol>
            </li>
            </ol>
        </section>
        <section class="press-wrapper">
          <h2 class="press-title">Press</h2>
          <ol class="press-content-wrapper">
            <li class="press-year">
              <p class="press-year-title">2020</p>
              <ol class="press-year-list">
                <li class="press-year-list-item">
                  <p>ABC El Paso</p>
                  <p><a href="https://kvia.com/entertainment/2020/12/18/el-paso-modern-dance-company-to-stage-virtual-global-performance-online/" target="_blank">El Paso modern dance company to stage virtual, global performance online</a></p>
                </li>
                <li class="press-year-list-item">
                  <p>Broadway World</p>
                  <p><a href="https://www.broadwayworld.com/bwwdance/article/VIDEO-DirectorChoreographer-Lorna-Ventura-Presents-Outside-In-Quarantine-Session-Music-Video-20200609" target="_blank">Broadway Cast Members and Graduates 2020 Dance, Soar, and Exhale in the New Vintage Trouble Video</a></p>
                </li>
                </ol>
            </li>
            <li class="press-year">
              <p class="press-year-title">2019</p>
              <ol class="press-year-list">
                <li class="press-year-list-item">
                  <p>The Monitor</p>
                  <p><a href="https://themonitormmc.com/1113/profiles/shaelyn-mcfadden-rose-sheridan/" target="_blank">Off-Campus Art Collective</a></p>
                </li>
                <li class="press-year-list-item">
                  <p>The Hub</p>
                  <p><a href="https://thehhub.com/2019/06/06/metonthehub-weekly-contest-6-6-19/" target="_blank">#METONTHEHUB Weekly Contest</a></p>
                </li>
              </ol>
            </li>
            <li class="press-year">
              <p class="press-year-title">2018</p>
              <ol class="press-year-list">
                <li class="press-year-list-item">
                  <p>Sonic Yoga</p>
                  <p><a href="https://sonicyoga.com/yogi-of-the-month-claire-sersun/" target="_blank">Yogi of the Month</a></p>
                </li>
                </ol>
            </li>
            <li class="press-year">
              <p class="press-year-title">2015</p>
              <ol class="press-year-list">
                <li class="press-year-list-item">
                  <p>Promonews</p>
                  <p><a href="https://www.promonews.tv/videos/2015/06/29/ruby-rabbitfoot-bad-i-am-natalie-neal/35148" target="_blank">Ruby The Rabbitfoot 'As Bad As I Am' by Natalie Neal</a></p>
                </li>
                </ol>
            </li>
          </ol>
        </section>
        <section class="contact-wrapper">
          <h2>Contact</h2>
          <div class="contact-info-wrapper">
            <p class="contact-info">If you are interested in my work feel free to contact me at <button @click="copyToClipboard" class="email-to-copy"><p>claire.sersun[at]gmail.com</p></button></p>
            <div class="contact-info-link-wrapper">
            <a class="contact-info-link" href="https://github.com/clairesersun" target="_blank"><img src="../assets/github-mark-white.svg"></a>
            <a class="contact-info-link" href="https://www.linkedin.com/in/clairesersun/" target="_blank"><img src="../assets/In-White-128@2x.png"></a>
            <a class="contact-info-link" href="https://www.instagram.com/clairesersun/" target="_blank"><img src="../assets/Instagram_Glyph_White.svg"></a>
            </div>
          </div>
        </section>
      </div>
    </div>
</template>

<script>
export default {
  name: 'AboutPopUp',
  props: {
    showAbout: Boolean
  },
  methods: {
    longBioVisibility() {
      // console.log('long bio clicked')
      // all bio classes
      const longBio = document.querySelector('.about-long')
      const longBtn = document.querySelector('.about-long-btn')
      const shortBio = document.querySelector('.about-short')
      const shortBtn = document.querySelector('.about-short-btn')
      // turn on long bio
      longBio.style.display = 'block'
      longBtn.style.backgroundColor = 'var(--color-border)'
      // all the other visibilities turned off
      shortBio.style.display = 'none'
      shortBtn.style.backgroundColor = 'transparent'
    },
    shortBioVisibility() {
      // console.log('short bio clicked')
      // all bio classes
      const longBio = document.querySelector('.about-long')
      const longBtn = document.querySelector('.about-long-btn')
      const shortBio = document.querySelector('.about-short')
      const shortBtn = document.querySelector('.about-short-btn')
      // turn on short bio
      shortBio.style.display = 'block'
      shortBtn.style.backgroundColor = 'var(--color-border)'
      // all the other visibilities turned off
      longBio.style.display = 'none'
      longBtn.style.backgroundColor = 'transparent'
    },
    copyToClipboard() {
      // console.log('copy to keyboard clicked')
      const copyEmail = "claire.sersun@gmail.com"
      // copy email to clipboard
      navigator.clipboard.writeText(copyEmail).then(function() {
        alert('Copied email!')
      })
    },
    privatePilatesVisibility() {
      // console.log('private pilates clicked')
      // all info classes
      const privatePilatesInfo = document.querySelector('.private-pilates-info')
      const privatePilatesBtn = document.querySelector('.private-pilates-btn')
      const groupPilatesInfo = document.querySelector('.group-pilates-info')
      const groupPilatesBtn = document.querySelector('.group-pilates-btn')
      const movingForLifeInfo = document.querySelector('.moving-for-life-info')
      const movingForLifeBtn = document.querySelector('.moving-for-life-btn')
      const personalTrainingInfo = document.querySelector('.personal-training-info')
      const personalTrainingBtn = document.querySelector('.personal-training-btn')
      const yogaClassesInfo = document.querySelector('.yoga-classes-info')
      const yogaClassesBtn = document.querySelector('.yoga-classes-btn')
      const bodyMindDancingInfo = document.querySelector('.bodymind-dancing-info')
      const bodyMindDancingBtn = document.querySelector('.bodymind-dancing-btn')
      if (privatePilatesInfo.style.display === 'block') {
        // turn off private pilates info
      privatePilatesInfo.style.display = 'none'
      privatePilatesBtn.style.backgroundColor = 'transparent'
      } else {
        // turn on private pilates info
      privatePilatesInfo.style.display = 'block'
      privatePilatesBtn.style.backgroundColor = 'var(--color-border)'
      }
      // all the other visibilities turned off
      groupPilatesInfo.style.display = 'none'
      groupPilatesBtn.style.backgroundColor = 'transparent'
      movingForLifeInfo.style.display = 'none'
      movingForLifeBtn.style.backgroundColor = 'transparent'
      personalTrainingInfo.style.display = 'none'
      personalTrainingBtn.style.backgroundColor = 'transparent'
      yogaClassesInfo.style.display = 'none'
      yogaClassesBtn.style.backgroundColor = 'transparent'
      bodyMindDancingInfo.style.display = 'none'
      bodyMindDancingBtn.style.backgroundColor = 'transparent'
      
    },
    groupPilatesVisibility() {
      // console.log('group pilates clicked')
      // all info classes
      const privatePilatesInfo = document.querySelector('.private-pilates-info')
      const privatePilatesBtn = document.querySelector('.private-pilates-btn')
      const groupPilatesInfo = document.querySelector('.group-pilates-info')
      const groupPilatesBtn = document.querySelector('.group-pilates-btn')
      const movingForLifeInfo = document.querySelector('.moving-for-life-info')
      const movingForLifeBtn = document.querySelector('.moving-for-life-btn')
      const personalTrainingInfo = document.querySelector('.personal-training-info')
      const personalTrainingBtn = document.querySelector('.personal-training-btn')
      const yogaClassesInfo = document.querySelector('.yoga-classes-info')
      const yogaClassesBtn = document.querySelector('.yoga-classes-btn')
      const bodyMindDancingInfo = document.querySelector('.bodymind-dancing-info') 
      const bodyMindDancingBtn = document.querySelector('.bodymind-dancing-btn')     
      if (groupPilatesInfo.style.display === 'block') {
        // turn off group pilates info
      groupPilatesInfo.style.display = 'none'
      groupPilatesBtn.style.backgroundColor = 'transparent'
      } else {
        // turn on group pilates info
      groupPilatesInfo.style.display = 'block'
      groupPilatesBtn.style.backgroundColor = 'var(--color-border)'
    }
      // all the other visibilities turned off
      privatePilatesInfo.style.display = 'none'
      privatePilatesBtn.style.backgroundColor = 'transparent'
      movingForLifeInfo.style.display = 'none'
      movingForLifeBtn.style.backgroundColor = 'transparent'
      personalTrainingInfo.style.display = 'none'
      personalTrainingBtn.style.backgroundColor = 'transparent'
      yogaClassesInfo.style.display = 'none'
      yogaClassesBtn.style.backgroundColor = 'transparent'
      bodyMindDancingInfo.style.display = 'none'
      bodyMindDancingBtn.style.backgroundColor = 'transparent'
    },
    movingForLifeVisibility() {
      // console.log('moving for life clicked')
      // all info classes
      const privatePilatesInfo = document.querySelector('.private-pilates-info')
      const privatePilatesBtn = document.querySelector('.private-pilates-btn')
      const groupPilatesInfo = document.querySelector('.group-pilates-info')
      const groupPilatesBtn = document.querySelector('.group-pilates-btn')
      const movingForLifeInfo = document.querySelector('.moving-for-life-info')
      const movingForLifeBtn = document.querySelector('.moving-for-life-btn')
      const personalTrainingInfo = document.querySelector('.personal-training-info')
      const personalTrainingBtn = document.querySelector('.personal-training-btn')
      const yogaClassesInfo = document.querySelector('.yoga-classes-info')
      const yogaClassesBtn = document.querySelector('.yoga-classes-btn')
      const bodyMindDancingInfo = document.querySelector('.bodymind-dancing-info')
      const bodyMindDancingBtn = document.querySelector('.bodymind-dancing-btn')
      if (movingForLifeInfo.style.display === 'block') {
        // turn off moving for life info
      movingForLifeInfo.style.display = 'none'
      movingForLifeBtn.style.backgroundColor = 'transparent'
      } else {
        // turn on moving for life info
      movingForLifeInfo.style.display = 'block'
      movingForLifeBtn.style.backgroundColor = 'var(--color-border)'
      }
      // all the other visibilities turned off
      privatePilatesInfo.style.display = 'none'
      privatePilatesBtn.style.backgroundColor = 'transparent'
      groupPilatesInfo.style.display = 'none'
      groupPilatesBtn.style.backgroundColor = 'transparent'
      personalTrainingInfo.style.display = 'none'
      personalTrainingBtn.style.backgroundColor = 'transparent'
      yogaClassesInfo.style.display = 'none'
      yogaClassesBtn.style.backgroundColor = 'transparent'
      bodyMindDancingInfo.style.display = 'none'
      bodyMindDancingBtn.style.backgroundColor = 'transparent'
    },
    personalTrainingVisibility() {
      // console.log('personal training clicked')
      // all info classes
      const privatePilatesInfo = document.querySelector('.private-pilates-info')
      const privatePilatesBtn = document.querySelector('.private-pilates-btn')
      const groupPilatesInfo = document.querySelector('.group-pilates-info')
      const groupPilatesBtn = document.querySelector('.group-pilates-btn')
      const movingForLifeInfo = document.querySelector('.moving-for-life-info')
      const movingForLifeBtn = document.querySelector('.moving-for-life-btn')
      const personalTrainingInfo = document.querySelector('.personal-training-info')
      const personalTrainingBtn = document.querySelector('.personal-training-btn')
      const yogaClassesInfo = document.querySelector('.yoga-classes-info')
      const yogaClassesBtn = document.querySelector('.yoga-classes-btn')
      const bodyMindDancingInfo = document.querySelector('.bodymind-dancing-info')
      const bodyMindDancingBtn = document.querySelector('.bodymind-dancing-btn')
      if (personalTrainingInfo.style.display === 'block') {
        // turn off personal training info
      personalTrainingInfo.style.display = 'none'
      personalTrainingBtn.style.backgroundColor = 'transparent'
      } else {
        // turn on personal training info
      personalTrainingInfo.style.display = 'block'
      personalTrainingBtn.style.backgroundColor = 'var(--color-border)'
      }
      // all the other visibilities turned off
      privatePilatesInfo.style.display = 'none'
      privatePilatesBtn.style.backgroundColor = 'transparent'
      groupPilatesInfo.style.display = 'none'
      groupPilatesBtn.style.backgroundColor = 'transparent'
      movingForLifeInfo.style.display = 'none'
      movingForLifeBtn.style.backgroundColor = 'transparent'
      yogaClassesInfo.style.display = 'none'
      yogaClassesBtn.style.backgroundColor = 'transparent'
      bodyMindDancingInfo.style.display = 'none'
      bodyMindDancingBtn.style.backgroundColor = 'transparent'
    },
    yogaClassesVisibility() {
      // console.log('yoga classes clicked')
      // all info classes
      const privatePilatesInfo = document.querySelector('.private-pilates-info')
      const privatePilatesBtn = document.querySelector('.private-pilates-btn')
      const groupPilatesInfo = document.querySelector('.group-pilates-info')
      const groupPilatesBtn = document.querySelector('.group-pilates-btn')
      const movingForLifeInfo = document.querySelector('.moving-for-life-info')
      const movingForLifeBtn = document.querySelector('.moving-for-life-btn')
      const personalTrainingInfo = document.querySelector('.personal-training-info')
      const personalTrainingBtn = document.querySelector('.personal-training-btn')
      const yogaClassesInfo = document.querySelector('.yoga-classes-info')
      const yogaClassesBtn = document.querySelector('.yoga-classes-btn')
      const bodyMindDancingInfo = document.querySelector('.bodymind-dancing-info')
      const bodyMindDancingBtn = document.querySelector('.bodymind-dancing-btn')
      if (yogaClassesInfo.style.display === 'block') {
        // turn off yoga classes info
      yogaClassesInfo.style.display = 'none'
      yogaClassesBtn.style.backgroundColor = 'transparent'
      } else {
        // turn on yoga classes info
      yogaClassesInfo.style.display = 'block'
      yogaClassesBtn.style.backgroundColor = 'var(--color-border)'
      }
      // all the other visibilities turned off
      privatePilatesInfo.style.display = 'none'
      privatePilatesBtn.style.backgroundColor = 'transparent'
      groupPilatesInfo.style.display = 'none'
      groupPilatesBtn.style.backgroundColor = 'transparent'
      movingForLifeInfo.style.display = 'none'
      movingForLifeBtn.style.backgroundColor = 'transparent'
      personalTrainingInfo.style.display = 'none'
      personalTrainingBtn.style.backgroundColor = 'transparent'
      bodyMindDancingInfo.style.display = 'none'
      bodyMindDancingBtn.style.backgroundColor = 'transparent'
    },
    bodyMindDancingVisibility() {
      // console.log('body mind dancing clicked')
      // all info classes
      const privatePilatesInfo = document.querySelector('.private-pilates-info')
      const privatePilatesBtn = document.querySelector('.private-pilates-btn')
      const groupPilatesInfo = document.querySelector('.group-pilates-info')
      const groupPilatesBtn = document.querySelector('.group-pilates-btn')
      const movingForLifeInfo = document.querySelector('.moving-for-life-info')
      const movingForLifeBtn = document.querySelector('.moving-for-life-btn')
      const personalTrainingInfo = document.querySelector('.personal-training-info')
      const personalTrainingBtn = document.querySelector('.personal-training-btn')
      const yogaClassesInfo = document.querySelector('.yoga-classes-info')
      const yogaClassesBtn = document.querySelector('.yoga-classes-btn')
      const bodyMindDancingInfo = document.querySelector('.bodymind-dancing-info')
      const bodyMindDancingBtn = document.querySelector('.bodymind-dancing-btn')
      if (bodyMindDancingInfo.style.display === 'block') {
        // turn off bodyMind Dancing info
      bodyMindDancingInfo.style.display = 'none'
      bodyMindDancingBtn.style.backgroundColor = 'transparent'
      } else {
      // turn on bodyMind Dancing info
      bodyMindDancingInfo.style.display = 'block'
      bodyMindDancingBtn.style.backgroundColor = 'var(--color-border)'
      }
      // all the other visibilities turned off
      privatePilatesInfo.style.display = 'none'
      privatePilatesBtn.style.backgroundColor = 'transparent'
      groupPilatesInfo.style.display = 'none'
      groupPilatesBtn.style.backgroundColor = 'transparent'
      movingForLifeInfo.style.display = 'none'
      movingForLifeBtn.style.backgroundColor = 'transparent'
      personalTrainingInfo.style.display = 'none'
      personalTrainingBtn.style.backgroundColor = 'transparent'
      yogaClassesInfo.style.display = 'none'
      yogaClassesBtn.style.backgroundColor = 'transparent'
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;800&family=Proza+Libre:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap');

.modal-close-button {
  font-family: 'Proza Libre', sans-serif;
  position: fixed;
  top: 0;
  left: 82vw;
  margin-top: 4rem;
  border: none;
  background: none;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  z-index: 100;
}
.modal-wrapper {
  font-family: 'Proza Libre', sans-serif;
  position: fixed;
  left: 0;
  top: 0;
  padding: 5%;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background: #000;
  display: flex;
  flex-direction: column;
  overflow: scroll;
}

.modal-wrapper h1 {
  font-family: 'Proza Libre', sans-serif;
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

.modal-wrapper h3 {
  font-family: 'Proza Libre', sans-serif;
  font-size: 1.2rem;
}

.modal-wrapper h2 {
  font-family: 'Proza Libre', sans-serif;
  font-size: 1.2rem;
}

.modal-wrapper p {
  font-family: 'Proza Libre', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1rem;
}

.about-wrapper {
  margin-right: auto;
  margin-left: auto;
}

section {
  margin-bottom: 2rem;
  max-width: 800px;
}

/* bios */

.bio {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.bio-header-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  width: 100%;
}

.about-image {
  width: 250px;
  height: 250px;
  margin-bottom: 20px;
  margin-top: 40px;
}

.about-switch {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}

.about-switch button {
  font-family: 'Proza Libre', sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-text);
  padding: 5px 10px 5px 10px;
  margin: 0px 5px 0px 5px;
  border: none;
  cursor: pointer;
  margin-bottom: 1rem;
}

.about-switch button:hover {
  box-shadow: inset 0 0 0 2em var(--color-border);
  transition: 1s;
}

.about-long-btn {
  background-color: var(--color-border);
}

.about-medium-btn {
  background-color: transparent;
}

.about-short-btn {
  background-color: transparent;
}

.about-long {
  display: block;
  text-align: left;
  max-width: 600px;
}


.about-short {
  display: none;
  text-align: left;
  max-width: 600px;
}



/* movement info */
.private-pilates-info {
  display: none;
  max-width: 600px;
  text-align: left;
  margin-top: .75rem;
}

.group-pilates-info {
  display: none;
  max-width: 600px;
  text-align: left;
  margin-top: .75rem;
}

.moving-for-life-info {
  display: none;
  max-width: 600px;
  text-align: left;
  margin-top: .75rem;
}

.personal-training-info {
  display: none;
  max-width: 600px;
  text-align: left;
  margin-top: .75rem;
}

.yoga-classes-info {
  display: none;
  max-width: 600px;
  text-align: left;
  margin-top: .75rem;
}

.bodymind-dancing-info {
  display: none;
  max-width: 600px;
  text-align: left;
  margin-top: .75rem;
}

/* movement offering buttons */

.movement-offerings {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.movement-offerings h2 {
  align-self: flex-start;
  margin-bottom: .75rem;
}
.movement-offering-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 600px;
}
.movement-offering-wrapper button {
  font-family: 'Proza Libre', sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-text);
  padding: 5px 10px 5px 10px;
  margin: 0px 5px 0px 5px;
  background: none;
  border: none;
  cursor: pointer;
}

.movement-offering-wrapper button:hover {
  box-shadow: inset 0 0 0 2em var(--color-border);
  transition: 1s;
}

/* exhibitions */
.exhibitions-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.exhibitions-wrapper .exhibitions-title {
  align-self: flex-start;
  margin-bottom: .75rem;
}

.exhibitions-content-wrapper {
  list-style: none;
  padding-inline-start: 0px;
  width: 100%;
  max-width: 600px;
}

.exhibitions-year {
  font-family: 'Proza Libre', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  list-style: none;
  text-align: left;
}

.exhibitions-year-title {
  border-bottom: 1.75px solid var(--color-text);
}

.exhibitions-year-list {
  font-family: 'Proza Libre', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  list-style: none;
  text-align: left;
  padding-inline-start: 0px;
  margin-block-start: 0px;
    margin-block-end: 0px;
}

.exhibitions-year-list-item a {
  color: var(--color-text);
}

.exhibitions-year-list-item {
  font-family: 'Proza Libre', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  list-style: none;
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.exhibitions-year-list-item p:first-child {
  width: 100%;
}

.exhibitions-year-list-item p:last-child {
  width: 50%;
  text-align: right;
}

/* publications */
.publications-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.publications-wrapper .publications-title {
  align-self: flex-start;
  margin-bottom: .75rem;
}

.publications-content-wrapper {
  list-style: none;
  padding-inline-start: 0px;
  width: 100%;
  max-width: 600px;
}

.publications-year {
  font-family: 'Proza Libre', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  list-style: none;
  text-align: left;
}

.publications-year-title {
  border-bottom: 1.75px solid var(--color-text);
}

.publications-year-list {
  font-family: 'Proza Libre', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  list-style: none;
  text-align: left;
  padding-inline-start: 0px;
  margin-block-start: 0px;
    margin-block-end: 0px;
}

.publications-year-list-item {
  font-family: 'Proza Libre', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  list-style: none;
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.publications-year-list-item a {
  color: var(--color-text);
}

.publications-year-list-item p:first-child {
  width: 100%;
}

.publications-year-list-item p:last-child {
  width: 50%;
  text-align: right;
}

/* awards */
.awards-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.awards-wrapper .awards-title {
  align-self: flex-start;
  margin-bottom: .75rem;
}

.awards-content-wrapper {
  list-style: none;
  padding-inline-start: 0px;
  width: 100%;
  max-width: 600px;
}

.awards-year {
  font-family: 'Proza Libre', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  list-style: none;
  text-align: left;
}

.awards-year-title {
  border-bottom: 1.75px solid var(--color-text);
}

.awards-year-list {
  font-family: 'Proza Libre', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  list-style: none;
  text-align: left;
  padding-inline-start: 0px;
  margin-block-start: 0px;
    margin-block-end: 0px;
}

.awards-year-list-item {
  font-family: 'Proza Libre', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  list-style: none;
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.awards-year-list-item a {
  color: var(--color-text);
}

.awards-year-list-item p:first-child {
  width: 100%;
}

.awards-year-list-item p:last-child {
  width: 50%;
  text-align: right;
}


/* press */
.press-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.press-wrapper .press-title {
  align-self: flex-start;
  margin-bottom: .75rem;
}

.press-content-wrapper {
  list-style: none;
  padding-inline-start: 0px;
  width: 100%;
  max-width: 600px;
}

.press-year {
  font-family: 'Proza Libre', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  list-style: none;
  text-align: left;
}

.press-year-title {
  border-bottom: 1.75px solid var(--color-text);
}

.press-year-list {
  font-family: 'Proza Libre', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  list-style: none;
  text-align: left;
  padding-inline-start: 0px;
  margin-block-start: 0px;
    margin-block-end: 0px;
}

.press-year-list-item a {
  color: var(--color-text);
}

.press-year-list-item {
  font-family: 'Proza Libre', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  list-style: none;
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.press-year-list-item p:first-child {
  width: 100%;
}

.press-year-list-item p:last-child {
  width: 50%;
  text-align: right;
}

/* contact info */
.contact-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.contact-wrapper h2 {
  align-self: flex-start;
  margin-bottom: .75rem;
}


.contact-info-wrapper .contact-info {
  font-family: 'Proza Libre', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  display: block;
}

.contact-info-wrapper .email-to-copy {
  font-family: 'Proza Libre', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text);
  padding: 5px 10px 5px 10px;
  margin: 0px 5px 0px 5px;
  background: none;
  border: none;
  cursor: pointer;
}

.contact-info-wrapper .email-to-copy p {
  margin: 0;
}

.contact-info-wrapper .email-to-copy:hover {
  box-shadow: inset 0 0 0 2em var(--color-border);
  transition: 1s;
}
.contact-info {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.contact-info-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.contact-info-link-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.contact-info-link {
  margin: 0px 5px 0px 5px;
}

.contact-info-link img {
  width: 30px;
  height: 30px;
  margin: 0px 5px 0px 5px;
}

@media screen and (min-width: 576px) {
  .modal-close-button {
    left: 90vw;
  }
}

@media screen and (min-width: 768px) {
  .about-image {
    margin-top: 0;
    }
}

/* @media screen and (min-width: 992px) {
} */

@media screen and (min-width: 1200px) {
/* biggest */
.modal-close-button {
    left: 93vw;
  }

  .about-image {
    margin-top: 10px;
  }
}

</style>
