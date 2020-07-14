<template>
    <div id="user-setting-main-container" class="p-12 flex flex-col justify-start items-center">
        <h1 class="text-3xl font-bold mb-4 flex justify-center items-center">用戶設置</h1>
        <main class="w-2/3 flex flex-wrap border p-4 rounded-lg">
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
            <div class="mb-4 px-4 w-full flex justify-end">
                <button class="input-box py-2 px-4 border rounded-lg" @click="update">
                    更新資料
                </button>
            </div>
        </main>
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
            console.log(UserAPI.getOwner());
        },
    },
};
</script>

<style lang="scss" scoped>
#user-setting-main-container {
    height: calc(100vh - 3rem);
}
</style>
