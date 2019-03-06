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

  show: boolean = false;

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
  <v-layout
    row
    wrap
  >

    <v-flex
      xs12
      lg8
      md6
    >
      <v-card>
        <div class="bck">
          <v-img
            aspect-ratio="2.75"
            :src="`${user.imgUrl}`"
            class="profile--card__img"
            min-width="175px"
            min-height="175px"
          ></v-img>
        </div>
        <div class="profile--card__content">
          <div class="profile--card__credentionals">
            <h3 class="headline mb-0"> {{user.name}} {{user.surname}}</h3>
            <p class="profile--card__credentionals--proffesion">{{user.proffesion}}</p>
          </div>
          <div class="profile--card__socials"></div>
        </div>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            icon
            @click="show = !show"
          >
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text
            v-show="show"
            class="profile--card__about"
          >
            {{user.about}}
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style scoped lang="scss">
.bck {
  position: relative;
  width: 100%;
  height: 30vh;
  background-image: url("../assets/large_zCIaL3_HYrOkibcEbIDEFAhoYdajgnqpDz0EIVYXIck.jpeg");
}

.profile--card__img {
  border-radius: 50%;
  position: absolute;
  bottom: -80px;
  left: 2em;
}

.profile--card__content {
  display: flex;
  flex: row wrap;
}

.profile--card__credentionals {
  padding-top: 5em;
  text-align: left;
  flex: 50%;
  margin-left: 3em;
  margin-top: 1em;
}

.profile--card__socials {
  flex: 50%;
}

.profile--card_user__info {
  text-align: left;
}

.profile--card__credentionals--proffesion {
  margin-top: 0.5em;
  font-size: 1.25em;
}

.profile--card__about {
  font-size: 1.15em;
}

// @media (min-width: 481px) and (max-width: 767px) {
// }
</style>

