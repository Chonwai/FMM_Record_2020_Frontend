<template>
    <div id="record-table-component">
        <el-table
            :data="records"
            style="width: 100%; padding: 36px;"
            :default-sort="{ prop: 'id', order: 'descending' }"
            height="100%"
        >
            <el-table-column prop="id" label="未完成的表單" sortable width="150"></el-table-column>
            <el-table-column prop="hired_out_at" label="日期" sortable width="150">
            </el-table-column>
            <el-table-column prop="taken_by" label="領取人"> </el-table-column>
        </el-table>
    </div>
</template>

<script>
import RecordAPI from '../../services/API/RecordAPI';
export default {
    name: 'RecordTableComponent',
    data() {
        return {
            API: new RecordAPI(),
            records: [
                {
                    id: '',
                    hired_out_at: '',
                    taken_by: '',
                },
            ],
        };
    },
    methods: {
        formatter(row) {
            return row.address;
        },
        async init() {
            let res = await this.API.getNonReturnedRecords(1);
            this.records = res.message.data;
            for (let record of this.records) {
                record.id = 'FMM' + record.id;
            }
            console.log(this.records);
        },
    },
    created() {
        this.init();
    },
};
</script>
