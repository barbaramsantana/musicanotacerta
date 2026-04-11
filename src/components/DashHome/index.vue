<script setup lang="ts">
import InformacoesContainer from './InformacoesContainer.vue';
import PrincipalContainer from './PrincipalContainer.vue';
import RecursosPrincipaisContainer from './RecursosPrincipaisContainer.vue';
</script>

<template>
  <VContainer fluid class="pa-0">

      <PrincipalContainer />
      <RecursosPrincipaisContainer />
      <VDivider class="my-12 ma-6" />
      <InformacoesContainer />
  </VContainer>
</template>
