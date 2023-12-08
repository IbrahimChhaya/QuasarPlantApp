<template>
    <q-page class="flex flex-center">

      <q-input
      outlined
      v-model="search"
      ref="search" 
      label="Search plants"
      class="search-input q-pt-lg q-pb-lg"
      >
        <template v-slot:prepend>
          <q-icon name="search" class="cursor-pointer" />
        </template>
      </q-input>

      <q-card class="plant-card">
        <div v-for="plant in filteredPlants" :key="plant.id" v-ripple>
          <router-link :to="{ name: 'PlantPage', params: { id: 7 } }">
            <q-card-section class="row">
            
              <q-avatar rounded size="75px">
                <img src="~assets/monstera.jpg">
              </q-avatar>
              
              <div class="plant-name">
                <div class="text-h6 q-pl-md">
                  {{ plant.name }}
                </div>
                <div class="text-subtitle1 q-pl-md">
                  <q-icon name="water_drop" color="blue-7" class="q-pb-xs"/> 
                  {{ plant.lastWatered }}  days ago
                </div>
              </div>
              
              <q-btn 
                flat 
                color="primary"
                icon="las la-chevron-circle-right" 
                class="plant-link absolute-right"
              />

            </q-card-section>
          </router-link>
        
          <q-separator />
        
        </div>
      </q-card>
    </q-page>
</template>
  
<script>
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    name: 'PlantsPage',
  
    setup () {

    },

    methods: {
      
    },

    data() {
      return {
        search: '',

        plants: [
          {
            id: 1,
            name: 'Monstera',
            lastWatered: 4,
            picture: 'monstera.jpg'
          },
          {
            id: 2,
            name: 'Spider Plant',
            lastWatered: 0,
            picture: 'monstera.jpg'
          },
          {
            id: 3,
            name: 'Golden Pothos',
            lastWatered: 17,
            picture: 'monstera.jpg'
          },
          {
            id: 4,
            name: 'Heartleaf',
            lastWatered: 6,
            picture: 'monstera.jpg'
          }
        ],
      }
    },

    computed: {
      filteredPlants() {
        return this.plants.filter(plant => 
          plant.name.toLowerCase().includes(this.search.toLowerCase()))
      }
    }
  })
</script>

<style lang="scss">

  .search-input {
    width: 75%;
  }

  .q-field__control .relative-position .row .no-wrap {
    border-radius: 13px;
  }

  .plant-card {
    width: 90%;
    border-radius: 13px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .plant-link:active {
      background-color: white;
  }

</style>