<template>
  <q-layout view="lHh Lpr lFf" class="app-background">
    <q-header>
      <q-toolbar>
      </q-toolbar>
      <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h4">How are your plants today?</div>
        <div class="text-subtitle1">
        
          {{ dateToday }} 
        
          <span class="float-right">
            <q-icon name="sunny"/>
            23°C <!-- //TO DO -->
          </span>
        
        </div>
      </div>
      <q-img 
        src="~assets/monstera2.jpg"
        class="header-image absolute-top"
      />
    </q-header>

    <q-footer elevated class="bottom-nav">
      <q-tabs
      v-model="tab"
      active-color="white"
      >
        <q-route-tab name="Home" icon="las la-home" to="/home" exact/>
        <q-tab name="Other" icon="las la-home" />
        <q-tab name="Camera" icon="las la-camera" class="camera"/>
        <q-route-tab name="Plants" icon="las la-leaf" to="plants" exact />
        <q-tab name="Settings" icon="las la-cog" />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { date } from 'quasar'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    
  },

  setup () {
    // const leftDrawerOpen = ref(false)

    return {
      tab: ref('Camera')
      // essentialLinks: linksList,
      // leftDrawerOpen,
      // toggleLeftDrawer () {
      //   leftDrawerOpen.value = !leftDrawerOpen.value
      // }
    }
  },

  computed: {
    dateToday() {
      let timeStamp = Date.now()
      return date.formatDate(timeStamp, 'dddd, D MMMM')
    }
  }

})
</script>

<style lang="scss">

.app-background {
  background-color: #f8f8f8;
}

.header-image {
  height: 100%;
  z-index: -1;
  opacity: 0.5;
  filter: brightness(125%);
}

.camera {
  .q-tab__icon {
    color: #1f6d43; 
    font-size: 50px;    
    position: fixed;
    z-index: 999;
    background-color: white;
    bottom: 3px;
    padding: 25px;
    border-radius: 50%;
    border-style: solid;
  }
}

.q-tab--inactive {
    opacity: 1;
}  

.q-tab--active {
  background-color: #439a6ca3;
}

// .bottom-nav {
//   height: 75px
// }
</style>