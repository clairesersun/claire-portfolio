<template>
    
    <RouterLink 
    :to="projectLink" 
    class="item"
    >
        
            <img 
            :src=imageUrl
            alt="Project Cover Image"
            />
            <div class="words">
            <div class="overlay start"></div>
                <h1>
                    {{ title }} 
                </h1>
                <h2> 
                    {{ role }} 
                </h2>
                <div class="overlay end"></div>
            </div>
        
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
    background-color: var(--vt-c-black);
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
    text-align: center;
    padding: 1em;
    box-sizing: border-box;
    font-family: 'Proza Libre', sans-serif;
    font-weight: 500;
    color: var(--vt-c-text-dark-1);
}

    
.item h1 {
    font-size: 3.5rem;
    line-height: 3.5rem;
    word-wrap: break-word;
    max-width: 100vw;
    z-index: 6;
}

.item h2 {
    font-size: 1.5rem;
    line-height: 1.5rem;
    padding-left: 10px;
    z-index: 6;
    word-wrap: break-word;
    padding-right: 7vw;
    align-self: flex-end;
}

.overlay {
    position: absolute;
    z-index: 5;
    width: 10%;
    height: 100%;
    backdrop-filter: blur(2px);   
}

.start {
        right: 0;
    }

.end {
        left: 0;
    }

.item img { 
    height: 100vh;
    min-width: 100vw;
    opacity: 0.8;
}

@media screen and (min-width: 576px) {
    
    .item h1 {
        font-size: 6rem;
        line-height: 6rem;   
    }
    .item h2 {
        font-size: 2.5rem;
        line-height: 2.5rem;
    }
}

@media screen and (min-width: 768px) {
    .item h1 {
        font-size: 8rem;
        line-height: 8rem;   
    }
    .item h2 {
        font-size: 3rem;
        line-height: 3rem;
    }
}

@media screen and (min-width: 992px) {
    .item h1 {
        font-size: 10rem;
        line-height: 10rem;   
    }
    .item h2 {
        font-size: 2rem;
        line-height: 2rem;
    }
}

</style>



<script>

export default {
    
    
    props: {
        title: String,
        projectImg: String,
        projectLink: String,
        role: String
    },
    
    data() {
        const imageUrl =  new URL(  `${this.projectImg}`, "https://raw.githubusercontent.com/clairesersun/claire-portfolio/main/")
        return {
        imageUrl
    }
},
}




</script>