<script setup>
import ProjectCover from '../components/ProjectCover.vue'
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { animate, scroll } from "motion";


const projectsWeb = ref([
  // { id: 1, title: 'timeslot', image: 'src/assets/timeslot/cover.png', link: '/projects/timeslot', role: 'Web Designer' },
  { id: 2, title: 'VALLETO', image: 'src/assets/valleto/cover.jpeg', link: '/projects/valleto', role: 'Web Designer' },
  { id: 3, title: 'Moving For Life', image: 'src/assets/movingforlife/cover.png', link: '/projects/movingforlife', role: 'Web Designer' }
])

const projectsFilm = ref([
  { id: 4, title: 'PRESEVERE', image: 'src/assets/presevere/cover.jpeg', link: '/projects/presevere', role: 'Videographer/Editor'},
  { id: 5, title: 'Rise Up', image: 'src/assets/riseup/cover.jpeg', link: '/projects/riseup', role: 'Videographer/Editor'},
  { id: 6, title: 'Reflect: Re-move', image: 'src/assets/reflectremove/cover.jpeg', link: '/projects/reflectremove', role: 'Videographer/Editor'},
  { id: 7, title: 'my boy', image: 'src/assets/myboy/cover.png', link: '/projects/myboy', role: 'Videographer/Editor'}
])

const projectsDance = ref([
  { id: 8, title: 'Dance', image: 'src/assets/dance/cover.png', link: '/projects/dance', role: 'Dancer'}
])

const projectsModel = ref([
  { id: 9, title: 'Modeling', image: 'src/assets/modeling/cover.jpeg', link: '/projects/modeling', role: 'Model'}
])

const projectsChoreography = ref([
  { id: 10, title: 'Rain', image: 'src/assets/rain/cover.png', link: '/projects/rain', role: 'Choreographer'},
  { id: 11, title: 'xxii: Twenty-Two', image: 'src/assets/xxii/cover.png', link: '/projects/xxii', role: 'Choreographer'},
  { id: 12, title: 'Five Hours', image: 'src/assets/fivehours/cover.png', link: '/projects/fivehours', role: 'Choreographer'},
  { id: 13, title: '.1 & .2', image: 'src/assets/oneandtwo/cover.png', link: '/projects/oneandtwo', role: 'Choreographer'},
  { id: 14, title: 'Open Your Eyes', image: 'src/assets/openyoureyes/cover.png', link: '/projects/openyoureyes', role: 'Choreographer'},
  { id: 15, title: 'Portrait of a Dancer', image: 'src/assets/portraitof/cover.png', link: '/projects/portraitof', role: 'Choreographer'}
])

const noProjects = ref([
  { id: 16, title: 'No Filter Selected', image: 'src/assets/none/cover.jpeg', link: '/', role: ''}
])

const projectsPhotography = ref([
  { id: 17, title: 'Photography', image: 'src/assets/photography/cover.jpeg', link: '/clairesersunphotography', role: 'Photographer'},
  { id: 18, title: 'HOME', image: 'src/assets/home/Sersun__image-6 copy.jpg', link: '/projects/home', role: 'Photographer'},
  { id: 19, title: 'Museum Mile', image: 'src/assets/museum/museummile3.jpeg', link: '/projects/museummile', role: 'Photographer'},
  { id: 20, title: 'Illusion', image: 'src/assets/illusion/illusion5.jpeg', link: '/projects/illusion', role: 'Photographer'},
])

const filteredProjects = ref([])

const allChecked = function () {
    filteredProjects.value = filteredProjects.value.concat(projectsWeb.value)
    filteredProjects.value = filteredProjects.value.concat(projectsFilm.value)
    filteredProjects.value = filteredProjects.value.concat(projectsDance.value)
    filteredProjects.value = filteredProjects.value.concat(projectsModel.value)
    filteredProjects.value = filteredProjects.value.concat(projectsChoreography.value)
    filteredProjects.value = filteredProjects.value.concat(projectsPhotography.value)
    filteredProjects.value = filteredProjects.value.filter(project => !noProjects.value.includes(project))
  }
  
// when page is loaded, show all projects
allChecked()
console.log("page has loaded", filteredProjects.value, filteredProjects.value.length)

const scrollBehavior = function() {
    window.scrollTo(0,0);
}

const styleHeight = function () {
    const cover = document.querySelector(".cover");
     cover.style.height = `${filteredProjects.value.length - 1}00vw`
    //  isnt this width not height??? no. but I want it to be width. Maybe I need to change how this is set up.
  }

