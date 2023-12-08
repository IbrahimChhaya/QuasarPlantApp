<template>
    <q-layout view="lHh Lpr lFf" class="app-background">
      
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue'
  
  export default defineComponent({
    name: 'PlantPageLayout',
  
    components: {
      
    },
  
    setup () {
  
      return {
        
      }
    },
  
    computed: {
      
    }
  
  })
  </script>