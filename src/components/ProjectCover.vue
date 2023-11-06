<template>
    <div class="cover">
        <RouterLink :to=projectLink class="cover-contents">
            <img :src=projectImg alt="Project Cover Image"/>
            <h1>
                {{ title }}
            </h1>
        </RouterLink>
    </div>

        


    
</template>

<script>

export default {


props: {
        title: String,
        projectImg: String,
        projectLink: String
},


}



    
</script>

<style scoped>

.cover {
    display: flex;
    flex-direction: row;
    white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
    align-items: flex-start;
    justify-content: flex-start;
    height: 400vh !important;
    width: 100vw;
    background: var(--color-background);
    color: var(--color-text);
}

.cover-contents {
    position: static;
top: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background: var(--color-background);
    color: var(--color-text);

}
.item {
    display: inline-block;
    width: 100px;
    height: 100%;
    outline: 1px dotted gray;
    padding: 1em;
    box-sizing: border-box;
}

.paddle {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 3em;
}
.left-paddle {
    left: 0;
}
.right-paddle {
    right: 0;
}
.hidden {
    display: none;
}

.print {
  margin: auto;
  max-width: 500px;
}
    
span {
    display: inline-block;
    width: 100px;
}

img {
    width: auto;
    height: 100vh;
    object-fit: cover;
    position: relative;
    align-self: center;
    justify-self: center;
}

h1 {
    font-size: 2rem;
    font-weight: 500;
    margin-top: 1rem;
    color: var(--color-heading);
    z-index: 75;
    top: 50%;
    position: fixed;

}
</style>

