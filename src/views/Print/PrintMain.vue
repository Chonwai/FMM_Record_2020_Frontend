<template>
    <div class="print-form-container">
        <div class="title">
            <h1>表單列印</h1>
        </div>
        <div class="form-container">
            <div class="icon-container">
                <img class="UM-icon" src="@/assets/images/um-icon.png" />
                <p class="form-number">CMDO-FMM-AV-11-2017-R01</p>
            </div>
            <div class="form-title-container bg-black">
                <p class="form-title">設施管理及維護處</p>
                <p class="form-title">Facility Management and Maintenance Section</p>
            </div>
            <div class="form-title-container subtitle">
                <p class="form-title subtitle">設備借用單</p>
                <p class="form-title subtitle">Equipment Loan Form</p>
            </div>
            <div class="form-info-table-container" v-if="printFormRecord[0]">
                <div class="form-item"></div>
                <div class="form-item"></div>
                <div class="form-item">
                    表單編號：
                    <span class="eng">Form number:</span>
                </div>
                <div class="form-item data">FMM{{ printFormRecord[0].FormID }}</div>
                <div class="form-item">
                    領取人：
                    <span class="eng">Name:</span>
                </div>
                <div class="form-item data">{{ printFormRecord[0].name }}</div>
                <div class="form-item">
                    日期：
                    <span class="eng">Date:</span>
                </div>
                <div class="form-item data">{{ printFormRecord[0].date }}</div>
                <div class="form-item">
                    職員/學生證號碼：
                    <span class="eng">Staff Number:</span>
                </div>
                <div class="form-item data">{{ printFormRecord[0].staffNumber }}</div>
                <div class="form-item">
                    部門：
                    <span class="eng">Department:</span>
                </div>
                <div class="form-item data">{{ printFormRecord[0].department }}</div>
                <div class="form-item">
                    預期歸還：
                    <span class="eng">Date of Return:</span>
                </div>
                <div class="form-item data">{{ printFormRecord[0].dateOfReturn }}</div>
                <div class="form-item">
                    電話：
                    <span class="eng">Contact:</span>
                </div>
                <div class="form-item data">{{ printFormRecord[0].userContact }}</div>
            </div>
            <div class="form-info-table-container" v-else>
                <div class="form-item"></div>
                <div class="form-item"></div>
                <div class="form-item">
                    表單編號：
                    <span class="eng">Form number:</span>
                </div>
                <div class="form-item data"></div>
                <div class="form-item">
                    領取人：
                    <span class="eng">Name:</span>
                </div>
                <div class="form-item data"></div>
                <div class="form-item">
                    日期：
                    <span class="eng">Date:</span>
                </div>
                <div class="form-item data"></div>
                <div class="form-item">
                    職員/學生證號碼：
                    <span class="eng">Staff Number:</span>
                </div>
                <div class="form-item data"></div>
                <div class="form-item">
                    部門：
                    <span class="eng">Department:</span>
                </div>
                <div class="form-item data"></div>
                <div class="form-item">
                    預期歸還：
                    <span class="eng">Date of Return:</span>
                </div>
                <div class="form-item data"></div>
                <div class="form-item">
                    電話：
                    <span class="eng">Contact:</span>
                </div>
                <div class="form-item data"></div>
            </div>
            <div class="form-items-table-container" v-if="printFormItems[0]">
                <div class="form-item">
                    項目
                    <span class="eng">Item</span>
                </div>
                <div class="form-item">
                    器材名稱及型號
                    <span class="eng">Equipment Name and Model</span>
                </div>
                <div class="form-item">
                    器材財產編號
                    <span class="eng">Asset No.</span>
                </div>
                <div class="form-item">
                    用途及使用地點
                    <span class="eng">Useage and Use Location</span>
                </div>
                <div class="form-item">
                    還件人
                    <span class="eng">Name</span>
                </div>
                <div class="form-item">
                    還件日期
                    <span class="eng">Return Date</span>
                </div>
                <div class="form-item" v-for="item in 60" :key="item.key">
                    <div v-if="item % 6 == 1">{{ Math.ceil(item / 6) }}</div>
                    <div v-else-if="printFormItems[Math.ceil(item / 6) - 1] && item % 6 == 2">
                        {{ printFormItems[Math.ceil(item / 6) - 1].assetsModel }}
                    </div>
                    <div v-else-if="printFormItems[Math.ceil(item / 6) - 1] && item % 6 == 3">
                        {{ printFormItems[Math.ceil(item / 6) - 1].assetsNo }}
                    </div>
                    <div v-else-if="printFormItems[Math.ceil(item / 6) - 1] && item % 6 == 4">
                        {{ printFormItems[Math.ceil(item / 6) - 1].useLoctaion }}
                    </div>
                    <div v-else-if="printFormItems[Math.ceil(item / 6) - 1] && item % 6 == 5">
                        {{ printFormItems[Math.ceil(item / 6) - 1].returnName }}
                    </div>
                    <div v-else-if="printFormItems[Math.ceil(item / 6) - 1] && item % 6 == 0">
                        {{ printFormItems[Math.ceil(item / 6) - 1].returnDate }}
                    </div>
                </div>
            </div>
            <div class="form-items-table-container" v-else>
                <div class="form-item">
                    項目
                    <span class="eng">Item</span>
                </div>
                <div class="form-item">
                    器材名稱及型號
                    <span class="eng">Equipment Name and Model</span>
                </div>
                <div class="form-item">
                    器材財產編號
                    <span class="eng">Asset No.</span>
                </div>
                <div class="form-item">
                    用途及使用地點
                    <span class="eng">Useage and Use Location</span>
                </div>
                <div class="form-item">
                    還件人
                    <span class="eng">Name</span>
                </div>
                <div class="form-item">
                    還件日期
                    <span class="eng">Return Date</span>
                </div>
                <div class="form-item" v-for="item in 60" :key="item.key">
                    <div v-if="item % 6 == 1">{{ Math.floor(item / 6) + 1 }}</div>
                </div>
            </div>
            <div class="form-remark-container" v-if="printFormRecord[0]">
                <div class="form-item">
                    備註：
                    <span class="eng">Remark:</span>
                </div>
                <div class="form-item data">{{ printFormRecord[0].remark }}</div>
            </div>
            <div class="form-remark-container" v-else>
                <div class="form-item">
                    備註：
                    <span class="eng">Remark:</span>
                </div>
                <div class="form-item data"></div>
            </div>
            <div class="form-title-container">
                <p class="form-title">設施管理及維護處職員專用</p>
                <p class="form-title">For FMM staff use only</p>
            </div>
            <div class="form-staff-only-container" v-if="printFormRecord[0]">
                <div class="form-item">
                    交件人：
                    <span class="eng">Delivery Person:</span>
                </div>
                <div class="form-item data">{{ printFormRecord[0].deliveryPerson }}</div>
                <div class="form-item">
                    收件人：
                    <span class="eng">Receiver:</span>
                </div>
                <div class="form-item data">{{ printFormRecord[0].returnPerson }}</div>
                <div class="form-item">
                    日期：
                    <span class="eng">Date:</span>
                </div>
                <div class="form-item data">{{ printFormRecord[0].deliveryDate }}</div>
                <div class="form-item">
                    日期：
                    <span class="eng">Date:</span>
                </div>
                <div class="form-item data">{{ printFormRecord[0].returnDate }}</div>
            </div>
            <div class="form-staff-only-container" v-else>
                <div class="form-item">
                    交件人：
                    <span class="eng">Delivery Person:</span>
                </div>
                <div class="form-item data"></div>
                <div class="form-item">
                    收件人：
                    <span class="eng">Receiver:</span>
                </div>
                <div class="form-item data"></div>
                <div class="form-item">
                    日期：
                    <span class="eng">Date:</span>
                </div>
                <div class="form-item data"></div>
                <div class="form-item">
                    日期：
                    <span class="eng">Date:</span>
                </div>
                <div class="form-item data"></div>
            </div>
        </div>
    </div>
