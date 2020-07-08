<template>
    <div class="login-main-component min-h-screen flex justify-center items-center">
        <div
            class="login-card w-2/3 flex justify-center items-center flex-row border border-gray-400 rounded-lg relative"
        >
            <img
                class="w-24 absolute top-0 left-0 p-3"
                src="@/assets/images/strategy.svg"
                alt="icon"
                srcset=""
            />
            <div class="left w-1/3 h-full bg-teal-400 flex justify-center items-center flex-col">
                <p class="text-3xl text-white font-semibold">Welcome Back!</p>
            </div>
            <div class="right w-2/3 flex justify-center items-center flex-col">
                <p class="w-3/4 text-6xl mb-4 flex justify-start items-start">Login,</p>
                <div class=""></div>
                <InputX
                    class="w-3/4"
                    title="Email"
                    type="text"
                    placeholder="請輸入Email"
                    v-model="email"
                />
                <InputX
                    class="w-3/4"
                    title="密碼"
                    type="password"
                    placeholder="請輸入密碼"
                    v-model="password"
                />
                <div class="w-3/4 mb-4 px-4 flex justify-end">
                    <button class="input-box py-2 px-4 border rounded-lg" @click="login">
                        登錄
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InputX from '../../components/Local/InputX';
import APIFactory from '../../services/API/APIFactory';
export default {
    name: 'LoginMain',
    data() {
        return {
            email: '',
            password: '',
        };
    },
    components: {
        InputX,
    },
    methods: {
        async login() {
            let AuthAPI = new APIFactory('auth');
            let res = await AuthAPI.login({ email: this.email, password: this.password });
            console.log(res);
        },
    },
};
</script>

<style lang="scss" scoped>
.login-card {
    height: 500px;
}
</style>
