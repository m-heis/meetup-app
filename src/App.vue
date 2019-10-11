<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary absolute>
      <v-list>
        <v-list-item link
                     v-for="item in menuItems"
                     :key="item.title"
                     :to="item.link"
        >
          <v-list-item-avatar>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar dark class="primary" app>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="d-sm-none"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
      <router-link to="/" tag="span" style="cursor: pointer">MEET UP</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text
             class="d-none d-sm-flex"
             v-for="item in menuItems"
             :key="item.title"
             :to="item.link"
      >
        <v-icon>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
    </v-app-bar>

    <v-content >
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    drawer: false,
    menuItems: [
      { icon: 'mdi-account-multiple', title: 'VIEW MEET UPS', link: '/meet_ups' },
      { icon: 'mdi-map-marker', title: 'ORGANIZE MEET UP', link: '/new_meet_up' },
      { icon: 'mdi-account', title: 'PROFILE', link: '/profile' },
      { icon: 'mdi-account-plus-outline', title: 'SIGN UP', link: '/sign_up' },
      { icon: 'mdi-login', title: 'SIGN IN', link: '/sign_in' }
    ]
  })
}
</script>
