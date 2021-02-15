<template>
  <v-app-bar :dark="dark" app>
    <v-autocomplete
        v-model="select"
        :loading="loading"
        :items="items"
        :search-input.sync="search"
        no-filter
        class="mx-4"
        flat
        label="关键字搜索"
        hide-no-data
        hide-details
        item-text="vod_name"
        item-value="_id"
        @input="update"

    ></v-autocomplete>

  </v-app-bar>
</template>

<script>
import {mapState} from "vuex";
import axios from "axios";

export default {
  name: "SearchBar",
  computed: {
    ...mapState([
      "dark"
    ])
  },
  watch: {
    search(val) {
      this.loading = true
      axios.get(window.api + 'search', {params: {vod_name: val}}).then(r => {
        this.items = r.data.data
        this.loading = false
      })
    }
  },
  data() {
    return {
      loading: false,
      items: [],
      search: null,
      select: null,
    }
  },
  methods: {
    update() {
      this.$router.push({name: 'item', params: {id: this.select}})
    }
  }
}
</script>