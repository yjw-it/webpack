<template>
  <td @click="onClickTd">{{cellData}}</td>
</template>

<script>
import EventBus from './EventBus'
export default {
    props:{
        cellData : String,
        rowIndex : Number,
        cellIndex : Number,
    },
    methods : {
        onClickTd(){
            if(this.cellData) return;

            //$emit 은 $on 이랑 대응
            EventBus.$emit('clickTd', this.rowIndex, this.cellIndex);
        },
    }
}
</script>

<style>

</style>