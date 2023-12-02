<template>
    
    <RouterLink 
    :to=projectLink 
    class="item"
    >
        <div class="overlay start"></div>
            <img :src=projectImg alt="Project Cover Image"/>
                <div class="words">
                    <h1>
                        {{ title }} 
                    </h1>
                    <h2> 
                        {{ role }} 
                    </h2>
                </div>
        <div class="overlay end"></div>
    </RouterLink>

</template>



<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;800&family=Proza+Libre:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap');

.item {
    scroll-snap-align: start;
    display: flex;
    width: 100vw;
    height: 100vh;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
/* display: flex;
flex-direction: column;
width: 100px;
height: 100%;
outline: 1px dotted gray;
padding: 1em;
box-sizing: border-box;
width: 100vw;
height: 100vh;
object-fit: cover;
position: relative;
align-self: center;
justify-self: center;
justify-content: center;
align-items: center; */
}

.words {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 75;
    width: 65%;
    height: 100%;
    /* background: rgba(0,0,0,0.5); */
    color: white;
    text-align: center;
    padding: 1em;
    box-sizing: border-box;
    /* font-family: 'Montserrat', sans-serif; */
    font-family: 'Proza Libre', sans-serif;
    font-weight: 500;
    color: var(--color-heading);

}

h1 {
font-size: 15rem;
line-height: 15rem;
word-wrap: break-word;
max-width: 100vw;

/* z-index: 75;
align-self: center;
position: absolute; */
}

h2 {
font-size: 2rem;
line-height: 2rem;
/* font-family: 'Montserrat', sans-serif; */
/* font-family: 'Proza Libre', sans-serif;
font-weight: 500; */
/* color: var(--color-heading);
z-index: 75;
align-self: end;
/* padding-top: 20em; */
/* width: 100%; */
/* position: absolute; */ 
align-self: flex-end;
}

.overlay {
    position: absolute;
    z-index: 50;
    width: 10%;
    height: 100%;
    background-color: transparent;
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
    backdrop-filter: blur(10px);
}

.start {
        left: 0;
    }

.end {
        right: 0;
    }


</style>



<script>

export default {


props: {
title: String,
projectImg: String,
projectLink: String,
role: String
}}




</script>