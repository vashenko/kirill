<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Person } from "@/types/People";

@Component({})
export default class PersonCard extends Vue {
  @Prop({ default: () => {} })
  person: Person;

  show: boolean = false;
}
</script>

<template>
  <v-flex
    xs12
    sm12
    lg4
    md4
  >
    <v-card>
      <v-img
        class="white--text"
        max-height="350px"
        max-width="100%"
        :src="`${person.imgUrl}`"
      >
        <v-container
          fill-height
          fluid
        >
          <v-layout
            fill-height
            justify-center
            align-end
          >
          </v-layout>
        </v-container>
      </v-img>
      <v-card-text>
        <p class="text-lg-center headline black--text">{{person.name}} {{person.surname}}</p>
        <p class="subheading">{{person.proffesion}}</p>
      </v-card-text>

      <v-card-actions>
        Person description
        <v-spacer></v-spacer>
        <v-btn
          icon
          @click="show = !show"
        >
          <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-slide-y-transition>
        <v-card-text v-show="show">
          {{person.about}}
        </v-card-text>
      </v-slide-y-transition>
    </v-card>
  </v-flex>
</template>

<style scoped lang="scss">
v-card {
  cursor: pointer;
}
</style>
