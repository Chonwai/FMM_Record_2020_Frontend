<template>
    <div id="app" class="min-h-screen">
        <div class="main-window flex items-center">
            <SideNavigation />
            <router-view class="w-full" />
        </div>
        <Footer />
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

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
