import Vue from "vue";
import VueRouter from 'vue-router';
import RspGame from '../가위바위보/RspGame';
import LottoGen from '../로또/LottoGen';
import ResponseCheck from '../반응속도체크/ResponseCheck';
import NumberBaseball from '../숫자야구/NumberBaseBall';
import GameMatcher from './GameMatcher';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes:[
        { path : '/number-baseball', component: NumberBaseball },
        { path : '/response-check', component: ResponseCheck },
        { path : '/lotto-gen', component: LottoGen },
        { path : '/rsp-game', component: RspGame },
        { path : '/game/:name', component: GameMatcher}
    ]
});