<template>
  <q-page class="flex flex-center">
    
    <!-- <q-input 
      standout="bg-white text-black" 
      v-model="text" 
      label="Search plants"
      class="search-input q-pt-lg q-pb-lg"
      >
      <template v-slot:prepend>
        <q-icon name="search" class="cursor-pointer" />
      </template>
    </q-input> -->

    <q-card class="plant-card q-mt-md">
      <q-card-section horizontal>
        
        <q-card-section>
          <div class="text-h6">
            <q-icon name="error" color="primary" class="q-pb-xs"/>
            Need to Be Watered
          </div>
        </q-card-section>

        <!-- <q-card-section class="absolute-right">
          <q-btn flat color="primary">SEE ALL</q-btn>
        </q-card-section> -->
      
      </q-card-section>

      <div v-for="plant in plants" :key="plant.id">
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
          class="absolute-right"
          />

        </q-card-section>

        <q-separator />
      </div>
    </q-card>
        
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'HomePage',

  setup () {
    return {
      text: ref(''),
    }
  },

  data() {
    return {
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
})
</script>

<style lang="scss">

.q-field__control .relative-position .row .no-wrap {
  border-radius: 13px;
}

.plant-card {
  width: 90%;
  border-radius: 13px;
}

</style>