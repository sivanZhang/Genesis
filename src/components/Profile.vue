<template>
	<div class="container text-center">
		<header class="row">
			<div class="text-center">
				Profile
			</div>
		</header>
			<h4>To be expected</h4>
		<footer-menu></footer-menu>
	</div>
</template>

<script>
import footerMenu from './menu';
export default {
	name:'profile',
	components: {
    footerMenu
  },
  data () {
    return {
	}
	},
	berorCreated(){
		location.href="http://www.w3school.com.cn"/* 
		window.open("http://www.w3school.com.cn","_top") */
		/* cordova.InAppBrowser.open('http://www.w3school.com.cn', '_blank'); */
	}
}
</script>

<style scoped>
header{
	padding: 15px 0;
	background-color: #f4f4f4;
	text-align: center;
}
h4{
	margin-top: 25%;
	color: gray;
}
</style>
