<template>
	<div class="container text-center">
		<header class="row">
			<div class="text-center">
				Servises
			</div>
		</header>
			<h4>To be expected</h4>
		<footer-menu></footer-menu>
	</div>
</template>

<script>
import footerMenu from './menu';
export default {
	name:'servises',
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
header{
	padding: 15px 0;
	background-color: #f4f4f4;
}
.logo{
	height: 40px;
}
h4{
	margin-top: 25%;
	color: gray;
}
</style>
