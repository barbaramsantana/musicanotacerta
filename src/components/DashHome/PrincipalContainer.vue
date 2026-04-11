<script setup lang="ts">
import { useRouter } from 'vue-router';
import logo from '../../assets/logo.png';

const router = useRouter();

</script>

<template>
<VRow class="container-principal pa-12">
<VCol cols="12" md="6" class="text-center text-md-start">
    <div class="mb-6">
    <h1 class="text-h2 font-weight-bold text-white mb-4">
        Ministério servos de maria
    </h1>
    <p class="text-h5 text-white opacity-90 mb-8">
        A biblioteca definitiva de músicas e cifras católicas para missas e adoração, criada para apoiar corais, ministérios de música e comunidades.
    </p>
    <div class="d-flex gap-4 flex-wrap justify-center justify-md-start">
        <VBtn
        to="/todas"
        size="large"
        variant="elevated"
        class="bg-white text-primary px-8 ma-2"
        elevation="2"
        >
        <VIcon start>mdi-music-box</VIcon>
        Explorar Músicas
        </VBtn>
        <VBtn
        @click="router.push('/calendario')"
        size="large"
        variant="outlined"
        class="border-white text-white px-8 ma-2"
        >
        <VIcon start>mdi-calendar</VIcon>
        Calendário
        </VBtn>
    </div>
    </div>
</VCol>
<VCol cols="12" md="6" class="text-center d-flex align-center justify-center">
    <VImg
    :src="logo"
    alt="Músicas Católicas"
    width="100%"
    height="auto"
    max-width="400"
    class="logo-white"
    />
</VCol>
</VRow>
</template>
<style scoped>
.logo-white {
  filter: brightness(0) invert(1);
}
.container-principal {
  background: linear-gradient(135deg, #CC4AF2 0%, #9f26bf 50%, #6b1782 100%); 
  min-height: 60vh; 
  display: flex; 
  align-items: center;
}
</style>
