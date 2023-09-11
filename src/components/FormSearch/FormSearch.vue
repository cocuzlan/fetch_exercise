<template>
  <div class="form-search">
    <form @submit="getFormValues()" method="dialog" id="form_login">
      <component-select
        ref="component_select"
        v-model="dogs_breed"
        id="dogs_breed"
        placeholder=""
        label="welcome.select_name"
        :options="getDogBreeds"
        :multiple="true"
      />

      <div class="form-search_button">
        <button type="submit">{{ $t('welcome.search') }}</button>
      </div>
    </form>
    <div class="error" v-if="error">
      {{ error }}
    </div>
    <div class="form-search_table">
      <component-table
        :data="data_dogs"
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
  </div>
</template>

<script src="./formSearch.js" />
<style src="./formSearch.scss" lang="scss" scoped/>