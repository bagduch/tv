<template>
  <div class="home">
    <filter-bar></filter-bar>
    <feature-grid v-if="data" :data="data" :total="total"></feature-grid>
    <v-container fill-height fluid v-else>
      <v-row align="center"
             justify="center">
        <v-col>
          什么也没找到
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import FeatureGrid from "@/components/FeatureGrid";
import FilterBar from "@/components/FilterBar";

export default {
  name: "Search",
  components: {FilterBar, FeatureGrid},

  data: () => ({
    //
    data: null,
    total: 0,
  }),
  watch: {
    '$route'() {
      console.log("2")
      this.update()
    },
  },
  created() {
    console.log("1")
    this.update()
  },
  methods: {

    update() {
      if (Object.entries(this.$route.query).length !== 0) {
        axios.get(window.api + "search", {params: this.$route.query}).then(r => {
          this.data = r.data.data;
          this.total = r.data.total
        });
      }

    }
  }
};
</script>
