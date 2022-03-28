<template>
    <div>
        <div>당첨 숫자</div>
        <div id="결과창">
            <lotto-ball v-for="ball in winBalls" :key="ball" number="5"></lotto-ball>
        </div>
        <div>보너스</div>
        <lotto-ball v-if="bonus"></lotto-ball>
        <button v-if="redo">한 번 더 !</button>
    </div>    
</template>
<script>
function getWinNumbers(){
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map((v, i)=>i+1);
    const shuffle = [];
    while (candidate.length>0) {
        shuffle.push(candidate.splice(Math.floor()*candidate.length), 1)[0];
    }
    const bonusNumber = shuffle[shuffle.length-1];
    const getWinNumbers = shuffle.slice(0,6).sort((p,c)=>p-c);
    return [...winBalls, bonusNumber];
}

export default ({
    data(){
        return {
            winBalls:[],
            bonus: null,
            redo : false,
        };
    },
    computed:{

    },
    methods:{

    },
    mounted() {

    },
    destroyed() {

    }
})
</script>

<style scoped>

</style>
