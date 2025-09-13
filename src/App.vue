<script setup lang="ts">
import logo from './assets/logo.png';
</script>

<template>
  <VCard variant="text">
    <VToolbar
      style="position: fixed; top: 0; left: 0; width: 100vw; z-index: 1000;"
      elevation="2"
    >
      <VImg
        :src="logo"
        alt="Logo"
        width="100%"
        height="auto"
        max-width="150"
        max-height="140"
      />
      <VTabs>
        <VTab to="/">
          <span class="text-body-1">
            Arquivo
          </span>
        </VTab>
        <VTab to="/todas">
          <span class="text-body-1">
            Todas
          </span>
        </VTab>
        <VTab to="/momento">
          <span class="text-body-1">
            Momento
          </span>
        </VTab>
      </VTabs>
    </VToolbar>
    <div style="padding-top: 100px;">
      <router-view />
    </div>
  </VCard>
</template>

<style scoped>
@use "sass:math";
html,
body,
#app,
.v-layout {
  margin: 0;
  padding: 0;
  font-family: "Encode Sans Semi Expanded", sans-serif;
  background-color: rgb(var(--v-theme-background));
}
.v-application {
  min-height: 100vh;
}

.content {
  margin: 36px 24px;
  position: relative;
  top: 80px;
  bottom: 0;
  left: 0;
  right: 0;
}

/* Style plugin vuetify */

.v-input__control {
  background-color: #fff;
  .v-field {
    border-radius: 8px;
  }
}

.v-switch .v-input__control {
  background-color: initial;
}

.v-selection-control--density-compact {
  .v-switch__track {
    height: 24px;
    min-width: 48px;
  }
}

.v-switch__track {
  background-color: rgb(var(--v-theme-grey-darken-2));
  opacity: 1;
}
.v-selection-control__input {
  .v-switch__thumb {
    width: 12px;
    height: 12px;
    transform: none;
  }
}
.rounded-md {
  border-radius: 16px!important;
}

.dotted-border {
  border: 1px dotted rgb(var(--v-theme-grey-darken-1));
  border-radius: 8px;
}

nav {
  display: flex;
  gap: 1em;
  margin-bottom: 1em;
}
</style>
