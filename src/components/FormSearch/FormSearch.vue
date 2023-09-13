<template>
  <div class="form-search">
    <form @submit="getFormValues()" method="dialog" id="form_search">
      <div class="form-search_form">
        <div class="form-search_form_element">
          <component-select
            ref="component_select"
            v-model="dogs_breed"
            id="dogs_breed"
            placeholder=""
            label="welcome.select_name"
            :options="getDogBreeds"
            :multiple="true"
          />
        </div>
        <div class="form-search_form_element">
          <component-string
            id="ageMin"
            label=""
            placeholder="welcome.form.age_min"
            minlength="1"
            maxlength="2"
            :pattern="getAge"
          />
        </div>
        <div class="form-search_form_element">
          <component-string
            id="ageMax"
            label=""
            placeholder="welcome.form.age_max"
            minlength="1"
            maxlength="2"
            :pattern="getAge"
          />
        </div>
        <div class="form-search_form_element">
          <component-string
            ref="string"
            v-model="size"
            id="size"
            label=""
            placeholder="welcome.form.size"
            minlength="1"
            maxlength="2"
            :pattern="getAge"
          />
        </div>
        <div class="form-search_form_element">
        </div>
        <div class="form-search_form_element">
        </div>
        <div class="form-search_form_element">
        </div>
        <div class="form-search_form_element pagination" v-if="data_dogs.length">
            <!-- :key="keyPagination" -->
          <component-pagination
            :size="size"
            :total="total"
            @next-page="getFormValues"
            @prev-page="getFormValues"
          />
        </div>
      </div>
      <div class="form-search_button">
        <button type="submit">{{ $t('welcome.search') }}</button>
      </div>
      </form>
    <div class="error" v-if="error">
      {{ error }}
    </div>
    <div class="form-search_table">
      <button
        v-show="dogs_adoption.length"
        @click="openModal"
      >
        {{ $t('welcome.adopt') }}
      </button>
      <div v-if="dog_adopt.length" class="form-search_table_adopt">
        <span class="modal_general_header_close" @click="dog_adopt.length = 0, dog_adopt = []">&times;</span>
        <component-table
          :headers="table_headers2"
          :data="dog_adopt"
        >
          <!-- Custon column for img -->
          <template #img="data">
            <div class="form-search_table_img">
              <img
                :src="data.img"
                :alt="data.id"
                width="150"
                height="150"
              >
            </div>
          </template>
          <!-- Custon column for location -->
          <template #location="data">
            <div class="form-search_table_location">
              <dl>
                <dt v-for="(val, key) in data.location" :key="`${key}-${val}`">
                  {{val}}
                </dt>
              </dl>
            </div>
          </template>
        </component-table>
      </div>
      <!-- Modal -->
      <component-modal
        ref="modal"
        title="welcome.adopt"
        @accept="adopteMe"
      >
        <template #default>
          <div class="form-search_modal" v-html="$i18n.t('welcome.form.adopt_me')"></div>
        </template>
      </component-modal>
      <!-- Table -->
      <component-table
        :headers="table_headers"
        :data="data_dogs"
      >
        <!-- Custon column for adoption -->
        <template #adoption="data">
          <div class="form-search_table_adoption">
            <input
              v-model="dogs_adoption"
              type="checkbox"
              :id="`${data.breed}-${data.name}`"
              :value="data.id"
            >
          </div>
        </template>
        <!-- Custon column for img -->
        <template #img="data">
          <div class="form-search_table_img">
            <img
              :src="data.img"
              :alt="data.id"
              width="150"
              height="150"
            >
          </div>
        </template>
        <!-- Custon column for location -->
        <template #location="data">
          <div class="form-search_table_location">
            <dl>
              <dt v-for="(val, key) in data.location" :key="`${key}-${val}`">
                {{val}}
              </dt>
            </dl>
          </div>
        </template>
      </component-table>
    </div>
  </div>
</template>

<script src="./formSearch.js" />
<style src="./formSearch.scss" lang="scss" scoped/>