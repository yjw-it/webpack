<template>
  <div>
    <h1 class="page-header">Video Page Example</h1>
    <div class="videoBlock">
      <div class="video01">
        <button type="button" id="fulscrBtn01" v-on:click="fullscreen($event)">
          전체화면1
        </button>
        <button type="button" id="fulscrBtn2_01" @click="fullscreen2($event)">
          전체화면(팝업)
        </button>
        <div class="videoContent">
          <video
            class="myVideo"
            width="400"
            height="225"
            autoplay
            controls
            id="videoContent_01"
          >
            <source
              src="http://10.112.59.17:8099/streamwebm"
              style="display:none"
            />
          </video>
        </div>

        <ModalView v-if="popup_01" @close-modal="popup_01 = false">
          <div class="back"></div>
          <div class="overay">
            <div class="popup_content">
              <div>
                <p>참여자 이름 : ㅇㅇㅇ</p>
                <button @click="popup_01 = false">닫기</button>
              </div>
              <video
                class="fsVideo"
                width="1200"
                height="600"
                autoplay
                controls
                id="popupVideo_01"
              >
                <source
                  src="http://10.112.59.17:8099/streamwebm"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </ModalView>
      </div>

      <div class="video02">
        <button type="button" id="fulscrBtn02" v-on:click="fullscreen($event)">
          전체화면
        </button>
        <div class="videoContent">
          <video
            class="myVideo"
            width="400"
            height="225"
            autoplay
            controls
            id="videoContent_02"
          >
            <source
              src="http://10.112.59.17:8099/streamwebm2"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <div class="video03">
        <button type="button" id="fulscrBtn03" v-on:click="fullscreen($event)">
          전체화면
        </button>
        <div class="videoContent">
          <video
            class="myVideo"
            width="400"
            height="225"
            autoplay
            controls
            id="videoContent_03"
          >
            <source src="@/assets/Video/3.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div class="video04">
        <button type="button" id="fulscrBtn04" v-on:click="fullscreen($event)">
          전체화면
        </button>
        <div class="videoContent">
          <video
            class="myVideo"
            width="400"
            height="225"
            autoplay
            controls
            id="videoContent_04"
          >
            <source src="@/assets/Video/4.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      popup_01: false,
    };
  },
  methods: {
    fullscreen(event) {
      var videoId = event.currentTarget.id;
      var str = videoId.substr(videoId.length - 2, 2);
      var divId = 'videoContent_' + str;

      //alert(str);
      var videoDiv = document.getElementById(divId);

      if (videoDiv.requestFullscreen) {
        videoDiv.requestFullscreen();
      } else if (videoDiv.webkitRequestFullscreen) {
        /* Safari */
        videoDiv.webkitRequestFullscreen();
      } else if (videoDiv.msRequestFullscreen) {
        /* IE11 */
        videoDiv.msRequestFullscreen();
      }
    },
    fullscreen2(event) {
      var idStr = event.currentTarget.id;
      var subStr = idStr.substr(idStr.length - 2, 2);

      //여기에 이제... 나머지 애들 정지하고 어쩌고 하는 기능 넣고...

      if (subStr == '01') {
        this.popup_01 = !this.popup_01;
        for (var i = 0; i < 4; i++) {
          var tt = '';
          tt += 'videoContent_0' + i;
          alert(tt);
          this.vid_pause(tt);
        }
        this.vid_play('popup_01');
      }
    },
    vid_play(thisVideo) {
      var video = document.getElementById(thisVideo);
      video.play();
    },
    vid_pause(thisVideo) {
      var video = document.getElementById(thisVideo);
      video.pause();
    },
  },
};
</script>

<style>
videoBlock {
  float: left;
  width: 100%;
}
videoContent {
  float: left;
  width: 402px;
  height: 227px;
  margin: 1px;
  z-index: -1;
}
.back,
.overay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}
.overay {
  background: black;
}
.popup_content {
  position: relative;
  max-width: 80%;
  margin: auto;
  margin-top: 30px;
  padding: 20px;
  background-color: white;
  min-height: 80%;
  z-index: 9999;
}
</style>
