<template>
  <div
    class="input_string"
  >
    <!-- Label -->
    <label :for="`aria-${$props.id}`">
      {{ $t($props.label) }}
      <span class="input_string_required" v-if="$props.required">*</span>
    </label>
    <!-- Input -->
    <input
      v-model="input_value"
      :type="$props.type"
      :id="$props.id"
      :name="$props.id"
      :aria-labelledby="`aria-${$props.id}`"
      :placeholder="$props.placeholder"
      :required="$props.required"
      :minlength="$props.minlength"
      :maxlength="$props.maxlength"
      @input="$emit('input', $event.target.value)"
    />
    <!-- Message error -->
    <div class="input_string_error" v-if="error_msg">
      {{ $t(error_msg) }}
    </div>
  </div>
</template>

<script src="./string.js" />
<style src="./string.scss" lang="scss" scoped/>