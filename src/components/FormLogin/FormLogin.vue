<template>
  <div class="form-login">
    <!-- Title -->
   <div class="form-login_title">
    {{ $t('login.login_title') }}
   </div>
   <!-- Form -->
   <div
    class="form-login_form"
   >
    <form @submit="getFormValues()" method="dialog" id="form_login">
      <!-- Fields -->
      <div class="form-login_form_row">
        <div class="form-login_form_col">
          <component-string
            class="form-login_form_input"
            label="login.form.name_label"
            id="name"
            :required="true"
            :minlength="'1'"
            :maxlength="'50'"
            placeholder=""
          />
        </div>
        <div class="form-login_form_col">
          <component-string
            class="form-login_form_input"
            label="login.form.email_label"
            id="email"
            :required="true"
            :minlength="'5'"
            :maxlength="'50'"
            :pattern="getRegexEmail"
            placeholder=""
          />
        </div>
      </div>
      <div class="form-login_form_button">
        <button type="submit">{{ $t('login.button') }}</button>
      </div>
    </form>
    <div class="form-login_error" v-if="error">
      {{ error }}
    </div>
   </div>
  </div>
</template>

<script src="./FormLogin.js" />
<style src="./FormLogin.scss" lang="scss" scoped/>