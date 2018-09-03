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
				<a href="javascript:;">
					<div class="icon-wrap">
						<img src="../assets/icons/chat.svg" alt="">
					</div>
					<div>Notification</div>
				</a>
			</div>
			<div>
				<a href="javascript:;">
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
		<footer-menu :navindex='0'></footer-menu>
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
      msg: 'Welcome to Your Vue.js App'
	}
  }
}
</script>

<style scoped>
.sub-menu>div{
	width: 25%;
}
.sub-menu{
	display: flex;
	justify-content: space-around;
}
.sub-menu .icon-wrap{
	border-radius: 50%;
	border: 2px solid #a0a0a0;
	padding: 15px;
	margin: 0 auto 8px;
	width: 70px;
}
.sub-menu img{
	width: 100%;
}
header{
	padding: 15px 0;
	background-color: #f4f4f4;
}
.main{
	height: 280px;
}
.main img{
	height: 100%;
	width: 100%;
	overflow: hidden;
}
.logo{
	height: 40px;
}
.sub-menu{
	padding: 20px 0;
	background-color: #f4f4f4;
	color: #a0a0a0;
}
</style>
