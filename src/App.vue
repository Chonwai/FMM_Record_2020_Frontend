<template>
    <div id="app" class="min-h-screen">
        <SideNavigation />
        <div id="main-window" class="ml-72">
            <router-view />
            <Footer />
        </div>
    </div>
</template>

<script>
import Footer from './components/Global/Fooder';
import SideNavigation from './components/Global/SideNavigation';

export default {
    name: 'app',
    components: {
        Footer,
        SideNavigation,
    },
};
</script>

<style src="@/assets/css/main.css"></style>
