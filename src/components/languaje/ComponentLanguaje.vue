<template>
  <div class="languaje">
    <select
      v-model="languaje"
      name="languajes"
      id="languajes_select"
      @change="setLanguaje"
      class="languaje_select"
    >
      <option
        v-for="(languaje, index) in getLanguajes"
        :key="index"
        :value="languaje"
        class="languaje_option"
      >
        {{languaje}}
      </option>
    </select>
  </div>
</template>

<script src="./languaje.js" />
<style src="./languaje.scss" lang="scss" scoped/>