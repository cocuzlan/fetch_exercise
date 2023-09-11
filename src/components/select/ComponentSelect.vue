<template>
  <div
    class="input_select"
  >
    <!-- Label -->
    <label :for="`aria-${$props.id}`">
      {{ $t($props.label) }}
      <span class="input_string_required" v-if="$props.required">*</span>
    </label>
    <!-- Select -->
    <v-select
      v-model="select_value"
      :aria-labelledby="`aria-${$props.id}`"
      :id="$props.id"
      :options="$props.options"
      :multiple="$props.multiple"
      @input="$emit('input', select_value)"
    />
    <!-- Message error -->
    <div class="error" v-if="error_msg">
      {{ $t('components.string.msg_required') }}
    </div>
  </div>
</template>

<script src="./select.js" />
<style src="./select.scss" lang="scss" scoped/>