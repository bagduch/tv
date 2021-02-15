<template>
  <v-item-group class="pa-4">
    <v-row>
      <v-col v-for="(item, i) in data" :key="i" cols="12" md="2" xl="1">
        <v-card :dark="dark" height="380" :to="{name:'item',params:{id:item._id}}">
          <v-img height="200" :src="item.vod_pic"></v-img>

          <v-card-title
              :class="'main-title'"
              v-html="item.vod_name"
          ></v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                  :value="rate(5,1)"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
              ></v-rating>

              <div class="grey--text ml-4">
                {{ rate(5, 1) }} ({{ rate(1000, 1) }})
              </div>
            </v-row>

            <div class="my-4 subtitle-1" v-html="item.vod_continu"></div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn> {{ item.vod_year }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-bottom-navigation app :dark="dark">
      <v-pagination v-if="totalPage>0"
                    :dark="dark"
                    v-model="page"
                    :length="totalPage"
                    :total-visible="7"
      ></v-pagination>
    </v-bottom-navigation>
  </v-item-group>
</template>
<script>
import {mapState} from "vuex";

export default {
  name: "FeatureGrid",
  props: ["data", "total"],
  computed: {
    ...mapState({
      dark: state => state.dark
    }),
    totalPage() {
      return Math.ceil(this.total / 20)
    },

  },
  watch: {
    page() {
      let page = {page: this.page}
      let query = {...this.$route.query, ...page};
      this.$router.replace({query: query})
    }
  },
  data: () => ({
    page: 1,
  }),
  methods: {
    rate(max, min) {
      return Math.floor(Math.random() * (max - min) + min)
    }
  }
};
</script>
<style scoped>
.v-card__title {
  overflow: hidden;
  height: 55px;
}
</style>
