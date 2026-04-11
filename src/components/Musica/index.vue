<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
// @ts-ignore
import musicas from "../../dataBase/musicas.json";

interface Musica {
  id: number;
  nome: string;
  tom: string;
  link: string;
  momento: string[];
  letra: string[];
}

const router = useRouter();
const musicaId = router.currentRoute.value.params.id as string;

const musica = ref<Musica | null>(null);
const fontSize = ref(16);
const transpose = ref(0);

const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const flatToSharp: Record<string, string> = {
  Db: "C#",
  Eb: "D#",
  Gb: "F#",
  Ab: "G#",
  Bb: "A#",
};

const transposeChord = (chord: string, semitones: number): string => {
  const rootMatch = chord.match(/^([A-G][#b]?)/);
  if (!rootMatch) return chord;

  let root = rootMatch[1];

  // converte bemol → sustenido
  if (flatToSharp[root]) {
    root = flatToSharp[root];
  }

  const index = notes.indexOf(root);
  if (index === -1) return chord;

  const newIndex = (index + semitones + 12) % 12;
  const newRoot = notes[newIndex];

  return chord.replace(/^([A-G][#b]?)/, newRoot);
};

const isChordLine = (line: string): boolean => {
  const trimmed = line.trim();

  if (!trimmed) return false;

  // ignora [Refrão], [Intro], etc
  if (/^\[.*\]$/.test(trimmed)) return false;

  // ignora ( Dm  E  Am )
  if (/^\(.*\)$/.test(trimmed)) return false;

  return /^([A-G][#b]?(m|maj|min|dim|aug|sus)?\d*\s*)+$/.test(trimmed);
};

const transposeLine = (line: string): string => {
  return line.replace(
    /([A-G][#b]?(?:m|maj|min|dim|aug|sus)?\d*)/g,
    (match: string) => transposeChord(match, transpose.value),
  );
};

const transposedLetra = computed((): string[] => {
  if (!musica.value?.letra) return [];

  return musica.value.letra.map((line: string) => {
    if (isChordLine(line)) {
      return transposeLine(line);
    }

    return line;
  });
});

const transposeItems = computed(() => {
  return Array.from({ length: 12 }, (_, i) => {
    const transposedTom = transposeChord(musica.value?.tom || "C", i);
    return {
      value: i,
      text: `${transposedTom}`,
    };
  });
});

const fetchMusica = async (id: string): Promise<void> => {
  musica.value =
    (musicas as Musica[]).find((m: Musica) => m.id == parseInt(id)) || null;
};

onMounted(() => {
  fetchMusica(musicaId);
});
</script>

<template>
  <VContainer fluid class="pl-9 pt-9 d-flex flex-column align-center">
    <VRow>
      <VCol cols="12">
        <h5 class="text-h5 mb-4">{{ musica?.nome }}</h5>
        <VRow>
          <VCol cols="12">
            Tom:
            <VMenu location="bottom end">
              <template #activator="{ props }">
                <VBtn v-bind="props" color="primary" variant="outlined" size="x-small">{{
                  transposeItems.find((item) => item.value === transpose)?.text || musica?.tom
                }}</VBtn>
              </template>
              <VList class="d-flex flex-wrap" :max-width="150">
                <div
                  class="px-1"
                  v-for="item in transposeItems"
                  :key="item.value"
                  @click="transpose = item.value"
                >
                  <VBtn 
                    color="primary" 
                    :variant="item.value === transpose ? 'tonal' : 'text'" 
                    size="x-small">
                    {{ item.text }}
                  </VBtn>
                </div>
              </VList>
            </VMenu>
          </VCol>
          <VCol>
            <VBtn
              size="x-small"
              variant="tonal"
              @click="fontSize--"
              :disabled="fontSize <= 10"
              class="mr-2"
              icon="mdi-format-font-size-decrease"
            ></VBtn>
            <VBtn
              size="x-small"
              variant="tonal"
              @click="fontSize++"
              class="mr-2"
              icon="mdi-format-font-size-increase"
            ></VBtn>
          </VCol>
        </VRow>
      </VCol>
      <VCol cols="12">
        <div
          v-for="line in transposedLetra"
          :key="line"
          :style="{
            fontSize: fontSize + 'px',
            fontFamily: 'monospace',
            whiteSpace: 'pre',
          }"
        >
          {{ line }}
        </div>
      </VCol>
    </VRow>
  </VContainer>
</template>
