<template>
	<div class="container">
		<header class="row">
			<div class="text-center">
				<img class="logo" src="../assets/logo.png" alt="">
			</div>
		</header>
		<div class="main row">
			<img src="../assets/lighthouse.jpg" alt="">
		</div>
		<div class="sub-menu text-center row">
			<div>
				<a  @click.prevent="getHtml(`http://www.demo-it.com.au/genesisstrata/category/notice/`)">
					<div class="icon-wrap">
						<img src="../assets/icons/2.png" alt="">
					</div>
					<div>Notification</div>
				</a>
			</div>
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
    	<h4>Notice</h4>
      <p>Aebitis beatae tempore iure laboriosam accusamus consequatur reiciendis totam ab optio nulla odio modi corporis sit veniam facere! Expedita of the sequi nostrum officiis cupiditate asperiores suscipit ea! Voluptatibus reiciendis obcaecati, inventore corporis, qui recusandae aliquam consequuntur necessitatibus fugiat distinctio, nulla numquam ut. Vitae tempora vero temporibus optio velit illo placeat aut est quisquam, nemo commodi officiis iste sint, vel voluptas quaerat? Sed eius iste, reprehenderit mollitia saepe, veniam aliquam molestias, incidunt magni repudiandae enim.

      A laborum quis, inventore ea totam, ipsam sapiente id aliquid labore sit maxime sed eveniet nesciunt corporis distinctio earum atque ipsa officia facilis. Eius quos, maiores culpa atque voluptate quae quam laudantium sed veniam impedit neque tempora ipsam. Itaque deserunt minus, repellendus aspernatur laboriosam voluptas totam animi dolorum tempore facere. Repudiandae velit debitis natus doloremque, dolore sed cum assumenda animi a ab totam porro ducimus fuga, ex id non quis nesciunt eos eligendi accusantium voluptatum est sapiente molestiae voluptates.

      Quis iure soluta esse officia, fugit natus, beatae. Inventore unde maiores, rem repellat porro rerum, eaque nostrum, quasi deserunt reprehenderit totam mollitia fuga? Mollitia, porro sint sed, placeat nostrum molestiae incidunt aut sunt officiis laudantium minima numquam doloremque in eaque eum explicabo maxime dicta nulla. Asperiores eius voluptatibus autem quis quo consectetur facilis velit maxime vero dicta delectus commodi culpa optio, doloremque dolor officiis nam, eos sunt impedit molestias temporibus iste quae. Praesentium, ducimus facere illo veniam nemo quo suscipit quidem, veritatis nesciunt tempora porro nam voluptatem corrupti!

      Impedit temporibus cupiditate repudiandae rerum nemo magni excepturi, facere nisi, id vero ipsam praesentium beatae esse natus quam, doloremque provident! Sit, similique earum, neque consequuntur eaque nostrum! Cum molestias qui itaque perspiciatis ullam laudantium ipsum. Eveniet eum saepe officia. Fugit quasi sit sint architecto, dolorum, harum est facilis cumque debitis aperiam veniam qui deleniti possimus distinctio quos sapiente minima officiis assumenda ratione maxime. Quasi beatae id inventore molestias harum necessitatibus. Magnam atque dolore minima harum, suscipit quis laudantium delectus, mollitia veritatis alias aperiam.
      </p>
	</div>
</template>

<script>
export default {
  data() {
    return {
      title: "Genesis"
    };
  },
  methods: {
    getHtml(val) {
      this.$store.commit("setUrl",val);
      this.$router.push('/iframe');
    }
  },
  mounted() {
    let width = $(".main").width();
	$(".main").css("height", width * 0.56 + "px");
  }
};
</script>

<style scoped>
p {
  word-break: keep-all;
  word-wrap: break-word;
  white-space: pre-wrap;
  text-align: justify;
  text-justify: inter-ideograph;
  padding-bottom: 60px;
}
h4 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
}
.sub-menu .icon-wrap {
  margin: 0 auto 8px;
  width: 56%;
}
.sub-menu img {
  width: 100%;
}
header {
  padding: 10px 0;
  background-color: #fefefe;
}
.main img {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.logo {
  width: 33.9%;
}
.sub-menu {
  padding: 20px 0;
  background-color: #f4f4f4;
  color: #a0a0a0;
}
</style>
