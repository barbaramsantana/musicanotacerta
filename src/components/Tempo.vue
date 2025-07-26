<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { getSongs, type ISong } from '../services/useSongs';

const songs = ref<ISong[]>([]);

onMounted(() => {
 getSongs().then((data) => {
    songs.value = data;
  }).catch((error) => {
    console.error('Error fetching songs:', error);
  });
});

const searchQuery = ref('');

const songsFilter = computed(() => {
  return songs.value
    .filter((song: ISong) => song.nome.toLowerCase().includes(searchQuery.value.toLowerCase()))
    .sort((a: ISong, b: ISong) => a.nome.localeCompare(b.nome, 'pt-BR'));
});

const openSong = (link: string) => {
  window.open(link, '_blank');
};

</script>
<template>
  <VCard variant="text" class="pt-2">
      <VTextField
        prepend-inner-icon="mdi-magnify"
        v-model="searchQuery"
        placeholder="Pesquisar música..."
      />
    <VList>
      <template v-if="songsFilter.length > 0">
        <VListItem
          v-for="(song, index) in songsFilter"
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
      </template>
      <template v-else>
        <VListItem>
          <VListItemTitle>Nenhuma música encontrada</VListItemTitle>
        </VListItem>
      </template>
    </VList>
  </VCard>
</template>
