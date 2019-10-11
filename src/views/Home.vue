<template>
  <v-container fluid>
    <v-row>
      <v-col class="text-center" cols="12">
        <v-row
          :align="alignment"
          :justify="justify"
          class="grey lighten-5"
        >
          <v-btn class="ma-3 pa-3 accent" to="/meet_ups">
            Explore meet ups
          </v-btn>
          <v-btn class="ma-3 pa-3 accent" to="/new_meet_up">
            Organize meet ups
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-carousel
          cycle
          interval="4500"
          show-arrows-on-hover
          style="cursor: pointer"
        >
          <v-carousel-item
            v-for="meet_up in meet_ups"
            :key="meet_up.id"
            :src="meet_up.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
            @click="onLoadMeetUp(meet_up.id)"
          >
            <v-row>
              <v-col
                class="fill-height"
                align="center"
                justify="center"
              >
                <div class="display-3 white--text">{{ meet_up.title }}</div>
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  data () {
    return {
      alignmentsAvailable: [
        'start',
        'center',
        'end',
        'baseline',
        'stretch'
      ],
      alignment: 'center',
      justifyAvailable: [
        'start',
        'center',
        'end',
        'space-around',
        'space-between'
      ],
      justify: 'center'
    }
  },
  computed: {
    meet_ups () {
      return this.$store.getters.featuredMeetUps
    }
  },
  components: {
  },
  methods: {
    onLoadMeetUp (id) {
      this.$router.push('/meet_ups/' + id)
    }
  }
}

</script>
