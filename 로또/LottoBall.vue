<template>
    <div class="ball" :style="{background}">{{number}}</div>
</template>

<script>
export default {
    name: 'LottoBall',
    data(){
        let background,
        return {
            background,
        }
    }
}

</script>
<style scoped>
    .ball {
        display: inline-block;
        border: 1px solid black;
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        text-align: center;
        margin-right: 20px;
    }
</style>