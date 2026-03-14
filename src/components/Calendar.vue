<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { getLiturgicalCalendar, getImportantDates, getMinistryDates } from '../services/useLiturgicalCalendar';

const router = useRouter();

const currentDate = ref(new Date());
const selectedDate = ref(new Date());
const currentYear = computed(() => currentDate.value.getFullYear());
const currentMonth = computed(() => currentDate.value.getMonth());

const ministryDates = ref<ReturnType<typeof getMinistryDates>>(getMinistryDates());

const liturgicalInfo = computed(() => {
  return getLiturgicalCalendar(selectedDate.value);
});

const importantDates = computed(() => {
  return getImportantDates(currentYear.value);
});

const calendarDays = computed(() => {
  const firstDay = new Date(currentYear.value, currentMonth.value, 1);
  const lastDay = new Date(currentYear.value, currentMonth.value + 1, 0);
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - firstDay.getDay());

  const days = [];
  const endDate = new Date(lastDay);
  endDate.setDate(endDate.getDate() + (6 - lastDay.getDay()));

  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    days.push(new Date(d));
  }

  return days;
});

const monthYear = computed(() => {
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  return `${months[currentMonth.value]} ${currentYear.value}`;
});

const isSameDay = (d1: Date, d2: Date) => {
  return d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();
};

const isCurrentMonth = (date: Date) => {
  return date.getMonth() === currentMonth.value;
};

const previousMonth = () => {
  currentDate.value = new Date(currentYear.value, currentMonth.value - 1, 1);
};

const nextMonth = () => {
  currentDate.value = new Date(currentYear.value, currentMonth.value + 1, 1);
};

const selectDate = (date: Date) => {
  selectedDate.value = new Date(date);
};

const getImportantDateInfo = (date: Date) => {
  return importantDates.value.find(d => isSameDay(d.date, date));
};

const getMinistryDateInfo = (date: Date) => {
  return ministryDates.value.find(d => isSameDay(d.date, date));
};

const getDayClass = (date: Date) => {
  const classes = [];

  if (!isCurrentMonth(date)) {
    classes.push('text-grey');
  }

  if (isSameDay(date, selectedDate.value)) {
    classes.push('selected-day');
  }

  if (isSameDay(date, new Date())) {
    classes.push('today');
  }

  const importantDate = getImportantDateInfo(date);
  if (importantDate) {
    classes.push(importantDate.importance === 'major' ? 'important-major' : 'important-minor');
  }

  const ministryDate = getMinistryDateInfo(date);
  if (ministryDate) {
    classes.push('ministry-day');
  }

  return classes;
};

const abirLink = (link: string) => {
  window.open(link, '_blank');
};

const redirecionarPagina = (link: string) => {
  router.push({ name: 'Arquivo', query: { file: link } });
};
</script>

