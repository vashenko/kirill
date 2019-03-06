<script lang="ts">
import { People } from "@/store/decorators";
import { Person, Post } from "@/types/People";
import { Vue, Component } from "vue-property-decorator";
import * as userService from "@/services/person";

import store from "@/store/index";

@Component({})
export default class PersonProfile extends Vue {
  user: Person = {
    name: null,
    surname: null,
    id: null,
    imgUrl: null,
    proffesion: null,
    about: null,
    rating: null,
    isBanned: null,
    posts: null
  };
  created() {
    const { id } = this.$route.params;
    userService
      .getUserById(id)
      .then(user => {
        this.user = user.data;
        console.log(this.user);
      })
      .catch(error => console.log(error));
  }
}
</script>

<template>

</template>

<style scoped lang="scss">
</style>
