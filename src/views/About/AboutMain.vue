<template>
    <main id="about-component" class="h-full">
        <div class="min-h-screen flex justify-center items-center flex-col">
            <div class="font-bold text-3xl">Thank You For Using!</div>
            <div class="text-lg">
                System created by Edison Un.
                <a
                    class="font-bold"
                    href="mailto:chonwaiun@gmail.com"
                >Contact Me (chonwaiun@gmail.com) :P</a>
            </div>
            <div>
                Icons made by
                <a href="http://www.freepik.com" title="Freepik">Freepik</a> from
                <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by
                <a
                    href="http://creativecommons.org/licenses/by/3.0/"
                    title="Creative Commons BY 3.0"
                    target="_blank"
                >CC 3.0 BY</a>
            </div>
        </div>
    </main>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>
#about-component {
    background-image: url('../../assets/images/pexels-photo-1037995.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}

.credit-container > div {
    padding: 12px;
}
</style>