async function checkbox() {
  const checkboxVideo = document.querySelector('input[id="Videographer/Editor"]');
  const checkboxWeb = document.querySelector('input[id="Web Design"]');
  const checkboxDance = document.querySelector('input[id="Dancer"]');
  const checkboxModel = document.querySelector('input[id="Model"]');
  const checkboxChoreography = document.querySelector('input[id="Choreographer"]');
  const checkboxPhotography = document.querySelector('input[id="Photographer"]');
  const checkboxAll = document.querySelector('input[id="All"]');
  checkboxVideo.checked = true
  checkboxWeb.checked = true
  checkboxDance.checked = true
  checkboxModel.checked = true
  checkboxChoreography.checked = true
  checkboxPhotography.checked = true
  checkboxAll.checked = true
  styleHeight()

  // event listeners
  checkboxVideo.addEventListener('change', function () {
    if (this.checked) {
      console.log('Checkbox is checked..');
      filteredProjects.value = filteredProjects.value.concat(projectsFilm.value)
      filteredProjects.value = filteredProjects.value.filter(project => !noProjects.value.includes(project))
      if (checkboxChoreography.checked & checkboxWeb.checked & checkboxDance.checked & checkboxModel.checked & checkboxPhotography.checked) {
        console.log("all checked")
        checkboxAll.checked = true
        styleHeight()
      }
      styleHeight()
      console.log(filteredProjects.value)
    } else if (!(checkboxVideo.checked & checkboxWeb.checked & checkboxDance.checked & checkboxModel.checked & checkboxChoreography.checked & checkboxPhotography.checked)) {
    filteredProjects.value = filteredProjects.value.concat(noProjects.value)
    console.log('Checkbox is not checked..');
    checkboxAll.checked = false
    filteredProjects.value = filteredProjects.value.filter(project => !projectsFilm.value.includes(project))
    scrollBehavior()
    styleHeight()
    console.log(filteredProjects.value)
  } else {
      console.log('Checkbox is not checked..');
      checkboxAll.checked = false
      filteredProjects.value = filteredProjects.value.filter(project => !projectsFilm.value.includes(project))
      styleHeight()
      scrollBehavior()
      console.log(filteredProjects.value)

    }
  });
  checkboxWeb.addEventListener('change', function () {
    if (this.checked) {
      console.log('Checkbox is checked..');
      filteredProjects.value = filteredProjects.value.concat(projectsWeb.value)
      filteredProjects.value = filteredProjects.value.filter(project => !noProjects.value.includes(project))
      if (checkboxChoreography.checked & checkboxVideo.checked & checkboxDance.checked & checkboxModel.checked & checkboxPhotography.checked) {
        checkboxAll.checked = true
        console.log("all checked")
        styleHeight()
      }
      styleHeight()
      console.log(filteredProjects.value)
    } else {
      console.log('Checkbox is not checked..');
      checkboxAll.checked = false
      filteredProjects.value = filteredProjects.value.filter(project => !projectsWeb.value.includes(project))
      styleHeight()
      scrollBehavior()
      console.log(filteredProjects.value)
    }
  });
  checkboxDance.addEventListener('change', function () {
    if (this.checked) {
      console.log('Checkbox is checked..');
      filteredProjects.value = filteredProjects.value.concat(projectsDance.value)
      filteredProjects.value = filteredProjects.value.filter(project => !noProjects.value.includes(project))
      if (checkboxChoreography.checked & checkboxVideo.checked & checkboxWeb.checked & checkboxModel.checked & checkboxPhotography.checked) {
        checkboxAll.checked = true
        console.log("all checked")
        styleHeight()
      }
      styleHeight()
      console.log(filteredProjects.value)
    } else {
      console.log('Checkbox is not checked..');
      checkboxAll.checked = false
      filteredProjects.value = filteredProjects.value.filter(project => !projectsDance.value.includes(project))
      scrollBehavior()
      styleHeight()
      console.log(filteredProjects.value)
    }
  });
  checkboxModel.addEventListener('change', function () {
    if (this.checked) {
      console.log('Checkbox is checked..');
      filteredProjects.value = filteredProjects.value.concat(projectsModel.value)
      filteredProjects.value = filteredProjects.value.filter(project => !noProjects.value.includes(project))
      if (checkboxChoreography.checked & checkboxVideo.checked & checkboxWeb.checked & checkboxDance.checked & checkboxPhotography.checked) {
        checkboxAll.checked = true
        console.log("all checked")
        styleHeight()
      }
      styleHeight()
      console.log(filteredProjects.value)
    } else {
      console.log('Checkbox is not checked..');
      checkboxAll.checked = false
      filteredProjects.value = filteredProjects.value.filter(project => !projectsModel.value.includes(project))
      scrollBehavior()
      styleHeight()
      console.log(filteredProjects.value)

    }
  });
  checkboxChoreography.addEventListener('change', function () {
    if (this.checked) {
      console.log('Checkbox is checked..');
      filteredProjects.value = filteredProjects.value.filter(project => !noProjects.value.includes(project))
      filteredProjects.value = filteredProjects.value.concat(projectsChoreography.value)
      if (checkboxVideo.checked & checkboxWeb.checked & checkboxDance.checked & checkboxModel.checked & checkboxPhotography.checked) {
        checkboxAll.checked = true
        console.log("all checked")
        styleHeight()
      }
      styleHeight()
      console.log(filteredProjects.value)
    } else {
      console.log('Checkbox is not checked..');
      checkboxAll.checked = false
      scrollBehavior()
      filteredProjects.value = filteredProjects.value.filter(project => !projectsChoreography.value.includes(project))
      styleHeight()
      console.log(filteredProjects.value)

    }
  });
  checkboxPhotography.addEventListener('change', function () {
    if (this.checked) {
      console.log('Checkbox is checked..');
      filteredProjects.value = filteredProjects.value.filter(project => !noProjects.value.includes(project))
      filteredProjects.value = filteredProjects.value.concat(projectsPhotography.value)
      if (checkboxVideo.checked & checkboxWeb.checked & checkboxDance.checked & checkboxModel.checked & checkboxChoreography.checked) {
        checkboxAll.checked = true
        console.log("all checked")
        styleHeight()
      }
      styleHeight()
      console.log(filteredProjects.value)
    } else {
      console.log('Checkbox is not checked..');
      checkboxAll.checked = false
      scrollBehavior()
      filteredProjects.value = filteredProjects.value.filter(project => !projectsPhotography.value.includes(project))
      styleHeight()
      console.log(filteredProjects.value)

    }
  });
  checkboxAll.addEventListener('change', function () {
    if (this.checked) {
      checkboxVideo.checked = true
      checkboxWeb.checked = true
      checkboxDance.checked = true
      checkboxModel.checked = true
      checkboxChoreography.checked = true
      checkboxPhotography.checked = true
      console.log("all checked!!!!!", checkboxVideo.checked, checkboxWeb.checked, checkboxDance.checked, checkboxModel.checked, checkboxChoreography.checked, checkboxPhotography.checked)
      filteredProjects.value = filteredProjects.value.filter(project => !noProjects.value.includes(project))
      allChecked()
      styleHeight()
      console.log(filteredProjects.value)
      //if all checked, then show all
      // if just one of the filters are not checked, then uncheck this one
    } else {
      console.log('Checkbox is not checked..');
      scrollBehavior()
      checkboxVideo.checked = false
      checkboxWeb.checked = false
      checkboxDance.checked = false
      checkboxModel.checked = false
      checkboxChoreography.checked = false
      checkboxPhotography.checked = false
      filteredProjects.value = filteredProjects.value.filter(project => !projectsWeb.value.includes(project))
      filteredProjects.value = filteredProjects.value.filter(project => !projectsFilm.value.includes(project))
      filteredProjects.value = filteredProjects.value.filter(project => !projectsDance.value.includes(project))
      filteredProjects.value = filteredProjects.value.filter(project => !projectsModel.value.includes(project))
      filteredProjects.value = filteredProjects.value.filter(project => !projectsChoreography.value.includes(project))
      filteredProjects.value = filteredProjects.value.filter(project => !projectsPhotography.value.includes(project))
      filteredProjects.value = filteredProjects.value.concat(noProjects.value)
      styleHeight()
      console.log(filteredProjects.value)

    }
  })
  

}



