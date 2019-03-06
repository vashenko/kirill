<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Posts } from "@/store/decorators";

import PersonCard from "@/components/PersonCard.vue";

@Component({
  components: {}
})
export default class PeopleList extends Vue {
  @Posts.State posts;
}
</script>

<template>
  <v-layout
    row
    wrap
  >
    H1
  </v-layout>
</template>

<style scoped lang="scss">
</style>