<template>
  <VContainer fluid class="pa-6">
    <VRow>
      <VCol cols="12" sm="12" md="4">
      <!-- Escala de Ministério -->
        <VCard elevation="2" class="pa-6 mt-6">
          <div class="d-flex align-center justify-space-between mb-4">
            <VCardTitle class="text-body-1 font-weight-bold">
              <VIcon start color="#FF6B9D">mdi-music</VIcon>
              Escala de Ministério
            </VCardTitle>
          </div>

          <div v-if="ministryDates.length === 0" class="text-center py-6">
            <VIcon size="large" color="grey">mdi-calendar-blank</VIcon>
            <div class="text-caption text-grey mt-2">Nenhuma data de ministério cadastrada</div>
          </div>

          <div v-else class="d-flex flex-column gap-2">
            <div
              v-for="(ministry, index) in ministryDates"
              :key="index"
              class="pa-3 rounded d-flex align-center justify-space-between"
              style="background-color: rgba(255, 107, 157, 0.1); border-left: 4px solid #FF6B9D;"
            >
              <div class="flex-grow-1">
                <div class="font-weight-bold text-body-2">{{ ministry.title }}</div>
                <div class="text-caption">
                  {{ ministry.date.toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' }) }}
                </div>
                <div v-if="ministry.description" class="text-caption text-grey">{{ ministry.description }}</div>
                <div v-if="ministry.link" @click="abirLink(ministry.link)">Link doc</div>
                <div v-if="ministry.arquivo" @click="redirecionarPagina(ministry.arquivo)">Link aplicação</div>
              </div>
            </div>
          </div>
        </VCard>
      </VCol>
      <VCol cols="12" sm="12" md="4">
        <!-- Calendário -->
        <VCard elevation="2" class="pa-6">
          <VCardTitle class="text-h6 font-weight-bold mb-6">
            Calendário
          </VCardTitle>

          <!-- Navegação de Mês -->
          <div class="d-flex align-center justify-space-between mb-6">
            <VBtn icon @click="previousMonth" size="small" variant="text">
              <VIcon>mdi-chevron-left</VIcon>
            </VBtn>
            <div class="text-body-1 font-weight-bold">{{ monthYear }}</div>
            <VBtn icon @click="nextMonth" size="small" variant="text">
              <VIcon>mdi-chevron-right</VIcon>
            </VBtn>
          </div>

          <!-- Cabeçalho do Calendário -->
          <VRow class="justify-content-between">
              <!-- <div v-for="dayName in ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']" :key="dayName" class="text-center font-weight-bold text-primary">{{ dayName }}</div> -->
          </VRow>

          <!-- Dias do Calendário -->
          <VRow>
            <VCol
              cols="12"
              sm="6"
              md="4"
              lg="1.71"
              v-for="(day, index) in calendarDays"
              :key="index"
              class="pa-1"
            >
              <VCard
                :class="getDayClass(day)"
                @click="selectDate(day)"
                variant="tonal"
                style="cursor: pointer; min-height: 80px; display: flex; flex-direction: column; justify-content: center; align-items: center; transition: all 0.2s ease;"
                :style="{
                  opacity: isCurrentMonth(day) ? 1 : 0.5,
                  borderWidth: isSameDay(day, selectedDate) ? '2px' : '1px',
                  borderColor: isSameDay(day, selectedDate) ? 'var(--v-primary-base)' : 'rgba(0,0,0,0.12)'
                }"
                @mouseenter="$event.currentTarget.style.elevation = '8'"
                @mouseleave="$event.currentTarget.style.elevation = '2'"
              >
                <div class="text-center w-100">
                  <div class="text-caption font-weight-bold">{{ day.getDate() }}</div>
                  <div v-if="getMinistryDateInfo(day) || getImportantDateInfo(day)" class="text-xs mt-1 d-flex justify-center gap-1">
                    <VIcon v-if="getMinistryDateInfo(day)" size="small" color="#FF6B9D">
                      mdi-music
                    </VIcon>
                    <VIcon v-if="getImportantDateInfo(day)" size="small" :color="getImportantDateInfo(day)?.importance === 'major' ? 'red' : 'orange'">
                      mdi-star
                    </VIcon>
                  </div>
                </div>
              </VCard>
            </VCol>
          </VRow>

          <!-- Legenda -->
          <VRow class="mt-8">
            <VCol cols="12">
              <div class="text-caption font-weight-bold mb-3">Legenda:</div>
              <div class="d-flex gap-4 flex-wrap">
                <div class="d-flex align-center gap-2">
                  <VIcon color="red" size="small">mdi-star</VIcon>
                  <span class="text-caption">Festa Maior</span>
                </div>
                <div class="d-flex align-center gap-2">
                  <VIcon color="orange" size="small">mdi-star</VIcon>
                  <span class="text-caption">Festa Menor</span>
                </div>
                <div class="d-flex align-center gap-2">
                  <VIcon color="#FF6B9D" size="small">mdi-music</VIcon>
                  <span class="text-caption">Escala de Ministério</span>
                </div>
                <div class="d-flex align-center gap-2">
                  <div class="d-flex align-center justify-center" style="width: 20px; height: 20px; border-radius: 4px; background-color: #e3f2fd;">
                    <div style="width: 16px; height: 16px; border: 2px solid var(--v-primary-base); border-radius: 2px;"></div>
                  </div>
                  <span class="text-caption">Data Selecionada</span>
                </div>
                <div class="d-flex align-center gap-2">
                  <div class="d-flex align-center justify-center" style="width: 20px; height: 20px; border-radius: 4px; background-color: #fff3e0;">
                    <div style="width: 12px; height: 12px; border-radius: 50%; background-color: var(--v-primary-base);"></div>
                  </div>
                  <span class="text-caption">Hoje</span>
                </div>
              </div>
            </VCol>
          </VRow>
        </VCard>
      </VCol>

      <!-- Informações do Período Litúrgico -->
      <VCol cols="12" sm="12" md="4">
        <VCard elevation="2" class="pa-6 mb-6" :style="{ borderLeft: `8px solid ${liturgicalInfo.currentPeriod.color}` }">
          <VCardTitle class="text-h6 font-weight-bold mb-4">
            Período Litúrgico Atual
          </VCardTitle>

          <VAlert type="info" variant="tonal" class="mb-4" closable>
            <div class="d-flex align-center gap-2">
              <VIcon :color="liturgicalInfo.currentPeriod.color">{{ liturgicalInfo.currentPeriod.icon }}</VIcon>
              <div>
                <div class="font-weight-bold">{{ liturgicalInfo.currentPeriod.name }}</div>
                <div class="text-caption">
                  {{ selectedDate.toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' }) }}
                </div>
              </div>
            </div>
          </VAlert>

          <div class="mb-4">
            <div class="text-caption font-weight-bold mb-2">Descrição:</div>
            <div class="text-body-2">{{ liturgicalInfo.currentPeriod.description }}</div>
          </div>

          <div class="mb-4">
            <div class="text-caption font-weight-bold mb-2">Simbolismo:</div>
            <VChip
              :color="liturgicalInfo.currentPeriod.color"
              text-color="white"
              :prepend-icon="liturgicalInfo.currentPeriod.icon"
            >
              {{ liturgicalInfo.currentPeriod.symbolism }}
            </VChip>
          </div>

          <div class="mb-4">
            <div class="text-caption font-weight-bold mb-2">Progresso do Ano Litúrgico:</div>
            <VProgressLinear
              :value="liturgicalInfo.yearProgress"
              :color="liturgicalInfo.currentPeriod.color"
              height="8"
              class="mb-2"
            />
            <div class="text-caption text-grey">{{ liturgicalInfo.yearProgress }}% do ano</div>
          </div>

          <!-- Data Importante -->
          <div v-if="getImportantDateInfo(selectedDate)" class="mt-6 pt-6" style="border-top: 1px solid rgba(0,0,0,0.12);">
            <VAlert type="warning" variant="tonal" closable>
              <VIcon start>mdi-star-circle</VIcon>
              <div class="font-weight-bold">{{ getImportantDateInfo(selectedDate)?.name }}</div>
              <div class="text-caption">Festa {{ getImportantDateInfo(selectedDate)?.importance === 'major' ? 'Maior' : 'Menor' }}</div>
            </VAlert>
          </div>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<style scoped>
.selected-day {
  border-width: 2px !important;
  border-color: var(--v-primary-base) !important;
  background-color: var(--v-primary-base) !important;
  color: white !important;
}

.today {
  box-shadow: inset 0 0 0 2px var(--v-primary-base);
  background-color: rgba(255, 165, 0, 0.1) !important;
}

.important-major {
  background-color: rgba(255, 0, 0, 0.15) !important;
}

.important-minor {
  background-color: rgba(255, 165, 0, 0.15) !important;
}

.ministry-day {
  background-color: rgba(255, 107, 157, 0.15) !important;
}

.text-grey {
  color: rgba(0, 0, 0, 0.38);
}
</style>
