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
				<a href="javascript:;" target="showHere"><!-- @click="showIframe()" //iframe事件 -->
					<div class="icon-wrap">
						<img src="../assets/icons/chat.svg" alt="">
					</div>
					<div>Notification</div>
				</a>
			</div>
			<div>
				<a href="javascript:;" target="showHere">
					<div class="icon-wrap">
					<img src="../assets/icons/payment.svg" alt="">
					</div>
					<div>Levy Payment</div>
				</a>
			</div>
			<div>
				<a href="javascript:;">
					<div class="icon-wrap">
					<img src="../assets/icons/repair.svg" alt="">
					</div>
					<div>Rrepair Request</div>
				</a>
			</div>
			<div>
				<a href="javascript:;">
					<div class="icon-wrap">
					<img src="../assets/icons/stop.svg" alt="">
					</div>
					<div>Visitor Parking</div>
				</a>
			</div>
		</div>
		<footer-menu></footer-menu>
		<div v-show="iframeState" id="show-iframe" class="row iframe-wrap">
			<div class="iframe-header"><img @click="closeIframe()" src="../assets/icons/close.svg" alt=""></div>
			<iframe frameborder=0 name="showHere" scrolling=auto src="">
		</iframe>
		</div>
	</div>
</template>

<script>
import footerMenu from './menu';
export default {
	components: {
    footerMenu
  },
  data () {
    return {
      iframeState:false,
	}
  },
  methods:{
	  closeIframe(){
      this.iframeState = false;
    },
	  showIframe(){
      this.iframeState = true;
    }
  },
  mounted(){
    const oIframe = document.getElementById('show-iframe');
    const deviceHeight = document.documentElement.clientHeight;
    oIframe.style.height = deviceHeight + 'px'; 
  }
}
</script>

<style scoped>
.iframe-wrap{
	position: fixed;
	top: 0;
	z-index: 100;
	width: 100%;
}
.iframe-header{
	height: 40px;
	background-color: #f4f4f4;
}
.iframe-header img{
	width: 20px;
	margin: 10px 15px;
}
iframe{
	width: 100%;
	height: 100%;
}
.sub-menu>div{
	width: 25%;
}
.sub-menu{
	display: flex;
	justify-content: space-around;
	font-size: 12px;
}
.sub-menu .icon-wrap{
	border-radius: 50%;
	border: 2px solid #a0a0a0;
	padding: 12px;
	margin: 0 auto 8px;
	width: 60px;
}
.sub-menu img{
	width: 100%;
}
header{
	padding: 15px 0;
	background-color: #f4f4f4;
}
.main{
	height: 240px;
}
.main img{
	height: 100%;
	width: 100%;
	overflow: hidden;
}
.logo{
	height: 30px;
}
.sub-menu{
	padding: 20px 0;
	background-color: #f4f4f4;
	color: #a0a0a0;
}
</style>
