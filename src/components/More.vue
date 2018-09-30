<template>
	<div class="container text-center">
		<header class="row">
			<div class="text-center">
				<img class="logo" src="../assets/logo.png" alt="">
			</div>
		</header>
			<div class="sub-menu text-center row">
			<div>
				<a @click.prevent="getHtml(`http://www.demo-it.com.au/genesisstrata/paylevy/`)">
					<div class="icon-wrap">
					<img src="../assets/icons/3.png" alt="">
					</div>
					<div>Levy Payment</div>
				</a>
			</div>
			<div>
				<a @click.prevent="getHtml(`http://www.demo-it.com.au/genesisstrata/repair-request/`)">
					<div class="icon-wrap">
					<img src="../assets/icons/4.png" alt="">
					</div>
					<div>Repair Request</div>
				</a>
			</div>
			<div>
				<a @click.prevent="getHtml(`http://www.demo-it.com.au/genesisstrata/visitor-parking/`)">
					<div class="icon-wrap">
					<img src="../assets/icons/5.png" alt="">
					</div>
					<div>Visitor Parking</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name:'more',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
	}
  },
	methods:{
		/* getHtml(url) {
			var options = 'location=no';
      if (typeof a != "undefined") {
        cordova.InAppBrowser.open(url, "_blank",options);
      } else {
        window.open(url, "_top");
      }
		} */
		getHtml(val) {
      this.$store.commit("setUrl",val);
			this.$router.push('/iframe');
			console.log(val)
    }
	}
}
</script>

<style scoped>
header {
  padding: 10px 0;
  background-color: #fefefe;
}
.logo {
  width: 33.9%;
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
