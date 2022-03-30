<template>
    <div>
        <div>{{turn}} 님의 턴입니다.</div>
        <!-- <table-component :table-data="tableData"></table-component> -->
            <TableComponent>
                <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex">
                    <td @click="onClickTd(rowIndex, cellIndex)" v-for="(cellData, cellIndex) in rowData" :key="cellIndex">{{cellData}}</td>
                </tr>
            </TableComponent>
        <div v-if="winner">{{winner}}가 이겼습니다.</div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import store, {CHANGE_TURN, CLICK_CELL, NO_WINNER, RESET_GAME, SET_WINNER} from './store'
    import TableComponent from './TableComponent'

    export default {
        store,
        components:{
            TableComponent,
        },
        // data() {
        //     return {
        //         tableData :[
        //             ['', '', ''], 
        //             ['', '', ''], 
        //             ['', '', ''],
        //         ],
        //         turn : 'O',
        //         winner : '',
        //     };
        // },
        computed:{
            ...mapState({
                winner : state => state.winner,
                turn : 'turn',
                tableData : 'tableData',
            })
            //...mapState(['winner', 'turn']),
            // winner() {
            //     return this.$store.state.winner;
            // },
            // turn(){
            //     return this.$store.state.turn;
            // }
        },
        methods: {
          onclickTd(rowIndex, cellIndex){
              if(cellData) return;
            //const rootData = this.$root.$data;
            //this.$set(this.tableData[1], 0, 'X');
            //this.$root.$data.tableData[rowIndex][cellIndex] = this.$root.$data.turn;
            // vue 에서 배열의 값을 바꿀 때 인덱스를 사용하여 참조하면 데이터는 변해도 화면에 그려지지 않음
            //this.$set(this.tableData[rowIndex], cellIndex, this.turn);
            this.$store.commit(CLICK_CELL, {row: rowIndex, cell: cellIndex});
            
            let win = false;
            if (this.tableData[rowIndex][0] === this.turn && this.tableData[rowIndex][1] === this.turn 
                && this.tableData[rowIndex][2] === this.turn) {
                win = true;
            }
            if (this.tableData[0][cellIndex] === this.turn && this.tableData[1][cellIndex] === this.turn 
                && this.tableData[2][cellIndex] === this.turn) {
                win = true;
            }
            if (this.tableData[0][0] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][2] === this.turn) {
                win = true;
            }
            if (this.tableData[0][2] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][0] === this.turn) {
                win = true;
            }

            if (win) { // 이긴 경우: 3줄 달성
                this.$store.commit(SET_WINNER, this.turn);
                this.$store.commit(RESET_GAME);
                
                } else { // 무승부
                let all = true; // all이 true면 무승부라는 뜻
                this.tableData.forEach((row) => { // 무승부 검사
                    row.forEach((cell) => {
                    if (!cell) {
                        all = false;
                    }
                    });
                });
                if (all) { // 무승부
                    this.$store.commit(NO_WINNER);
                    this.$store.commit(RESET_GAME);
                } else {
                    this.$store.commit(CHANGE_TURN);
                }
            }
          }  
        }
    };
</script>

<style scoped>
    table {
        border-collapse: collapse;
    }
    td {
        border: 1px solid black;
        width: 40px;
        height: 40px;
        text-align: center;
    }
</style>