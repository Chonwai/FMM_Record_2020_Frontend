<template>
    <div id="print-record-container" class="p-12">
        <h1 id="header" class="text-3xl font-bold mb-4 flex justify-center items-center">
            表單列印
        </h1>
        <main class="form-container">
            <FromHead />
            <div class="flex flex-wrap">
                <span class="w-1/2"></span>
                <FormElement
                    class="w-1/2"
                    title="表單編號："
                    subtitle="Form number:"
                    :value="'FMM' + record.id"
                />
                <FormElement
                    class="w-1/2"
                    title="領取人："
                    subtitle="Name:"
                    :value="record.taken_by"
                />
                <FormElement
                    class="w-1/2"
                    title="日期："
                    subtitle="Date:"
                    :value="record.taken_at"
                />
                <FormElement
                    class="w-1/2"
                    title="職員/學生證號碼："
                    subtitle="Staff Number:"
                    :value="record.staff_number"
                />
                <FormElement
                    class="w-1/2"
                    title="部門："
                    subtitle="Department:"
                    :value="record.department"
                />
                <FormElement
                    class="w-1/2"
                    title="預期歸還："
                    subtitle="Date of Return:"
                    :value="record.will_return_at"
                />
                <FormElement
                    class="w-1/2"
                    title="電話："
                    subtitle="Contact:"
                    :value="record.contact"
                />
            </div>
            <FormItemsTable class="w-full" :items="record.items_records" />
            <div class="w-full p-2 flex flex-row mb-2">
                <div class="w-1/12 flex flex-col items-start">
                    <p>備註：</p>
                    <p class="text-xs">Remark:</p>
                </div>
                <div class="border-b-2 w-11/12 border-black flex justify-start items-end text-xl">
                    {{ record.remark }}
                </div>
            </div>
            <div class="p-2 bg-black text-white mb-2">
                <p class="text-2xl flex justify-center">設施管理及維護處職員專用</p>
                <p class="text-xl flex justify-center">For FMM staff use only</p>
            </div>
            <div class="flex flex-wrap">
                <FormElement
                    class="w-1/2"
                    title="交件人："
                    subtitle="Delivery Person:"
                    :value="record.hired_out_by"
                />
                <FormElement
                    class="w-1/2"
                    title="收件人："
                    subtitle="Receiver:"
                    :value="record.returned_by"
                />
                <FormElement
                    class="w-1/2"
                    title="日期："
                    subtitle="Date:"
                    :value="record.hired_out_at"
                />
                <FormElement
                    class="w-1/2"
                    title="日期："
                    subtitle="Date:"
                    :value="record.returned_at"
                />
            </div>
        </main>
    </div>
</template>

<script>
import RecordAPI from '../../services/API/RecordAPI';
import FromHead from './FormHead';
import FormElement from './FormElement';
import FormItemsTable from './FormItemsTable';
export default {
    data() {
        return {
            API: new RecordAPI(),
            printRecordID: 0,
            flag: 0,
            printFormItems: [],
            record: {
                id: '',
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
                        item: '',
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
        };
    },
    components: {
        FromHead,
        FormElement,
        FormItemsTable,
    },
    methods: {
        async getPrintRecord() {
            let res = await this.API.getSpecifyRecord(this.printRecordID);
            this.record = res.message[0];
        },
        inputFormID() {
            this.$prompt(
                '查詢「FMM1」表單只輸入「1」即可！如查詢空的表單請按。',
                '請輸入表單編號',
                {
                    confirmButtonText: '確定',
                    cancelButtonText: '取消',
                    inputPattern: /^[+]?[0-9]+/,
                    inputErrorMessage: '表單編號不正確',
                    inputType: 'number',
                }
            )
                .then(({ value }) => {
                    this.printRecordID = value;
                    this.getPrintRecord();
                    this.$message({
                        type: 'success',
                        message: '查詢表單編號: ' + value,
                    });
                })
                .catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消查詢',
                    });
                });
        },
    },
    created() {
        this.printRecordID = this.$route.params.id;
        if (this.printRecordID == null) {
            this.inputFormID();
        } else {
            this.getPrintRecord();
        }
    },
};
</script>

<style scoped></style>
