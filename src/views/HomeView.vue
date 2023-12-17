<script setup>
import ProjectCover from '../components/ProjectCover.vue'
import { ref, onMounted, onUnmounted, nextTick, onUpdated } from 'vue'
import { animate, scroll } from "motion";
import { reactive, computed } from 'vue'


// const count = ref(0)

// async function increment() {
//   count.value++

//   // DOM not yet updated
//   console.log(document.getElementById('counter').textContent) // 0

//   await nextTick()
//   // DOM is now updated
//   console.log(document.getElementById('counter').textContent) // 1
// }

async function checkbox() {
  const checkboxVideo = document.querySelector('input[id="Videographer/Editor"]');
  checkboxVideo.addEventListener('change', function () {
    if (this.checked) {
      console.log('Checkbox is checked..');
      projects.value = projects.value.concat(projectsFilm.value)
      console.log(projects.value)
    } else {
      console.log('Checkbox is not checked..');
        projects.value = projects.value.filter(project => !projectsFilm.value.includes(project))
      console.log(projects.value)

    }
  });
  const checkboxWeb = document.querySelector('input[id="Web Design"]');
  checkboxWeb.addEventListener('change', function () {
    if (this.checked) {
      console.log('Checkbox is checked..');
      projects.value = projects.value.concat(projectsWeb.value)
      console.log(projects.value)
    } else {
      console.log('Checkbox is not checked..');
      projects.value = projects.value.filter(project => !projectsWeb.value.includes(project))
      console.log(projects.value)
    }
  });
  const checkboxDance = document.querySelector('input[id="Dancer"]');
  checkboxDance.addEventListener('change', function () {
    if (this.checked) {
      console.log('Checkbox is checked..');
      projects.value = projects.value.concat(projectsDance.value)
      console.log(projects.value)
    } else {
      console.log('Checkbox is not checked..');
      projects.value = projects.value.filter(project => !projectsDance.value.includes(project))
      console.log(projects.value)
    }
  });
  const checkboxModel = document.querySelector('input[id="Model"]');
  checkboxModel.addEventListener('change', function () {
    if (this.checked) {
      console.log('Checkbox is checked..');
            projects.value = projects.value.concat(projectsModel.value)
      console.log(projects.value)
    } else {
      console.log('Checkbox is not checked..');
      projects.value = projects.value.filter(project => !projectsModel.value.includes(project))
      console.log(projects.value)

    }
  });
  const checkboxChoreography = document.querySelector('input[id="Choreographer"]');
  checkboxChoreography.addEventListener('change', function () {
    if (this.checked) {
      console.log('Checkbox is checked..');
      projects.value = projects.value.concat(projectsChoreography.value)
      console.log(projects.value)
    } else {
      console.log('Checkbox is not checked..');
      projects.value = projects.value.filter(project => !projectsChoreography.value.includes(project))
      console.log(projects.value)

    }
  });
  const checkboxAll = document.querySelector('input[id="All"]');
  checkboxAll.addEventListener('change', function () {
    if (this.checked) {
      console.log('Checkbox is checked..');
      checkboxVideo.checked = true
      checkboxWeb.checked = true
      checkboxDance.checked = true
      checkboxModel.checked = true
      checkboxChoreography.checked = true
      projects.value = projects.value.concat(projectsWeb.value)
      projects.value = projects.value.concat(projectsFilm.value)
      projects.value = projects.value.concat(projectsDance.value)
      projects.value = projects.value.concat(projectsModel.value)
      projects.value = projects.value.concat(projectsChoreography.value)
      console.log(projects.value)
      //if all checked, then show all
      // if just one of the filters are not checked, then uncheck this one
    } else {
      console.log('Checkbox is not checked..');
      checkboxVideo.checked = false
      checkboxWeb.checked = false
      checkboxDance.checked = false
      checkboxModel.checked = false
      checkboxChoreography.checked = false
      projects.value = projects.value.filter(project => !projectsWeb.value.includes(project))
      projects.value = projects.value.filter(project => !projectsFilm.value.includes(project))
      projects.value = projects.value.filter(project => !projectsDance.value.includes(project))
      projects.value = projects.value.filter(project => !projectsModel.value.includes(project))
      projects.value = projects.value.filter(project => !projectsChoreography.value.includes(project))
      console.log(projects.value)

    }
  })

}





///previous info

