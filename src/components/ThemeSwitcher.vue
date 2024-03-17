<template>
    <div class="theme-switcher">
        <input type="checkbox" :id="props.id" class="theme-switcher-input" ref="themeSwitcher" @change="changeTheme">
        <label for="theme-switcher" class="theme-switcher-label">
        </label>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

// props
const props = defineProps(['id'])

// mounted
onMounted(() => {
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (dark) {
        setTimeout(() => {
            // debugger
            const currentTheme = localStorage.getItem('theme');
            console.log(currentTheme);
            const project = document.getElementById('project');
            const themeSwitcher = document.getElementById('theme-switcher');
            
            //what happens if you have already set a theme and you are traveling through the site?
            if (currentTheme === 'light') {
                console.log('light mode on');
                themeSwitcher.checked = false;
                project.checked = false;
                // console.log(project.checked)
                document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
            } else if (currentTheme === 'dark') {
                // console.log('dark mode on');
                themeSwitcher.checked = true;
                project.checked = true;
                // console.log(project.checked)
                document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
            } else {

                
                
                //otherwise, the theme is set to dark mode
                // console.log('dark mode on');
                themeSwitcher.checked = true;
                project.checked = true;
                // console.log(project.checked)
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }
            }, 0);    
    } else {
        setTimeout(() => {
            const themeSwitcher = document.getElementById('theme-switcher');
            const project = document.getElementById('project');
            // console.log('light mode on');
            themeSwitcher.checked = false;
            project.checked = false;
            document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        }, 0); 
        
    }
});

// methods
const changeTheme = () => {
    const project = document.getElementById('project');
    const themeSwitcher = document.getElementById('theme-switcher');
    if (themeSwitcher.checked) {
        // console.log('dark mode on');
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeSwitcher.checked = true;
        project.checked = true;
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeSwitcher.checked = false;
        project.checked = false;
    }
}
</script>

<style>
.theme-switcher-input[type=checkbox]{
	height: 0;
	width: 0;
	visibility: hidden;
}

.theme-switcher-input[type=checkbox]:active {
    background-color: black;
}

.theme-switcher-label {
    cursor: pointer;
	text-indent: -9999px;
	width: 50px;
	height: 25px;
	background: var(--color-border-hover);
	display: block;
	border-radius: 100px;
	position: relative;
    border: var(--color-text)  1px solid;
}

.theme-switcher-label:after {
    content: '';
	position: absolute;
	top: 1px;
	left: 1px;
	width: 21px;
	height: 21px;
	background: var(--vt-c-white);
	border-radius: 90px;
	transition: 0.3s;
    background-image: url('../assets/logos/sun.svg');
}

.theme-switcher-input:checked + .theme-switcher-label {
	background: var(--vt-c-accent);
}

.theme-switcher-input:checked + .theme-switcher-label:after {
	left: calc(100% - 1px);
	transform: translateX(-100%);
    background-image: url('../assets/logos/moon.svg');
    filter: invert(100%);
}

.theme-switcher-label:active:after {
	width: 24px;
}

/* centering */
.theme-switcher {
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	height: 100vh;
    cursor: pointer;
    padding-left: 3rem;
    padding-bottom: 3rem;
    position: fixed;
    z-index: 50;
}

/* the switcher on the popup */
.modal-wrapper .theme-switcher {
    z-index: 200;
}
</style>