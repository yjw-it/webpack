import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// import 생성자 이름 고정
// import {} from './store' 형태로 {} 로 묶어서 이름을 가져와야 함
export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';
export const NO_WINNER = 'NO_WINNER';

// iomport 받는 곳에서 생성자 이름 지정 가능
export default new Vuex.Store({
    state:{
        tableData: [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ],
        turn: 'O',
        winner: '',

    }, // =/=data
    getters:{ // =/= computed
        turnMessage(state){
            return state.turn + '님이 승리하셨습니다.';
        }
    }, 
    mutations:{ // state 를 동기적으로 수정할 때
        [SET_WINNER](state, winner){
            state.winner = winner;
        },
        [CLICK_CELL](state, {row, cell}){
            Vue.set(state.tableData[row], cell, state.turn);
        },
        [CHANGE_TURN](state){
            state.turn = state.turn === 'O' ? 'X' : 'O';
        },
        [RESET_GAME](state){
            state.turn = 'O';
            state.tableData = [
                ['','',''],
                ['','',''],
                ['','',''],
            ];
        },
        [NO_WINNER](state){

        }
    }, 
    actions:{

    }, // 비동기적으로 사용할 때, 또는 여러 뮤테이션을 연달아 실행할 때
})