<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card
          class="mx-auto my-5"
          max-width="900"
          v-for="meet_up in meet_ups"
          :key="meet_up.id"
        >
          <v-img
            :src="meet_up.src"
            height="200px"
          ></v-img>

          <v-card-title>
            <div>
              {{ meet_up.title }}
              <div class="grey--text subtitle-1">{{ meet_up.date | date }}</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn
              text
              color="purple"
              :to="'/meet_ups/' + meet_up.id"
            >
              View meet up
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    meet_ups () {
      return this.$store.getters.loadedMeetUps
    }
  }
}
</script>

<style scoped>

</style>
