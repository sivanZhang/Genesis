<template>
	<div class="container">
		<header class="row">
			<div class="text-center">
				<img class="logo" src="../assets/logo.png" alt="">
			</div>
		</header>
		
		<footer-menu :navindex='2'></footer-menu>
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
.logo{
	height: 40px;
}
</style>
