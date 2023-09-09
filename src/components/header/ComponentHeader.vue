<template>
  <div class="header">
    <div
      class="header_content"
    >
      <div >
        <languaje class="header_content_languaje"/>
      </div>
      <div class="header_content_logout">
        <button @click="logout()">
          {{ $t('welcome.logout') }}
        </button>
      </div>
    </div>
    <div class="error" v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script src="./header.js" />
<style src="./header.scss" lang="scss" scoped/>