const observer = new IntersectionObserver((entries, observer) => {
  console.log(entries)
});



onMounted(() => {
  const items = document.querySelectorAll(".item");
  const target = document.querySelector(".cover");
  const contents = document.querySelector(".cover-contents");
  const progressBar = document.querySelector(".progress-bar");
  const progress = document.querySelector(".progress");
  observer.observe(target, items, contents, progressBar, progress);
  scroll(
      animate(contents, {
        transform: ["none", `translateX(-${filteredProjects.value.length - 1}00vw)`]
      }),
      { 
        target: target },
    );
// change the number of vw to the number of projects as checkboxes are changed
    watch(filteredProjects, () => {
    console.log("filteredProjects has changed", filteredProjects.value, filteredProjects.value.length)
    scroll(
      animate(contents, {
        transform: ["none", `translateX(-${filteredProjects.value.length - 1}00vw)`]
      }),
      { 
        target: target },
    );
  })

  checkbox()
  
// Pass an animation or timeline to automatically scrub
scroll(
  animate(progressBar, { scaleX: [0, 1]})
);
    
})


// Probably optional
onUnmounted(() => {
  observer.disconnect()
})





</script>

<template>
  <main>
    <div 
    class="cover"
    >
      <div class="dropdown">
        <fieldset>
          <legend class="filter">Filter Projects</legend>
          <div class="dropdown-content">
            <label for="All" class="filterLabel">
              <input type="checkbox" id="All" value="All" name="project" class="filterInput"/>
            <p>All</p></label>
            <label for="Videographer/Editor" class="filterLabel">
          <input type="checkbox" id="Videographer/Editor" value="Videographer/Editor" name="project" class="filterInput"/>
              <p>Videographer/Editor</p></label>
              <label for="Web Design" class="filterLabel">
          <input type="checkbox" id="Web Design" value="Web Design" name="project" class="filterInput"/>
              <p>Web Design</p></label>
              <label for="Dancer" class="filterLabel">
          <input type="checkbox" id="Dancer" value="Dancer" name="project" class="filterInput"/>
              <p>Dancer</p></label>
              <label for="Model" class="filterLabel">
          <input type="checkbox" id="Model" value="Model" name="project" class="filterInput"/>
              <p>Model</p></label>
              <label for="Choreographer" class="filterLabel">
          <input type="checkbox" id="Choreographer" value="Choreographer" name="project" class="filterInput"/>
              <p>Choreographer</p></label>
              <label for="Photographer" class="filterLabel">
          <input type="checkbox" id="Photographer" value="Photographer" name="project" class="filterInput"/>
              <p>Photographer</p></label>
          </div>
        </fieldset>
      </div>
      <div class="cover-contents" >
        <ProjectCover
            v-for="project in filteredProjects"
            :key="project.id"
            :ref="project.id"
            :title="project.title"
            :projectImg="require(project.image)"
            :projectLink="project.link"
            :role="project.role"
          />
      </div>
        <div class="progress-bar"></div>
    </div>
    
  </main>
