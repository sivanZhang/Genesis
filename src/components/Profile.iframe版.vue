<template>
	<div class="container text-center">
		<header class="row">
			<div class="text-center">
				<img class="logo" src="../assets/logo.png" alt="">
			</div>
		</header>
<div class="iframe-warp row">
	<iframe id="show-iframe" frameborder=0 scrolling='auto' src="http://www.demo-it.com.au/genesisstrata/admin"></iframe>
</div>

<loading v-if="loading"></loading> 
			
	</div>
</template>

<script>
/* import footerMenu from './menu'; */
export default {
  name: "profile" /* 
	components: {
    footerMenu
  }, */,
  data() {
    return {

	  loading: true
    };
  },
  mounted() {
    const oIframe = document.getElementById("show-iframe");
    const deviceWidth = document.documentElement.clientWidth;
    const deviceHeight = document.documentElement.clientHeight;
    oIframe.style.width = deviceWidth + "px";
    oIframe.style.height = deviceHeight + "px";
    oIframe.onload = () => {
	  this.loading = false;
    };
  }
};
</script>

<style scoped>
.iframe-wrap {
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll;
  z-index: 99;
  padding-bottom: 46px;
}
header {
  padding: 10px 0;
  background-color: #fefefe;
}
.logo {
  width: 33.9%;
}
h4 {
  margin-top: 25%;
  color: gray;
}
.container {
  background: #fff;
}
</style>
