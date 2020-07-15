<template>
    <div
        class="login-main-component flex justify-center items-center bg-center bg-no-repeat bg-cover"
    >
        <div class="login-card w-3/5 flex justify-center items-center flex-row relative">
            <img
                class="w-24 absolute top-0 left-0 p-3"
                src="@/assets/images/strategy.svg"
                alt="icon"
                srcset=""
            />
            <div
                class="left w-1/3 h-full bg-teal-400 flex justify-center items-center flex-col p-4 border-l border-t border-b rounded-l-md"
            >
                <p class="text-3xl text-white font-bold">Welcome Back to FMM System!</p>
            </div>
            <div
                class="right w-2/3 h-full bg-white flex justify-center items-center flex-col border-r border-t border-b rounded-r-md"
            >
                <p class="w-3/4 text-6xl mb-4 flex justify-start items-start font-black">
                    Login...
                </p>
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
import LocalStorage from '../../services/Storage/LocalStorageService';
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
            if (res.status === true) {
                LocalStorage.setItem('token', res.message.token.access_token);
                LocalStorage.setItem('user_id', res.message.user_details.id);
                this.setupCurrentUserObject(res.message.user_details);
                this.$router.push({ name: 'Home' });
            } else {
                if (res.message == 'Password Incorrect') {
                    this.$message.error(res.message);
                } else {
                    this.$message.error(res.message.email[0]);
                }
            }
        },
        setupCurrentUserObject(user) {
            this.$currentUser.user = user;
        },
    },
};
</script>

<style lang="scss" scoped>
.login-main-component {
    background-image: url('../../assets/images/pexels-photo-745364.jpeg');
    min-height: calc(100vh - 3rem);
}

.login-card {
    height: 500px;
}
</style>
