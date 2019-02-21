<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class PageLayout extends Vue {}
</script>

<template>
  <v-container
    grid-list-md
    text-xs-center
  >
    <v-layout
      row
      wrap
      align-center
      justify-center
      fill-height
    >
      <v-flex xs12>
        <slot name="navbar"></slot>
      </v-flex>
      <v-flex xs12>
        <slot name="content"></slot>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style lang="scss" scoped>
</style>