const projectsWeb = ref([
  { id: 1, title: 'VALLETO', image: 'src/assets/valleto/cover.jpeg', link: '/projects/valleto', role: 'Web Designer' },
  { id: 2, title: 'Moving For Life', image: 'src/assets/movingforlife/cover.png', link: '/projects/movingforlife', role: 'Web Designer' },
  { id: 3, title: 'timeslot', image: 'src/assets/logo.svg', link: '/projects/timeslot', role: 'Web Designer' }
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
  //to make router and view for the following projects
  { id: 12, title: 'Five Hours', image: 'src/assets/fivehours/cover.png', link: '/projects/fivehours', role: 'Choreographer'},
  { id: 13, title: '.1 & .2', image: 'src/assets/oneandtwo/cover.png', link: '/projects/oneandtwo', role: 'Choreographer'},
  { id: 14, title: 'Open Your Eyes', image: 'src/assets/openyoureyes/cover.png', link: '/projects/openyoureyes', role: 'Choreographer'},
  { id: 15, title: 'Portrait of a Dancer Transforming into a Young Woman', image: 'src/assets/portraitof/cover.png', link: '/projects/portraitof', role: 'Choreographer'}
])

const projects = ref([])


const observer = new IntersectionObserver((entries, observer) => {
  console.log(entries)
});



onMounted(() => {
  const items = document.querySelectorAll(".item");
  const target = document.querySelector(".cover");
  const contents = document.querySelector(".cover-contents");
  const progressBar = document.querySelector(".progress-bar");
  const progress = document.querySelector(".progress");
  checkbox()
  // const showProject = ref([])
  observer.observe(target, items, contents, progressBar, progress);
  scroll(
    animate(contents, {
      transform: ["none", `translateX(-${items.length - 1}00vw)`]
    }),
    { 
      target: target },
    
  );

  
// Pass an animation or timeline to automatically scrub
scroll(
  animate(progressBar, { scaleX: [0, 1] })
);

// // Or pass a function to directly use the scroll info
// scroll(({ y }) => {
//   if (y > .3 ) {
//   scroll(
//     animate(contents, { x: [0, "100vw"] })
//   );}
//   else if (.3 < y < .6) {
//     scroll(
//       animate(contents, { x: [0, "200vw"] })
//     );}  else if (y > .6) {
//       scroll(
//         animate(contents, { x: [0, "300vw"] })
//       );} else { return}
// });
    
})


// Probably optional
onUnmounted(() => {
  observer.disconnect()
})

// const filteredProjects = computed(() => {
//   return this.projects.filter((project) => {
//     return project.role.match(this.project)
//   })
// })

// const showProject = reactive({
//   'Videographer/Editor': checked => {
//     if (checked) {
//       projects.value = projects.value.concat(projectsFilm.value)
//     } else {
//       projects.value = projects.value.filter(project => !projectsFilm.value.includes(project))
//     }
//   },
//   'Web Designer': checked => {
//     if (checked) {
//       projects.value = projects.value.concat(projectsWeb.value)
//     } else {
//       projects.value = projects.value.filter(project => !projectsWeb.value.includes(project))
//     }
//   },
//   'Dancer': checked => {
//     if (checked) {
//       projects.value = projects.value.concat(projectsDance.value)
//     } else {
//       projects.value = projects.value.filter(project => !projectsDance.value.includes(project))
//     }
//   },
//   'Model': checked => {
//     if (checked) {
//       projects.value = projects.value.concat(projectsModel.value)
//     } else {
//       projects.value = projects.value.filter(project => !projectsModel.value.includes(project))
//     }
//   },
//   'Choreographer': checked => {
//     if (checked) {
//       projects.value = projects.value.concat(projectsChoreography.value)
//     } else {
//       projects.value = projects.value.filter(project => !projectsChoreography.value.includes(project))
//     }
//   }
// })



// const filteredProjects  = computed(() => {
  // return this.projects.filter((project) => {
  //   return project.role.match(showProject)
  // // })
  // return projects.value.filter((project) => {
  //   return project.role.match(showProject)
  // })
  // let shownProjects = showProject
  // console.log(shownProjects.value)
  // if (shownProjects.value.length === 0) {
  //   return projects.value
  // } else {
  //   return projects.value.filter((project) => {
  //     return project.role.match(shownProjects)
  //   })
  // }
  // return projects.value.filter((project) => {
  //   return project.role.match(shownProjects)
  // }) 
// })





</script>

