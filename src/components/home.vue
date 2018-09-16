<template>
	<div class="container">
		<header class="row">
			<div class="text-center">
				<img class="logo" src="../assets/logo.png" alt="">
			</div>
		</header>
		<div class="main row">
			<img src="../assets/lighthouse.jpg" alt="">
		</div>
		<div class="sub-menu text-center row">
			<div>
				<a href="https://www.baidu.com/" @click="showIframe()" target="showHere"><!-- @click="showIframe()" //iframe事件 -->
					<div class="icon-wrap">
						<img src="../assets/icons/2.png" alt="">
					</div>
					<div>Notification</div>
				</a>
			</div>
			<div>
				<a href="http://www.qq.com/">
					<div class="icon-wrap">
					<img src="../assets/icons/3.png" alt="">
					</div>
					<div>Levy Payment</div>
				</a>
			</div>
			<div>
				<a href="https://www.sina.com.cn/" target="_blank">
					<div class="icon-wrap">
					<img src="../assets/icons/4.png" alt="">
					</div>
					<div>Rrepair Request</div>
				</a>
			</div>
			<div>
				<a href="javascript:;" @click="toTest">
					<div class="icon-wrap">
					<img src="../assets/icons/5.png" alt="">
					</div>
					<div>Visitor Parking</div>
				</a>
			</div>
		</div>
		<footer-menu></footer-menu>
		<div v-show="iframeState" id="show_iframe" class="row iframe-wrap">
			<div class="iframe-header text-center"><img @click="closeIframe()" src="../assets/icons/close.svg" alt="">{{title}}</div>
			<iframe id="tag_iframe" frameborder=0 name="showHere" scrolling=auto src="">
		</iframe>
		</div>
	</div>
</template>

<script>
import footerMenu from "./menu";
export default {
  components: {
    footerMenu
  },
  data() {
    return {
      iframeState: false,
      title: "Genesis"
    };
  },
  methods: {
    closeIframe() {
      this.iframeState = false;
    },
    showIframe() {
      this.iframeState = true;
		},
		toTest(){
			cordova.InAppBrowser.open('http://www.w3school.com.cn', '_blank');
		}
  },
  mounted() {
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      window.open = cordova.InAppBrowser.open;
    }
    const deviceHeight = document.documentElement.clientHeight;
    show_iframe.style.height = deviceHeight + "px";
    let width = $(".main").width();
    $(".main").css("height", width * 0.56 + "px");
  }
};
</script>

<style scoped>
.iframe-wrap {
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
}
.iframe-header {
  height: 40px;
  background-color: #f4f4f4;
  border-bottom: 1px solid #ddd;
  line-height: 40px;
}
.iframe-header img {
  width: 20px;
  margin: 10px 15px;
  position: absolute;
  left: 0;
}
iframe {
  width: 100%;
  height: 100%;
}
.sub-menu > div {
  width: 25%;
}
.sub-menu {
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  white-space: nowrap;
  letter-spacing: 0;
}
.sub-menu .icon-wrap {
  margin: 0 auto 8px;
  width: 56%;
}
.sub-menu img {
  width: 100%;
}
header {
  padding: 10px 0;
  background-color: #f4f4f4;
}
.main img {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.logo {
  width: 33.9%;
}
.sub-menu {
  padding: 20px 0;
  background-color: #f4f4f4;
  color: #a0a0a0;
}
</style>
