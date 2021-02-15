<template>
  <v-navigation-drawer
      app
      right
      :dark="dark"
      v-if="data"
  >
    <template v-slot:prepend>
      <v-card>
        <v-img :src="data.vod_pic"/>
        <v-card-title>
          {{ data.vod_name }}
        </v-card-title>
        <v-card-subtitle>{{ data.vod_actor }}</v-card-subtitle>
        <v-card-text v-html="data.vod_content"></v-card-text>
      </v-card>
    </template>

    <v-divider></v-divider>

  </v-navigation-drawer>
</template>
<script>
import {mapState} from "vuex";

export default {
  props: [ 'data'],
  computed: {
    ...mapState(['dark'])
  },
  data() {
    return {
      selected: 0
    }
  },
  watch: {
    selected() {
      this.$emit('on-select', this.selected)
    }
  }
}
</script>