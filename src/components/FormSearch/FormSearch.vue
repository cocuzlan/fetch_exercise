<template>
  <div class="form-search">
    <form @submit="getFormValues()" method="dialog" id="form_login">
      <component-select
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
    <component-table
      :data="data_dogs"
    />
  </div>
</template>

<script src="./formSearch.js" />
<style src="./formSearch.scss" lang="scss" scoped/>