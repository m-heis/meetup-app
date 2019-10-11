<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row
          :align="alignment"
          :justify="justify"
          class="grey lighten-5"
        >
          <h4 class="text-uppercase"> Create a new meet up </h4>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row
          :align="alignment"
          :justify="justify"
        >
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              @submit.prevent="onCreateMeetUp"
            >
              <v-text-field
                name="title"
                id="title"
                v-model="title"
                :counter="30"
                :rules="titleRules"
                label="Title"
                outlined
                clearable
                required
              ></v-text-field>

              <v-text-field
                name="location"
                id="location"
                v-model="location"
                :counter="40"
                :rules="locationRules"
                label="Location"
                outlined
                clearable
                required
              ></v-text-field>

              <v-text-field
                name="src"
                id="src"
                v-model="src"
                :rules="imageUrlRules"
                label="Image URL"
                outlined
                clearable
                required
              ></v-text-field>

              <img :src="src" height="150">

              <v-textarea
                name="description"
                id="description"
                v-model="description"
                :counter="200"
                :rules="descriptionRules"
                label="Description"
                outlined
                clearable
                required
              >
              </v-textarea>

              <v-row justify="center" class="mb-3">
                <v-date-picker v-model="date"></v-date-picker>
              </v-row>

              <v-row justify="center" class="mb-3">
                <v-time-picker v-model="time" format="24hr"></v-time-picker>
              </v-row>

              <v-row justify="center">
                <v-btn
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                  type="submit"
                  @click="validate"
                >
                  Create meet up
                </v-btn>

                <v-btn
                  color="error"
                  class="mr-4"
                  @click="reset"
                >
                  Reset Form
                </v-btn>
              </v-row>

            </v-form>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    alignment: 'start',
    justify: 'center',
    valid: false,
    title: '',
    titleRules: [
      v => !!v || 'Title is required',
      v => (v && v.length <= 30) || 'Title must be less than 30 characters'
    ],
    location: '',
    locationRules: [
      v => !!v || 'Location is required',
      v => (v && v.length <= 40) || 'Location must be less than 40 characters'
    ],
    src: '',
    imageUrlRules: [
      v => !!v || 'Image URL is required'
    ],
    description: '',
    descriptionRules: [
      v => !!v || 'Description is required',
      v => (v && v.length <= 200) || 'Description must be less than 200 characters'
    ],
    date: null,
    time: new Date()
  }),
  computed: {
    submittableDateAndTime () {
      const date = new Date(this.date)
      if (typeof this.date === 'string') {
        const hours = this.time.match(/^(\d+)/)[1]
        const minutes = this.time.match(/:(\d+)/)[1]
        date.setHours(hours)
        date.getMinutes(minutes)
      } else {
        date.setHours(this.time.getHours())
        date.setMinutes(this.time.getMinutes())
      }
      return date
    }
  },
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    onCreateMeetUp () {
      const meetUpData = {
        title: this.title,
        location: this.location,
        src: this.src,
        description: this.description,
        date: this.submittableDateAndTime
      }
      this.$store.dispatch('createMeetUp', meetUpData)
      this.$router.push('/meet_ups')
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>

<style scoped>

  h4{
    font-size: 30px;
    color: #1a1aff;
  }

</style>
