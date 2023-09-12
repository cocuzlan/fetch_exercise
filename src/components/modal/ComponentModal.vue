<template>
  <div class="modal" id="id_modal">
    <div
      id="modal_general"
      class="modal_general"
      :style="{ 'width': $props.width }"
    >
      <!-- Header -->
      <div class="modal_general_header">
        <!-- Icon for close -->
        <span class="modal_general_header_close" v-if="!$props.persists" @click="closeModal">&times;</span>
        <!-- Title -->
        <span class="modal_general_header_title">{{ $t($props.title) }}</span>
      </div>
      <!-- Form -->
      <form method="dialog" @submit="getFormValues">
        <!-- Content Dinamyc -->
        <div class="modal_general_content">
            <slot name="default"></slot>
        </div>
        <!-- Buttons dinamyc -->
        <div class="modal_general_buttons" id="modal_general_buttons">
          <button v-for="(button, index) in $props.buttons"
            :key="`button-${index}`"
            @click="modalAction(button['action'])"
            :style="{ 'background-color': `${button['color']}` }"
            :type="button['action'] === 'accept' ? 'submit' : 'button'"
          >
            <span class="modal_general_buttons_text">
              {{ $t(button['label']) }}
            </span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script src="./modal.js" />
<style src="./modal.scss" lang="scss"/>  