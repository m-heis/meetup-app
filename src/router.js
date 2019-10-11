import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MeetUps from './components/MeetUp/MeetUps.vue'
import CreateMeetUp from './components/MeetUp/CreateMeetUp.vue'
import Profile from './components/User/Profile.vue'
import SignUp from './components/User/SignUp.vue'
import SignIn from './components/User/SignIn.vue'
import MeetUp from './components/MeetUp/MeetUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/meet_ups',
      name: 'meet_ups',
      component: MeetUps
    },
    {
      path: '/new_meet_up',
      name: 'create_meet_up',
      component: CreateMeetUp
    },
    {
      path: '/meet_ups/:id',
      name: 'meet_up',
      props: true,
      component: MeetUp
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/sign_up',
      name: 'sign_up',
      component: SignUp
    },
    {
      path: '/sign_in',
      name: 'sign_in',
      component: SignIn
    }
  ],
  mode: 'history'
})
