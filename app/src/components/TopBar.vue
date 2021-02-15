<template>
  <v-app-bar
      absolute
      dark
      class="action-tool-bar"
  >
    <v-spacer></v-spacer>
    <v-col cols="auto">
      <v-select hide-details class="mx-4" :items="menu" v-model="selected" item-text="title"
                item-value="id"></v-select>
    </v-col>
    <v-btn @click="prev" :disabled="selected<1">
      上一集
    </v-btn>
    <v-btn @click="next" :disabled="selected+2>menu.length">
      下一集
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  props: ['menu'],
  data: () => ({
    collapse: false,
    selected: 0
  }),
  watch: {
    selected() {
      this.$emit('on-select', this.selected)
    }
  },
  methods: {
    next() {
      this.selected++;
    },
    prev() {
      this.selected--;
    }

  }
}
</script>

<style scoped>
.action-tool-bar {
  left: auto !important;
  margin-top: 16px !important;;
  right: 40px !important;;
}
</style>