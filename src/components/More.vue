<template>
	<div class="container">
		<header class="row">
			<div class="text-center">
				More
			</div>
		</header>
		
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
</style>
