<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { People } from "@/store/decorators";

import PersonCard from "@/components/PersonCard.vue";

@Component({
  components: {
    PersonCard
  }
})
export default class PeopleList extends Vue {
  @People.State people
}
</script>

<template>
  <v-layout
    row
    wrap
  >
    <PersonCard
      v-for="person in people"
      :key="person.id"
      :person="person"
    />
  </v-layout>
</template>

<style scoped lang="scss">
</style>
