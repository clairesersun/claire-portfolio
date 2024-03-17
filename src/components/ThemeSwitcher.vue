<template>
    <div class="theme-switcher">
        <input type="checkbox" id="theme-switcher" class="theme-switcher-input" ref="themeSwitcher" @change="changeTheme">
        <label for="theme-switcher" class="theme-switcher-label">
            <img class="sun" src="../assets/logos/sun.svg" alt="sun" />
            <img class="moon" src="../assets/logos/moon.svg" alt="moon" />
        </label>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

// data
const themeSwitcher = ref(true);

// mounted
onMounted(() => {
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (dark) {
        console.log('dark mode on');
        themeSwitcher.value.checked = true;
        changeTheme()
        
    } else {
        console.log('light mode on');
        themeSwitcher.value.checked = false;
        changeTheme()
    }
});

// methods
const changeTheme = () => {
    if (themeSwitcher.value.checked) {
        console.log('dark mode on');
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        console.log('light mode on');
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
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
    background-image: url('../assets/sun.svg');
}

.theme-switcher-input:checked + .theme-switcher-label {
	background: var(--vt-c-accent);
}

.theme-switcher-input:checked + .theme-switcher-label:after {
	left: calc(100% - 1px);
	transform: translateX(-100%);
    background-image: url('../assets/moon.svg');
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
    z-index: 200;
}
</style>