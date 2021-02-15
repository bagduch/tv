<template>
  <v-card height="100%">
    <top-bar :menu="menu" v-on:on-select="play"></top-bar>
    <watch-right :menu="menu" :data="data"></watch-right>

    <v-card height="100%" :dark="dark">
      <iframe v-if="video" width="100%" style="height: 100%" class="embed-responsive-item"
              :src="video" frameborder="0" border="0" @load="loading=false"
              marginwidth="0" marginheight="0" scrolling="no"
              allowfullscreen="true"></iframe>

      <v-dialog
          v-model="loading"
          hide-overlay
          persistent
          width="300"
      >
        <v-card
            dark
        >
          <v-card-text>
            努力加载中..
            <v-progress-linear
                indeterminate
                color="white"
                class="mb-0"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-card>
  </v-card>
</template>
<script>
import axios from "axios";
import {mapState} from "vuex";
import WatchRight from "@/components/WatchRight";
import TopBar from "@/components/TopBar";

export default {
  components: {TopBar, WatchRight},
  computed: {
    ...mapState(['dark'])
  },
  data: () => ({
    data: null,
    loading: true,
    menu: [],
    video: null,

  }),
  created() {
    this.init()
  },

  methods: {
    init() {
      axios.get(window.api + 'item', {params: {id: this.$route.params.id}}).then(r => {
        this.data = r.data
        let menu = []
        r.data.vod_url.split("$$$")[0].split("\n").forEach((item, i) => {
          let list = item.split("$")
          var n = list[1].search(/m3u8$/g);
          if (n == -1)
            menu.push({id: i, title: list[0], url: list[1]});
        })

        this.menu = menu
        this.video = this.menu[0].url
      })
    },
    play(selected) {
      this.video = this.menu[selected].url
    }

  }
}
</script>

<style scoped>
.floating-bottom {
  position: absolute;
  right: 10px;
  top: 0px;
}
</style>