<template>
    <div id="new-record-container" class="p-12 flex flex-col justify-center items-center">
        <h1 class="text-3xl font-bold mb-4 flex justify-center items-center">新增表單</h1>
        <main class="w-2/3 flex flex-wrap border p-4 rounded-lg">
            <div class="input-box w-full flex flex-row items-center px-4 mb-4 justify-end">
                <el-switch
                    v-model="record.status"
                    active-color="#13ce66"
                    inactive-color="#409eff"
                    active-text="外部借用"
                    inactive-text="內部借用"
                    active-value="external"
                    inactive-value="internal"
                ></el-switch>
            </div>
            <InputX
                class="w-full"
                title="領取人"
                type="text"
                placeholder="請輸入領取人"
                v-model="record.taken_by"
            />
            <InputX
                class="w-full"
                title="日期"
                type="date"
                placeholder="請輸入日期"
                v-model="record.taken_at"
            />
            <InputX
                class="w-full"
                title="職員/學生證號碼"
                type="text"
                placeholder="請輸入職員/學生證號碼"
                v-model="record.staff_number"
            />
            <InputX
                class="w-full"
                title="所屬部門"
                type="text"
                placeholder="請輸入所屬部門"
                v-model="record.department"
            />
            <InputX
                class="w-full"
                title="預期歸還"
                type="date"
                placeholder="請輸入預期歸還"
                v-model="record.will_return_at"
            />
            <InputX
                class="w-full"
                title="電話"
                type="text"
                placeholder="請輸入電話"
                v-model="record.contact"
            />
            <InputX
                class="w-full"
                title="備註"
                type="text"
                placeholder="請輸入備註"
                v-model="record.remark"
            />
            <div class="mb-4 w-full px-4 flex items-center justify-end">
                <label for="items-counter">新加入項目數量</label>
                <el-input-number
                    class="ml-4"
                    id="items-counter"
                    v-model="currentItem"
                    @change="handleChange"
                    :min="1"
                    :max="10"
                    label="描述文字"
                ></el-input-number>
            </div>
            <ItemInput
                v-for="(item, index) in currentItem"
                :key="index"
                :index.sync="item"
                @item="updateItem"
                v-model="record.items_records[index]"
            />
            <InputX
                class="w-full"
                title="交件人"
                type="text"
                placeholder="請輸入交件人"
                v-model="record.hired_out_by"
            />
            <InputX
                class="w-full"
                title="交件日期"
                type="date"
                placeholder="請輸入交件日期"
                v-model="record.hired_out_at"
            />
            <InputX
                class="w-full"
                title="收件人"
                type="text"
                placeholder="請輸入收件人"
                v-model="record.returned_by"
            />
            <InputX
                class="w-full"
                title="收件日期"
                type="date"
                placeholder="請輸入收件日期"
                v-model="record.returned_at"
            />
            <div class="input-box w-full flex flex-row items-center px-4 mb-4 justify-end">
                <el-switch
                    v-model="record.is_returned"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    active-text="已還"
                    inactive-text="未還"
                ></el-switch>
            </div>
            <div class="mb-4 px-4 w-full flex justify-end">
                <button class="input-box py-2 px-4 border rounded-lg" @click="submit">
                    新增表單
                </button>
            </div>
        </main>
    </div>
</template>

<script>
import InputX from '../../components/Local/InputX';
import ItemInput from '../../components/Local/ItemInput';
import RecordAPI from '../../services/API/RecordAPI';
export default {
    name: 'NewRecordMain',
    data() {
        return {
            record: {
                status: 'external',
                taken_by: '',
                taken_at: '',
                staff_number: '',
                department: '',
                will_return_at: '',
                contact: '',
                is_returned: false,
                remark: '',
                items_records: [
                    {
                        item: 1,
                        assets_model: '',
                        assets_no: '',
                        place_of_use: '',
                        returned_by: '',
                        returned_at: '',
                    },
                ],
                hired_out_by: '',
                hired_out_at: '',
                returned_by: '',
                returned_at: '',
            },
            currentItem: 1,
            API: new RecordAPI(),
        };
    },
    components: {
        InputX,
        ItemInput,
    },
    methods: {
        init() {
            this.record = {
                status: 'external',
                taken_by: '',
                taken_at: '',
                staff_number: '',
                department: '',
                will_return_at: '',
                contact: '',
                is_returned: false,
                remark: '',
                items_records: [
                    {
                        item: 1,
                        assets_model: '',
                        assets_no: '',
                        place_of_use: '',
                        returned_by: '',
                        returned_at: '',
                    },
                ],
                hired_out_by: '',
                hired_out_at: '',
                returned_by: '',
                returned_at: '',
            };
            this.currentItem = 1;
        },
        async submit() {
            console.log(this.record);
            const res = await this.API.insertRecord(this.record);
            if (res.status == false) {
                for await (const value of Object.entries(res.message)) {
                    this.$message.error(`${value[1]}`);
                }
            } else if (res.status == true) {
                this.open();
            }
        },
        handleChange(currentValue, oldValue) {
            if (currentValue > oldValue) {
                this.record.items_records.push({
                    item: this.currentItem,
                    assets_model: '',
                    assets_no: '',
                    place_of_use: '',
                    returned_by: '',
                    returned_at: '',
                });
            } else if (currentValue < oldValue) {
                this.record.items_records.pop();
            }
        },
        updateItem(item) {
            this.record.items_records[item[1] - 1] = item[0];
        },
        open() {
            this.$confirm('新增成功，是否需要回到首頁嗎？', '温馨提示', {
                confirmButtonText: '是',
                cancelButtonText: '否',
                type: 'success',
            })
                .then(() => {
                    this.$router.push('/');
                })
                .catch(() => {
                    this.init();
                });
        },
    },
};
</script>

<style lang="scss" scoped></style>
