<script lang="ts">
import { People } from "@/store/decorators";
import { Vue, Component } from "vue-property-decorator";
import store from "@/store/index";

@Component({})
export default class PersonProfile extends Vue {
  @People.State person;

  created() {
    // console.log(store);
    // console.log(this.person);
  }
}
</script>

<template>

</template>

<style scoped lang="scss">
</style>
