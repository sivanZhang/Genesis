<template>
	<div class="container text-center">
		<header class="row">
			<div>
				More
			</div>
		</header>
		<h4>To be expected</h4>
		<img src="../assets/lighthouse.jpg" alt="">
		<img src="../assets/lighthouse.jpg" alt="">
		<img src="../assets/lighthouse.jpg" alt="">
		<img src="../assets/lighthouse.jpg" alt="">
		<img src="../assets/lighthouse.jpg" alt="">
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
  }
}
</script>

<style scoped>
header{
	padding: 15px 0;
	background-color: #f4f4f4;
}
h4{
	margin-top: 25%;
	color: gray;
}
img{
	max-width: 100%;
}
</style>
