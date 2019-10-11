import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetUps: [
      {
        src: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        id: '1',
        title: 'Meet up in Astana',
        date: new Date(),
        location: 'Astana',
        description: 'Awesome meet up'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
        id: '2',
        title: 'Meet up in Almaty',
        date: new Date(),
        location: 'Almaty',
        description: 'Awesome meet up'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/cards/store.jpg',
        id: '3',
        title: 'Meet up in London',
        date: new Date(),
        location: 'London',
        description: 'Awesome meet up'
      }
    ],
    user: {
      id: '1',
      registeredMeetUps: ['1']
    }
  },
  mutations: {
    createMeetUp (state, payload) {
      state.loadedMeetUps.push(payload)
    }
  },
  actions: {
    createMeetUp ({ commit }, payload) {
      const meetUp = {
        title: payload.title,
        location: payload.location,
        src: payload.src,
        description: payload.description,
        date: payload.date,
        id: '4'
      }
      commit('createMeetUp', meetUp)
    }
  },
  getters: {
    loadedMeetUps (state) {
      return state.loadedMeetUps.sort((meetUpA, meetUpB) => {
        return meetUpA.date > meetUpB.date
      })
    },
    featuredMeetUps (state, getters) {
      return getters.loadedMeetUps.slice(0, 5)
    },
    loadedMeetUp (state) {
      return (meetUpId) => {
        return state.loadedMeetUps.find((meetUp) => {
          return meetUp.id === meetUpId
        })
      }
    }
  }
})