</template>

<script>
// import config from '../config.json';
export default {
    data() {
        return {
            printFromID: 0,
            flag: 0,
            printFormRecord: [],
            printFormItems: [],
            // getRecordApi: config.URL + config.getRecordApi,
            // getOneRecordItemsApi: config.URL + config.getOneRecordItemsApi,
        };
    },
    methods: {
        getPrintRecord() {
            this.$http
                .post(
                    this.getRecordApi,
                    JSON.stringify({
                        formID: this.printFromID,
                    })
                )
                .then(response => {
                    this.printFormRecord = response.data;
                    this.getOneRecordItems();
                });
        },
        getOneRecordItems() {
            this.$http
                .post(
                    this.getOneRecordItemsApi,
                    JSON.stringify({
                        formID: this.printFormRecord[0].FormID,
                    })
                )
                .then(response => {
                    this.printFormItems = response.data;
                    // console.log(this.printFormItems);
                });
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
            // swal({
            //     title: '請輸入表單編號',
            //     content: {
            //         element: 'input',
            //         attributes: {
            //             placeholder: '查詢「FMM1」只輸入「1」即可！如查詢空表單請按OK。',
            //             type: 'number',
            //             min: '1',
            //         },
            //     },
            //     closeOnClickOutside: true,
            // }).then(value => {
            //     if (value > 0) {
            //         this.printFromID = Math.floor(value);
            //         this.getPrintRecord();
            //         swal({
            //             title: `成功找到FMM${this.printFromID}表單！`,
            //         });
            //     } else if (value < 0) {
            //         this.inputFormID();
            //     }
            // });
        },
    },
    created() {
        this.printFromID = this.$route.params.FormID;
        if (this.printFromID == null) {
            this.inputFormID();
        } else {
            this.getPrintRecord();
        }
    },
};
</script>

