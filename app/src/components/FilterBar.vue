<template>
  <v-card :dark="dark">
    <v-card-text>
      <h2 class="title mb-2">
        主要
      </h2>
      <v-chip-group
          v-model="main"
          column
      >
        <v-chip
            v-for="item in data[0]" :key="item.list_id"
            filter
            outlined
            :value="item.list_id"
        >
          {{ item.list_name }}
        </v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-text v-if="data[main]">
      <h2 class="title mb-2">
        类型
      </h2>
      <v-chip-group
          v-model="filter.vod_cid"
          column
      >
        <v-chip
            v-for="item in data[main]" :key="item.list_id"
            filter
            outlined
            :value="item.list_id"
        >
          {{ item.list_name }}
        </v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-text>
      <h2 class="title mb-2">
        年代
      </h2>
      <v-chip-group
          v-model="filter.vod_year"
          column
      >
        <v-chip
            v-for="item in 11" :key="item"
            filter
            outlined
            :value="currentYear + 1 - item"
        >
          {{ currentYear + 1 - item }}
        </v-chip>

      </v-chip-group>
    </v-card-text>


  </v-card>
</template>

<script>
import {mapState} from "vuex";

export default {
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
    ...mapState({
      dark: state => state.dark,
      data: state => {
        let key = "list_parent";
        return state.list
            .reduce((hash, obj) => {
              if (obj[key] === undefined) return hash;
              return Object.assign(hash, {[obj[key]]: (hash[obj[key]] || []).concat(obj)})
            }, {})
        // return state.list
      }
    })
  },
  data: () => ({
    main: null,
    filter: {
      vod_year: null,
      vod_cid: null,
    },
  }),
  watch: {
    '$route'() {
      this.update();
    },
    main(val) {
      this.filter.vod_cid = typeof this.data[this.main] !== "undefined" ? this.data[this.main][0].list_id : val
      this.filter.vod_year = this.currentYear
      this.$router.replace({params: {main: this.main}})
    },
    filter: {
      handler() {
        this.$router.replace({query: this.filter})
      },
      deep: true
    }
  },
  created() {
    this.update();
  },
  methods: {
    update() {
      if (typeof this.$route.params['main'] !== "undefined")
        this.main = parseInt(this.$route.params['main'])
    }
  }
}
</script>