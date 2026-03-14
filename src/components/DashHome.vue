<script setup lang="ts">
import { ref } from 'vue';
import logo from '../assets/logo.png';
import { useRouter } from 'vue-router';

const features = ref([
  {
    icon: 'mdi-music-box-multiple',
    title: 'Biblioteca Completa',
    description: 'Acesso a uma vasta coleção de músicas católicas selecionadas para suas celebrações',
    color: 'primary',
    redirect: '/todas'
  },
  {
    icon: 'mdi-chapel',
    title: 'Para Missas',
    description: 'Músicas específicas para cada momento da Missa: entrada, ofertório, comunhão e saída',
    color: 'primary',
    redirect: '/momento'
  },
  {
    icon: 'mdi-file-document',
    title: 'Arquivo Pessoal',
    description: 'Gerencie seu acervo particular de músicas e arranjos',
    color: 'primary',
    redirect: '/arquivo'
  }
]);


const router = useRouter();
const abrirArquivoLarges = () => {
 router.push({ name: 'Arquivo', query: { file: "larges.html" } });
}
</script>

<template>
  <VContainer fluid class="pa-0">
    <!-- Hero Section -->
    <VRow class="hero-section pa-12" style="background: linear-gradient(135deg, #CC4AF2 0%, #9f26bf 50%, #6b1782 100%); min-height: 60vh; display: flex; align-items: center;">
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
              class="bg-white text-primary px-8"
              elevation="2"
            >
              <VIcon start>mdi-music-box</VIcon>
              Explorar Músicas
            </VBtn>
            <VBtn
              to="/momento"
              size="large"
              variant="outlined"
              class="border-white text-white px-8"
            >
              <VIcon start>mdi-hands-together</VIcon>
              Por Momento
            </VBtn>
             <VBtn
              @click="abrirArquivoLarges"
              size="large"
              variant="outlined"
              class="border-white text-white px-8"
            >
              <VIcon start>mdi-music</VIcon>
              Larges
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

    <!-- Features Section -->
    <VContainer class="my-12">
      <VRow class="mb-12">
        <VCol cols="12" class="text-center">
          <h2 class="text-h3 font-weight-bold mb-2 text-primary">
            Recursos Principais
          </h2>
          <VDivider class="border-opacity-50 mx-auto" style="max-width: 100px;"></VDivider>
        </VCol>
      </VRow>

      <VRow class="mb-8">
        <VCol
          v-for="feature in features"
          :key="feature.title"
          cols="12"
          md="6"
          lg="4"
        >
          <VCard
            class="h-100 hover-card"
            variant="outlined"
            :style="{ borderColor: 'rgba(105, 92, 205, 0.2)' }"
            @click="$router.push(feature.redirect)"
          >
            <VCardItem>
              <template #prepend>
                <VIcon
                  :icon="feature.icon"
                  size="48"
                  :color="feature.color"
                ></VIcon>
              </template>
            </VCardItem>

            <VCardText>
              <h3 class="text-h6 font-weight-bold mb-2">
                {{ feature.title }}
              </h3>
              <p class="text-body-2 text-medium-emphasis">
                {{ feature.description }}
              </p>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>

    <!-- Moments Section -->
    <!-- <VContainer class="my-12">
      <VRow class="mb-12">
        <VCol cols="12" class="text-center">
          <h2 class="text-h3 font-weight-bold mb-2 text-primary">
            Momentos da Missa
          </h2>
          <VDivider class="border-opacity-50 mx-auto" style="max-width: 100px;"></VDivider>
          <p class="text-body-1 mt-4 text-medium-emphasis">
            Encontre as músicas perfeitas para cada momento da celebração
          </p>
        </VCol>
      </VRow>

      <VRow>
        <VCol
          v-for="moment in moments"
          :key="moment.title"
          cols="12"
          sm="6"
          lg="4"
        >
          <VCard
            class="h-100 moment-card"
            variant="elevated"
            :ripple="true"
            to="/todas"
          >
            <div class="moment-header" style="background: linear-gradient(135deg, #CC4AF2 0%, #9f26bf 50%, #6b1782 100%); padding: 24px; text-align: center;">
              <VIcon size="56" color="white" class="mb-3">
                {{ moment.icon }}
              </VIcon>
              <h3 class="text-h6 text-white font-weight-bold">
                {{ moment.title }}
              </h3>
            </div>

            <VCardText class="pt-6 text-center">
              <p class="text-body-2 text-medium-emphasis mb-4">
                {{ moment.description }}
              </p>
              <VBtn
                variant="text"
                color="primary"
                size="small"
              >
                Ver Músicas
                <VIcon end>mdi-arrow-right</VIcon>
              </VBtn>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
    </VContainer> -->

    <!-- Info Section -->
    <!-- <VContainer class="my-12">
      <VCard
        variant="elevated"
        class="overflow-hidden"
        :style="{ background: 'linear-gradient(135deg, rgba(105, 92, 205, 0.1) 0%, rgba(31, 18, 131, 0.1) 100%)' }"
      >
        <VRow no-gutters>
          <VCol cols="12" md="6" class="d-flex align-center pa-8">
            <div>
              <h2 class="text-h4 font-weight-bold text-primary mb-4">
                Organize Sua Fé
              </h2>
              <p class="text-body-1 text-medium-emphasis mb-4">
                Crie sua própria biblioteca de músicas, organize por categoria e mantenha seus favoritos sempre à mão. Perfeito para ministros da música, padres, catequistas e todos que buscam enriquecer seus momentos de oração.
              </p>
              <p class="text-body-2 text-secondary">
                ✓ Acesso completo à biblioteca<br>
                ✓ Organização personalizada<br>
                ✓ Seleção por momento litúrgico<br>
                ✓ Interface intuitiva e amigável
              </p>
            </div>
          </VCol>
          <VCol cols="12" md="6" class="d-flex align-center pa-8 justify-center">
            <VIcon size="250" color="primary" class="opacity-50">
              mdi-music-circle
            </VIcon>
          </VCol>
        </VRow>
      </VCard>
    </VContainer> -->

    <!-- CTA Section -->
    <VContainer class="my-12">
      <VRow class="mb-4">
        <VCol cols="12" class="text-center">
          <h2 class="text-h3 font-weight-bold mb-4">
            Pronto para Começar?
          </h2>
          <p class="text-body-1 text-medium-emphasis mb-8">
            Explore nossa coleção completa de músicas católicas
          </p>
          <VBtn
            to="/todas"
            size="x-large"
            variant="elevated"
            color="primary"
            class="px-12"
            elevation="2"
          >
            <VIcon start>mdi-music</VIcon>
            Acessar Todas as Músicas
          </VBtn>
        </VCol>
      </VRow>
    </VContainer>

    <!-- Footer Info -->
    <VContainer class="py-12">
      <VRow class="text-center">
        <VCol cols="12" sm="6" md="6">
          <div class="mb-4">
            <VIcon size="40" color="primary" class="mb-2">mdi-music-box</VIcon>
            <h4 class="text-body-1 font-weight-bold">Várias Músicas</h4>
          </div>
        </VCol>
        <VCol cols="12" sm="6" md="6">
          <div class="mb-4">
            <VIcon size="40" color="primary" class="mb-2">mdi-church</VIcon>
            <h4 class="text-body-1 font-weight-bold">Para Comunidades</h4>
          </div>
        </VCol>
      </VRow>
    </VContainer>
  </VContainer>
</template>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 500px;
  height: 500px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.hover-card {
  transition: all 0.3s ease;
  cursor: pointer;
}

.hover-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(105, 92, 205, 0.15);
  border-color: rgba(105, 92, 205, 0.5) !important;
}

.moment-card {
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
}

.moment-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(105, 92, 205, 0.2);
}

.moment-card:hover .moment-header {
  box-shadow: inset 0 -4px 12px rgba(0, 0, 0, 0.2);
}

.opacity-50 {
  opacity: 0.5;
}

.opacity-90 {
  opacity: 0.9;
}

.logo-white {
  filter: brightness(0) invert(1);
}

@media (max-width: 600px) {
  .hero-section {
    min-height: auto;
    padding: 24px 16px !important;
  }

  .hero-section h1 {
    font-size: 2rem !important;
  }

  .d-flex {
    flex-direction: column;
  }

  .gap-4 {
    gap: 16px;
  }
}
</style>
