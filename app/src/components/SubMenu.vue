<template>
  <v-navigation-drawer app :dark="dark" class="pt-4" mini-variant>
    <v-btn :to="{name:'Home'}" icon exact>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn :to="{name:'Search',params:{main:1}}" icon >
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn :to="{name:'Search',params:{main:2}}" icon >
      <v-icon>mdi-television</v-icon>
    </v-btn>
    <v-btn :to="{name:'Search',params:{main:3}}" icon >
      <v-icon>mdi-radio</v-icon>
    </v-btn>
    <v-btn :to="{name:'Search',params:{main:4}}" icon >
      <v-icon>mdi-cow</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn @click="changeLight" icon>
      <v-icon v-if="dark"
      >mdi-lightbulb-on-outline
      </v-icon>
      <v-icon v-else
      >mdi-lightbulb
      </v-icon>
    </v-btn>
  </v-navigation-drawer>
</template>
<script>
import {mapState} from "vuex";

export default {
  computed: mapState({
    dark: state => state.dark
  }),
  data() {
    return {
      items: [
        {title: "Home", icon: "mdi-view-dashboard"},
        {title: "About", icon: "mdi-forum"}
      ],
      links: ["Home", "Contacts", "Settings"],
      mini: true
    };
  },
  methods: {
    changeLight() {
      console.log(!this.dark);
      this.$store.commit("dark", !this.dark);
    }
  }
};
</script>
<style scoped>
.v-btn {
  margin-left: 10px;
  margin-bottom: 15px;
}
</style>
