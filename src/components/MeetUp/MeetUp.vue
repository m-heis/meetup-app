<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card
          class="mx-auto"
          max-width="900"
        >
          <v-img
            class="white--text"
            height="200px"
            :src="meet_up.src"
          >
            <v-card-title class="align-end fill-height">{{ meet_up.title }}</v-card-title>
          </v-img>

          <v-card-text>
            <span>{{ meet_up.date | date }}</span><br>
              <span class="text--primary">
              <span>{{ meet_up.location }}</span><br>
              <span>{{ meet_up.description }}</span>
            </span>
          </v-card-text>

          <v-card-actions>
            <v-btn
              text
              color="orange"
            >
              Register
            </v-btn>
          </v-card-actions>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    meet_up () {
      return this.$store.getters.loadedMeetUp(this.id)
    }
  }
}
</script>

<style scoped>

</style>
