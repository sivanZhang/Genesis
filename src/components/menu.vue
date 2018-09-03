<template>
  <ul class="row">
    <li v-for="(item,index) in nav"
    :key="index"
    :class="navindex === index ? 'active' : ''"
    @click="routerLink(item.path)"
    >
  <img class="icon" :src="navindex == index ? item.src_act : item.src" alt="icon">
    <div>{{item.name}}</div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        {
          src: require(`../assets/icons/home.svg`),
          src_act:require(`../assets/icons/home_act.svg`),
          name: `Home`,
          path: "/"
        },
        {
          src: require(`../assets/icons/resale.svg`),
          src_act:require(`../assets/icons/resale_act.svg`),
          name: `Resale`,
          path: "/resale"
        },
        {
          src: require(`../assets/icons/plus.svg`),
          src_act:require(`../assets/icons/plus_act.svg`),
          name: `More`,
          path: "/more"
        },
        {
          src: require(`../assets/icons/list.svg`),
          src_act:require(`../assets/icons/list_act.svg`),
          name: `Servises`,
          path: "/servises"
        },
        {
          src: require(`../assets/icons/user.svg`),
          src_act:require(`../assets/icons/user_act.svg`),
          name: "Profile",
          path: "/profile"
        }
      ]
    };
  },
  methods: {
    routerLink(path) {
      this.$router.push(path);
    }
  },
  props: ["navindex"]
};
</script>

<style scoped>
ul {
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100%;
  padding: 8px 0;
  justify-content: space-between;
  background-color: #f4f4f4;
  color: #a0a0a0;
}
ul::after {
  content: "";
  background-color: #f4f4f4;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
} 
ul > li {
  width: 20%;
  text-align: center;
}
img.icon {
  width: 30px;
  height: 30px;
}
li:nth-child(3){
  transform: translateY(-10px)
}
.active {
  color: #333;
}
</style>
