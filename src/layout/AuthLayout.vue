<template>
    <div class="auth-layout-main min-h-screen">
        <router-view />
        <Footer />
    </div>
</template>

<script>
import Footer from '../components/Global/Fooder';
export default {
    name: 'AuthLayout',
    data() {
        return {};
    },
    components: {
        Footer,
    },
};
</script>

<style lang="scss" scoped></style>
