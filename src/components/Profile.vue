<template>
	<div class="container text-center">
		<header class="row">
			<div class="text-center">
				<img class="logo" src="../assets/logo.png" alt="">
			</div>
		</header>
    <loading v-if="loading"></loading> 	
	</div>
</template>

<script>
export default {
  name: "profile",
  data() {
    return {
      loading: true
    };
  },
  methods: {
    getHtml(url) {
      var options = "location=no";
      if (typeof a != "undefined") {
        cordova.InAppBrowser.open(url, "_blank", options);
        this.loading = false;
      } else {
        window.open(url, "_top");
        this.loading = false;
      }
    }
  },
  created() {
    this.getHtml(`http://www.demo-it.com.au/genesisstrata/admin`);
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
h4 {
  margin-top: 25%;
  color: gray;
}
.container {
  background: #fff;
}
</style>