<style scoped>
.print-form-container {
    min-height: calc(100vh - var(--footerHeight));
    width: auto;
    margin-left: var(--leftBar);
    padding: 36px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.title {
    display: none;
}

.form-container {
    height: 285mm;
}

h1,
p {
    margin: 0px;
}

.icon-container {
    position: relative;
    display: flex;
    height: var(--row-height);
    padding-bottom: 3px;
}

.UM-icon {
    position: relative;
    width: auto;
}

.form-number {
    position: relative;
    display: flex;
    flex: 1;
    align-items: flex-end;
    justify-content: flex-end;
    width: auto;
    margin: 0px;
    font-size: 24px;
}

.form-title-container {
    display: flex;
    flex-direction: column;
    height: var(--row-height);
    padding: 6px;
}

.form-title {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: white;
}

.subtitle {
    background-color: #ffffff;
    color: #000000;
    font-size: 20px;
}

.form-info-table-container {
    display: grid;
    grid-template-rows: repeat(4, var(--info-row-height));
    grid-template-columns: repeat(4, 25%);
    margin-top: 6px;
    margin-bottom: 6px;
}

.form-item {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 18px;
    padding: 3px;
}

.form-item > div {
    font-size: 14px;
}

.eng {
    font-size: 12px;
}

.data {
    margin: 6px;
    padding: 0px;
    border-bottom: 2px solid black;
}

.form-items-table-container {
    display: grid;
    grid-template-rows: repeat(11, var(--info-row-height));
    grid-template-columns: repeat(6, auto);
    border: 1px solid black;
    margin-top: 6px;
    margin-bottom: 6px;
}

.form-items-table-container > .form-item {
    border: 1px solid black;
}

.form-remark-container {
    display: grid;
    grid-template-rows: repeat(1, var(--info-row-height));
    grid-template-columns: repeat(2, 10% 90%);
    margin-top: 6px;
    margin-bottom: 6px;
}

.form-staff-only-container {
    display: grid;
    grid-template-rows: repeat(2, var(--info-row-height));
    grid-template-columns: repeat(4, 25%);
    margin-top: 6px;
    margin-bottom: 6px;
}
</style>
