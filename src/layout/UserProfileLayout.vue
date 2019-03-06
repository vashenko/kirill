<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class PageLayout extends Vue {}
</script>

<template>
  <v-layout
    row
    nowrap
  >
    <v-flex xs12>
      <slot name="navbar"></slot>
    </v-flex>
    <v-flex xs12>
      <slot name="content"></slot>
    </v-flex>
  </v-layout>
</template>

<style lang="scss" scoped>
</style>