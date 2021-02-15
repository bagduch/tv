<template>
  <div class="home pa-4">
    <v-toolbar :dark="dark">
      <v-toolbar-title>最新更新</v-toolbar-title>
    </v-toolbar>
    <feature-grid v-if="data" :data="data"></feature-grid>
  </div>
</template>

<script>

import {mapState} from "vuex";
import axios from "axios";
import FeatureGrid from "@/components/FeatureGrid";

export default {
  name: "Home",
  components: {FeatureGrid},
  computed: {
    ...mapState(['dark'])
  },
  created() {
    axios.get(window.api + "recent").then(r => {
      this.data = r.data
    });
  },
  data: () => ({
    //
    data: null,
    total: 0,
  }),


};
</script>
