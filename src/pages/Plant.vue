<template>
  <q-page class="flex flex-center">

    <q-img class="plant-image" src="~assets/monstera.jpg" />
    
    <q-card class="plant-card">
      
      <q-card-section horizontal>
        
        <q-card-section>
          <div class="text-h5">
            Monstera
          </div>
        </q-card-section>

        <q-card-section class="absolute-right">
          <q-chip square color="secondary" class="location-chip">
            <q-icon name="location_on" size="20px" class="on-left"/>
            <span class="q-mr-sm">Salon</span>
          </q-chip>

          <q-icon name="more_vert" size="sm" class="plant-menu">
            <q-menu auto-close fit :offset="[5, 5]">
              <q-list>
                <q-item clickable>
                  <q-item-section @click="confirmDeletePlant = true">
                    <div>
                      <q-icon name="delete" color="red" class="q-pb-xs q-pr-xs"/>
                      <span class="remove-plant-text">
                        Remove Plant
                      </span>
                    
                    </div>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-icon>

        </q-card-section>
      
      </q-card-section>

      
      <q-separator inset />

      <q-card-section>
        <div class="plant-added">
          <q-icon name="bookmark_added" size="sm"/>
          Added 2 March 2023
        </div>
        <div class="last-watered">
          <q-icon name="water_drop" size="sm"/>
          Last Watered 3 days ago, 17 April 2023 {{ id }}
        </div>
      </q-card-section>

      <q-card-section>
        <q-btn color="primary" text-color="white" icon="add_circle" label="Watered Today"/>
        <q-btn color="secondary" text-color="primary" icon="calendar_month"/>
      </q-card-section>
<!-- 
 -->
  
      <q-separator />

      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="watering" label="Watering" />
          <q-tab name="notes" label="Notes" />
          <q-tab name="chatgpt" label="ChatGPT" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="watering">
            <div class="calendar">
              <q-date v-model="daysWatered" multiple minimal class="watering-calendar" />
            </div>
          </q-tab-panel>

          <q-tab-panel name="notes">

            <q-card-section horizontal>
              <q-card-section>
                <div class="text-h5">
                  Notes
                </div>
              </q-card-section>

              <q-card-section class="absolute-right">
                <q-btn 
                color="primary"
                dense
                icon="note_add"
                size="12px" 
                >
                  <div class="q-ml-xs q-mr-xs">
                    Add Note
                  </div> 
                </q-btn>
              </q-card-section>

            </q-card-section>

            <q-card-section>
              <q-input
                v-model="text"
                filled
                autogrow
                label="Add new note"
                class="note-input"
              />
            </q-card-section>

            <q-card-section class="notes">
              <div class="note-text q-pb-xs">
                //TODO
              </div>

              <q-icon name="more_vert" size="xs" class="plant-menu absolute-right q-mt-sm q-mr-xs">
                <q-menu auto-close fit>
                  <q-list>
                    <q-item clickable>
                      <q-item-section>
                        <div>
                          <q-icon name="edit" class="q-pb-xs q-pr-xs"/>
                          <span>
                            Edit Note
                          </span>
                        </div>
                      </q-item-section>
                    </q-item>
                    <q-item clickable>
                      <q-item-section @click="confirmDeletePlant = true">
                        <div>
                          <q-icon name="delete" color="red" class="q-pb-xs q-pr-xs"/>
                          <span class="remove-plant-text">
                            Remove Note
                          </span>
                        </div>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-icon>

              <q-separator />

              <div class="note-subtitle">
                <div class="note-subtitle-text">14 August 2022</div>
                
                <div class="note-subtitle-text absolute-right">Ibrahim Chhaya</div>
              </div>

            </q-card-section>

          </q-tab-panel>

          <q-tab-panel name="chatgpt">
            <q-card-section>
                <div class="text-h5">
                  Ask ChatGPT
                </div>
            </q-card-section>

            <q-card-section>
              //TODO
            </q-card-section>
          </q-tab-panel>
          
        </q-tab-panels>

      </q-card>
    
    
    </q-card>

    
    <q-dialog v-model="confirmDeletePlant" persistent>
      <div>
        <q-card>
          <q-card-section class="row items-center">
            <q-avatar icon="delete" color="primary" text-color="white" />
            <span class="q-ml-sm">Are you sure you want to delete Monstera?</span>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="primary" v-close-popup />
            <q-btn label="Delete" color="red" v-close-popup />
          </q-card-actions>
        </q-card>
      </div>
    </q-dialog>

    <q-dialog v-model="confirmDeleteNote" persistent>
      <div>
        <q-card>
          <q-card-section class="row items-center">
            <q-avatar icon="delete" color="primary" text-color="white" />
            <span class="q-ml-sm">Are you sure you want to delete Monstera?</span>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="primary" v-close-popup />
            <q-btn label="Delete" color="red" v-close-popup />
          </q-card-actions>
        </q-card>
      </div>
    </q-dialog>
  
  </q-page>
</template>
  
<script>
  import { defineComponent, ref } from 'vue'
  
  export default defineComponent({
    name: 'PlantPage',

    props: {
      id: {
        type: Number,
        required: true,
      },
    },
  
    setup () {
      return {
        text: ref(''),
        tab: ref('watering'),
        confirmDeletePlant: ref(false),
        confirmDeleteNote: ref(false),
      }
    },

    data() {
      return {
        noteEditor: 'peep',
        daysWatered: [
          '2023/02/01', '2023/04/10','2023/04/01'
        ]
      }
    },

    computed: {
      
    }
  })
</script>

<style lang="scss">

  .plant-image {
    position: fixed;
    top: 0;
    height: 35vh;
  }

  .plant-card {
    width: 100%;
    height: 70vh;
    position: fixed;
    bottom: 0;

    border-radius: 30px 30px 0px 0px;
  }

  .location-chip {
    color: $primary;
    font-weight: 500;
  }

  .notes {
    width: 80%;
    margin-left: 10%;
    background-color: #eee;
  }
  
  .q-card > div:not(:first-child), .q-card > img:not(:first-child) {
    border-radius: 8px;
  }

  .note-subtitle {
    position: relative;
    margin-bottom: -10px;
  }

  .note-subtitle-text {
    color: #3c3c3c;
    font-size: 12px;
    display: inline;
  }

  .plant-menu {
    cursor: pointer;
  }

  .remove-plant-text {
    color: red;
  }

  .note-input {
    width: 86%;
    margin-left: 7%;
    background-color: #eee;
    border-radius: 10px;
    height: 60px;
  }
  
  .calendar {
    text-align: center;
  }
</style>