</template>

<style scoped>

.dropbtn {
  background-color: transparent;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: flex;
  flex-direction: column;
}

.dropdown-content {
  display: none;
  /* position: absolute; */
  /* padding-top: 200px;
  padding-left: 115px; */
  /* background-color: transparent; */
  /* min-width: 160px; */
  widows: min-content;
  z-index: 1;
}

/* .dropdown-content button {
  border: 1px solid var(--color-border);
  background-color: transparent;
  color: var(--color-text);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 var(--color-border);
  padding: 12px 16px;
  text-decoration: none;
  display: block;
} */

.dropdown:hover .dropdown-content {
  display: flex;
  flex-direction: column;
}

.dropdown:hover .filter {
  background-color: inset 0 0 0 2em var(--color-border);
}

.dropdown {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  top: 16vh;
  left: 80vw;
}


.filter.router-link-exact-active {
  color: var(--color-text);
}


.filter.router-link-exact-active:hover {
  background-color: transparent;
}


.filter {
  display: inline-block;
  padding: 1rem;
  border: 1px solid var(--color-border);
  background-color: transparent;
  color: var(--color-text);
  font-size: 1rem;
  font-weight: 600;
  /* cursor: pointer; */
  box-shadow: inset 0 0 0 0 var(--color-border);
  z-index: 5;
}

.filter:hover {
  box-shadow: inset 0 0 0 2em var(--color-border);
  transition: 1s;
}

.filterInput {
  position: relative;
    display: flex;
    align-items: center;
}

fieldset:hover {
  background-color: rgba(0, 0, 0, 0.25);
}
.filterLabel {
  display: inline-flex;
  color: var(--color-text);
  font-size: 1rem;
  font-weight: 600;
  align-items: center;
  line-height: 1;
  border-radius: 5px;
  background-color: transparent;
  padding: 5px 7px 5px 7px;
  margin: 5px 0px 5px 0px;
  user-select: none;
  width: fit-content;
}

.filterLabel p {
  padding-left: 5px ;
}

.filterLabel:hover {
  box-shadow: inset 0 0 0 2em var(--color-border);
  transition: 1s;
}

.filterLabel:has(.filterInput:checked) {
  box-shadow: inset 0 0 0 2em var(--color-border);
  color: var(--color-text);
}
.filterInput:checked {
  accent-color: black;
}
.progress-bar {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: 10px;
      background: rgb(0, 161, 189);
      transform: scaleX(0);
      transform-origin: 0%;
    }

.cover {
  position: relative;
  width: 100vw;
    /* display: flex;
    flex-direction: row;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100vh;
    background: var(--color-background);
    color: var(--color-text); */
}

.cover-contents {
  display: flex;
  position: sticky;
  top: 0;
  
    /* flex-direction: column;
    position: sticky;
    top: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background: var(--color-background);
    color: var(--color-text); */
    
}


img {
    width: auto;
    height: 100%;
    object-fit: cover;
}

</style>