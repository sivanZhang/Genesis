<template>
	<div class="container text-center">
		<header class="row">
			<div>
				More
			</div>
		</header>
			<div class="sub-menu text-center row">
			<div>
				<a @click.prevent="getAppBrowser('http://www.demo-it.com.au/genesisstrata/paylevy/')">
					<div class="icon-wrap">
					<img src="../assets/icons/3.png" alt="">
					</div>
					<div>Levy Payment</div>
				</a>
			</div>
			<div>
				<a @click.prevent="getAppBrowser('http://www.demo-it.com.au/genesisstrata/repair-request/')">
					<div class="icon-wrap">
					<img src="../assets/icons/4.png" alt="">
					</div>
					<div>Rrepair Request</div>
				</a>
			</div>
			<div>
				<a @click.prevent="getAppBrowser('http://www.demo-it.com.au/genesisstrata/visitor-parking/')">
					<div class="icon-wrap">
					<img src="../assets/icons/5.png" alt="">
					</div>
					<div>Visitor Parking</div>
				</a>
			</div>
		</div><!--  -->
		<footer-menu></footer-menu>
	</div>
</template>

<script>
import footerMenu from './menu';
export default {
	name:'more',
	components: {
    footerMenu
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
	}
  },
	methods:{
		getAppBrowser(url) {
			var options = 'location=no';
      if (typeof a != "undefined") {
        cordova.InAppBrowser.open(url, "_blank",options);
      } else {
        window.open(url, "_top");
      }
    }
	}
}
</script>

<style scoped>
header{
	padding: 15px 0;
	background-color: #fefefe;
	font-size: 16px;
	font-weight: 600;
}
h4{
	margin-top: 25%;
	color: gray;
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
	margin: 30px auto
}
.sub-menu .icon-wrap {
  margin: 0 auto 8px;
  width: 56%;
}
.sub-menu img {
  width: 100%;
}
</style>
