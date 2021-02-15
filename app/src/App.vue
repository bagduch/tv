<template>
  <v-app>
    <sub-menu></sub-menu>
    <v-main :style="{background:dark?'rgb(39, 39, 39)':'white'}">
      <search-bar v-if="topBar"></search-bar>
      <router-view/>
      <cookie-law theme="dark-lime"></cookie-law>
    </v-main>
  </v-app>
</template>

<script>
import SubMenu from "@/components/SubMenu";
import {mapState} from "vuex";
import SearchBar from "@/components/SearchBar";
import CookieLaw from 'vue-cookie-law'

export default {
  name: "App",
  components: {SearchBar, SubMenu, CookieLaw},
  computed: {
    ...mapState([
      "dark"
    ])
  },
  watch: {
    '$route'() {
      this.$route.name == 'item' ? this.topBar = false : this.topBar = true

    }
  },
  created() {
    if (this.$route.name == 'item') {
      this.topBar = false
    }
  },
  data: () => ({
    //
    topBar: true

  })
};
</script>
<style>
::-webkit-scrollbar {
  display: none;
}
</style>
