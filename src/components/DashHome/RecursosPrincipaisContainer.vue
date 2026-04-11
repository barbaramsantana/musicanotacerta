<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useDashHome } from '.';

const router = useRouter();
const { features, abrirRecursoPrincipais } = useDashHome();
</script>
<template>
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
        @click="abrirRecursoPrincipais(feature, router)"
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
</template>