<template>
  <div class="pagination">
    <button
      v-show="!buttonPrev"
      @click="prevPage"
      type="button"
    >
      &#8592;
    </button>
      <template
        v-for="val in pags"
      >
        <span :key="val">
          {{ val }}
        </span>
      </template>
    <button
      v-show="!buttonNext"
      type="button"
      @click.stop="nextPage"
    >
      &#8594;
    </button>
  </div>
</template>

<script src="./pagination.js" />
<style src="./pagination.scss" lang="scss" scoped/>