<template>
  <main>
    <div 
    class="cover"
    >
    <!-- <button id="counter" @click="increment" style="top: 200px; position: absolute; z-index: 100;">{{ count }}</button> -->
    <!-- <div class="dropdown"> -->


      <!-- <div style="color: aliceblue; font-size: 50px;">{{filtered}}</div> -->
      <div class="dropdown">
        <!-- <div class="filter">Filter Projects</div> -->
        <!-- Filter Projects -->
        <fieldset>
  <legend class="filter">Filter Projects</legend>
  <input type="checkbox" id="All" value="All" v-model="role" checked/>
    <label for="All">All</label>
    <input type="checkbox" id="Videographer/Editor" value="Videographer/Editor" v-model="role"/>
    <label for="Videographer/Editor">Videographer/Editor</label>
  <!-- <div class="dropdown-content"> -->
    <input type="checkbox" id="Web Design" value="Web Design" v-model="role"/>
    <label for="Web Design">Web Design</label>
    <input type="checkbox" id="Dancer" value="Dancer" v-model="role" />
    <label for="Dancer">Dancer</label>
    <input type="checkbox" id="Model" value="Model" v-model="role" />
    <label for="Model">Model</label>
    <input type="checkbox" id="Choreographer" value="Choreographer" v-model="role" />
    <label for="Choreographer">Choreographer</label>
  </fieldset>
</div>
      <!-- <div class="filter">Filter</div>
      <div class="dropdown-content">
        <button class="btn active" @click="filterSelection('All')">All</button>
        <button class="btn" @click="filterSelection('Web Design')">Web Design</button>
        <button class="btn" @click="filterSelection('Videographer/Editor')">Videographer/Editor</button>
      </div> -->
    <!-- </div> -->
    <!-- :height="`${projects.length}00vh`" -->
        <!-- show all -->
        <ProjectCover
            v-for="project in filteredProjects"
            :key="project.id"
            :ref="project.id"
            :title="project.title"
            :projectImg="project.image"
            :projectLink="project.link"
            :role="project.role"
          />
        <!-- <div 
        class="cover-contents filterDiv all" >
            <ProjectCover
            v-for="web in projectsWeb"
            :key="web.id"
            :ref="web.id"
            :title="web.title"
            :projectImg="web.image"
            :projectLink="web.link"
            :role="web.role"
          />
          <ProjectCover
            v-for="film in projectsFilm"
            :key="film.id"
            :ref="film.id"
            :title="film.title"
            :projectImg="film.image"
            :projectLink="film.link"
            :role="film.role"
          />
          <ProjectCover
            v-for="dance in projectsDance"
            :key="dance.id"
            :ref="dance.id"
            :title="dance.title"
            :projectImg="dance.image"
            :projectLink="dance.link"
            :role="dance.role"/>
          <ProjectCover
            v-for="model in projectsModel"
            :key="model.id"
            :ref="model.id"
            :title="model.title"
            :projectImg="model.image"
            :projectLink="model.link"
            :role="model.role"/>
          <ProjectCover
            v-for="choreography in projectsChoreography"
            :key="choreography.id"
            :ref="choreography.id"
            :title="choreography.title"
            :projectImg="choreography.image"
            :projectLink="choreography.link"
            :role="choreography.role"/>
        </div> -->
        <!-- only show web
        <div 
        class="cover-contents filterDiv web" >
            <ProjectCover
            v-for="web in projectsWeb"
            :key="web.id"
            :ref="web.id"
            :title="web.title"
            :projectImg="web.image"
            :projectLink="web.link"
            :role="web.role"
          />
        </div>
        only show film -->
        <!-- <div 
        class="cover-contents filterDiv film" >
          <ProjectCover
            v-for="film in projectsFilm"
            :key="film.id"
            :ref="film.id"
            :title="film.title"
            :projectImg="film.image"
            :projectLink="film.link"
            :role="film.role"
          /> -->
        <!-- </div> --> 
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
  position: absolute;
  padding-top: 200px;
  padding-left: 115px;
  background-color: transparent;
  /* min-width: 160px; */
  widows: min-content;
  z-index: 1;
}

.dropdown-content button {
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
}

.dropdown-content button:hover {
  background-color: var(--color-border)
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .filter {
  background-color:  rgb(0, 161, 189);
}

.dropdown {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  top: 18%;
  right: 13%;
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
  cursor: pointer;
  box-shadow: inset 0 0 0 0 var(--color-border);
  z-index: 5;
}

.filter:hover {
  box-shadow: inset 0 0 0 2em var(--color-border);
  transition: 1s;
  /* background-color: var(--color-border); */
}



/* .filterDiv {
  display: none; /* Hidden by default 
} */
/* .cover-contents .filterDiv .all {
  display: block !important;
} */

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
  height: 800vh;
  position: relative;
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