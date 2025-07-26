<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { getSongs, MOMENTO, type ISong } from '../services/useSongs';

const songs = ref<ISong[]>([]);

onMounted(() => {
 getSongs().then((data) => {
    songs.value = data;
  }).catch((error) => {
    console.error('Error fetching songs:', error);
  });
});

const searchQuery = ref('');

const openSong = (link: string) => {
  window.open(link, '_blank');
};

const groupMoment = ref([
  MOMENTO.ENTRADA,
  MOMENTO.INVOCACAO_SANTISSIMA_TRINDADE,
  MOMENTO.ATO_PENITENCIAL,
  MOMENTO.ASPERSAO,
  MOMENTO.GLORIA,
  MOMENTO.SALMO,
  MOMENTO.ACLAMACAO,
  MOMENTO.OFERTORIO,
  MOMENTO.SANTO,
  MOMENTO.PAZ,
  MOMENTO.CORDEIRO,
  MOMENTO.COMUNHAO,
  MOMENTO.POS_COMUNHAO,
  MOMENTO.FINAL,
  MOMENTO.ADORACAO,
  MOMENTO.LOUVOR,
  MOMENTO.MARIANO,
  MOMENTO.FAMILIA,
  MOMENTO.ESPIRITO_SANTO,
  MOMENTO.EXTRA,
  MOMENTO.DIZIMO,
]);
const groupMomentFilter = computed(() => {
  return groupMoment.value.filter((group) => 
    group.nome.toLocaleString().includes(searchQuery.value.toLowerCase())
  );
});

</script>
<template>
  <VCard variant="text" class="pt-2">
      <VTextField
        prepend-inner-icon="mdi-magnify"
        v-model="searchQuery"
        placeholder="Pesquisar música..."
      />
    <VList>
      <VListGroup
        v-for="(group, index) in groupMomentFilter"
        :key="index"
        :value="group.nome"
      >
      <template v-slot:activator="{ props }">
        <VListItem v-bind="props">
        <template #title>
          {{ group.nome }}
        </template>
      </VListItem>
      </template>
        <VListItem
          v-for="(song, index) in songs.filter(song => song.momento.includes(group.slug))"
          :key="index"
          @click="() => openSong(song.link)"
        >
          <template #title>
            {{ song.nome }}
          </template>
          <template #subtitle>
            Tom: {{ song.tom }}
          </template>
          <template #append>
            <VIcon>mdi-open-in-new</VIcon>
          </template>
        </VListItem>
      </VListGroup>
    </VList>
  </VCard>
</template>
