<template>
    <div>
        <div>{{turn}} 님의 턴입니다.</div>
        <table-component :table-data="tableData"></table-component>
        <div v-if="winner">{{winner}}가 이겼습니다.</div>
    </div>
</template>

<script>
    import TableComponent from './TableComponent'
    export default {
        components:{
            TableComponent,
        },
        data() {
            return {
                tableData :[
                    ['', '', ''], 
                    ['', '', ''], 
                    ['', '', ''],
                ],
                turn : 'O',
                winner : '',
            };
        },
        methods: {
            
        },
    };
</script>

<style scoped>

</style>