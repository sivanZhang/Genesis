<template>
	<div class="container text-center">
	  <header class="row">
			<div class="text-center">
				<img class="logo" src="../assets/logo.png" alt="">
			</div>
		</header>
    <div class="iframe-warp row">
      <iframe id="show-iframe" frameborder="0" scrolling="auto" :src="$store.state.url" allowfullscreen></iframe>
    </div>
    <loading v-if="loading"></loading>
	</div>
</template>

<script>
export default {
  name: "Iframe",
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    const oIframe = document.getElementById("show-iframe")
    ,deviceWidth = document.documentElement.clientWidth
    ,deviceHeight = document.documentElement.clientHeight;
    oIframe.style.width = deviceWidth + "px";
    oIframe.style.height = deviceHeight + "px";
    oIframe.onload = () => {
      this.loading = false;
    };
  }
};
</script>

<style scoped>
header {
  padding: 10px 0;
  background-color: #fefefe;
}
.logo {
  width: 33.9%;
}
.iframe-warp {
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll;
  z-index: 99;
  padding-bottom: 46px;
}
.container {
  background: #fff;
}
</style>
