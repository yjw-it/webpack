<template>
  <div>
    <div v-for="char in charList" :key="char">
      <img :src="char.thumnail" :alt="char.name" />
      <div class="charName">{{ char.name }}</div>
      <div class="charSticker">{{ char.stickerCnt }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      charList: [
        {
          name: "장위전",
          thumnail: "http://cave9000.cafe24.com/198X02/mpc.png",
          stickerCnt: 0,
        },
        {
          name: "char2",
          thumnail: "http://cave9000.cafe24.com/198X02/mpc3.png",
          stickerCnt: 0,
        },
        {
          name: "char3",
          thumnail: "http://cave9000.cafe24.com/198X02/egg1.png",
          stickerCnt: 0,
        },
      ],
    };
  },
};
</script>
