<template>
    <div id="user-setting-main-container" class="p-12 flex flex-col justify-start items-center">
        <h1 class="text-3xl font-bold mb-4 flex justify-center items-center">用戶設置</h1>
        <div class="w-2/3 flex flex-wrap border p-4 rounded-lg">
            <p class="px-8 mb-4 text-xl font-bold">用戶基本資料</p>
            <InputX
                class="w-full"
                title="用戶名稱"
                type="text"
                placeholder="請輸入用戶名稱"
                v-model="user.name"
            />
            <InputX
                class="w-full"
                title="用戶Email"
                type="text"
                placeholder="請輸入用戶Email"
                v-model="user.email"
            />
            <InputX
                class="w-full"
                title="職員/學生證號碼"
                type="text"
                placeholder="請輸入職員/學生證號碼"
                v-model="user.staff_or_student_number"
            />
            <InputX
                class="w-full"
                title="電話"
                type="text"
                placeholder="請輸入電話"
                v-model="user.contact"
            />
            <div class="px-4 w-full flex justify-end">
                <button class="input-box py-2 px-4 border rounded-lg" @click="update">
                    更新基本資料
                </button>
            </div>
        </div>
        <!-- <div class="w-2/3 mt-4 flex flex-wrap border p-4 rounded-lg">
            <p class="px-8 mb-4 text-xl font-bold">變更密碼</p>
            <InputX
                class="w-full"
                title="目前的密碼"
                type="text"
                placeholder="請輸入目前的密碼"
                v-model="password"
            />
            <InputX
                class="w-full"
                title="新密碼"
                type="text"
                placeholder="請輸入密碼"
                v-model="password"
            />
            <InputX
                class="w-full"
                title="再次輸入新密碼"
                type="text"
                placeholder="請再次輸入新密碼"
                v-model="confirmPassword"
            />
            <div class="px-4 w-full flex justify-end">
                <button class="input-box py-2 px-4 border rounded-lg" @click="updatePassword">
                    更新用戶密碼
                </button>
            </div>
        </div> -->
    </div>
</template>

<script>
import InputX from '../../../components/Local/InputX';
import APIFactory from '../../../services/API/APIFactory';
export default {
    name: 'UserSerttingMain',
    data() {
        return {
            user: {
                staff_or_student_number: '',
                email: '',
                name: '',
                contact: '',
            },
            password: '',
            confirmPassword: '',
        };
    },
    created() {},
    mounted() {
        this.init();
    },
    components: {
        InputX,
    },
    methods: {
        async init() {
            this.user = this.$currentUser.user;
        },
        async update() {
            let UserAPI = new APIFactory('user');
            UserAPI.update(this.user);
        },
        async updatePassword() {},
    },
};
</script>

<style lang="scss" scoped>
#user-setting-main-container {
    min-height: calc(100vh - 3rem);
}
</style>
