<template>
    <div>
        <mine-form></mine-form>
        <div>{{timer}}</div>
        <table-component></table-component>
        <div>{{result}}</div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import store, { INCREMENT_TIMER } from './store'

import MineForm from './MineForm'
import TableComponent from './TableComponent'

let interval;
export default {
    store,
    components:{
        MineForm,
        TableComponent,
    },
    computed:{
        ...mapState(['timer','result', 'halted']),
    },
    methods:{

    },
    watch:{
        halted(value, oldValue){
            if(value===false){ //게임이 시작됨
                interval = setInterval(() =>{
                    this.$store.commit(INCREMENT_TIMER);
                }, 1000);
            }else{ //게임이 중단됨
                clearInterval(interval);
            }
        }
    }
}
</script>

<style>
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