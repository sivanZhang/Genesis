<template>
  <div class="row">
    <!-- <router-link v-for="(item,index) in nav" :key="index" :to="item.path" tag="a">
      <img class="icon" :src="$route.path==item.path ? item.src_act : item.src" alt="icon">
      <div>{{item.name}}</div>
    </router-link> -->
    <router-link :to="nav[0].path" >
    <img class="icon" :src="$route.path==nav[0].path ? nav[0].src_act : nav[0].src" alt="icon">
      <div>Home</div>
    </router-link>
    <router-link :to="nav[2].path" >
    <img class="icon" :src="$route.path==nav[2].path ? nav[2].src_act : nav[2].src" alt="icon">
      <div>More</div>
    </router-link>
    <a @click.prevent="getAppBrowser('http://www.demo-it.com.au/genesisstrata/admin')">
    <img class="icon" :src="nav[4].src" alt="icon">
      <div>Profile</div>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return { nav: [
         {
          src: require(`../assets/icons/home.svg`),
          src_act: require(`../assets/icons/home_act.svg`),
          name: `Home`,
          path: "/"
        },
        {
          src: require(`../assets/icons/resale.svg`),
          src_act: require(`../assets/icons/resale_act.svg`),
          name: `Resale`,
          path: "/resale"
        }, 
        {
          src: require(`../assets/icons/plus.svg`),
          src_act: require(`../assets/icons/plus_act.svg`),
          name: `More`,
          path: "/more"
        },
        {
          src: require(`../assets/icons/list.svg`),
          src_act: require(`../assets/icons/list_act.svg`),
          name: `Servises`,
          path: "/servises"
        }, 
        {
          /* src: require(`../assets/icons/user.svg`), */
          src: require(`../assets/icons/user.svg`),
          src_act: require(`../assets/icons/user_act.svg`),
          name: "Profile",
          path: "/profile"
        }
      ]
    }
  },
  methods:{
    getAppBrowser(url) {
      var options = 'location=no';
      if (typeof a != "undefined") {
        cordova.InAppBrowser.open(url, "_blank",options);
      } else {
        window.open(url, "_top");
      }
    }
  }
};
</script>

<style scoped lang='less'>
.row {
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100%;
  justify-content: space-between;
  background-color: #f4f4f4;
  color: #a0a0a0;
z-index: 100;
}
a {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  align-items:center;
  justify-content:flex-end;
  font-size: 12px;
  padding: 4px 0 2px;
  img.icon {
    width: 22px;
    margin-bottom: 4px;
  }
  div {
    line-height: 1.2;
  }
}
a:nth-child(2) {
  img.icon {
    position: absolute;
    width: 40px;
    height: 40px;
    transform: translateY(-30%);
    background-color: #f4f4f4;
    padding: 6px;
    border-radius: 50%;
  }
}

.router-link-exact-active {
  color: #333;
}
</style>
