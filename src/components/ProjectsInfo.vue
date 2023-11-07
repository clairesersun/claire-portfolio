<template>
    
    <RouterLink 
    data-scroll-speed="3"
    :to=projectLink 
    class="item"
    >
        <img :src=projectImg alt="Project Cover Image"/>
        <h1>
            {{ title }} 
        </h1>
    </RouterLink>

</template>



<style scoped>


.item {
display: flex;
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
align-items: center;
}

h1 {
font-size: 15rem;
font-weight: 500;
color: var(--color-heading);
z-index: 75;
align-self: center;
position: absolute;


}
</style>



<script>
import LocomotiveScroll from 'locomotive-scroll';

export default {


props: {
title: String,
projectImg: String,
projectLink: String
},



}




</script>