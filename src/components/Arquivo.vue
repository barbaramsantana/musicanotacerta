<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const htmlContent = ref("");
const scrollContainer = ref<HTMLDivElement | null>(null);
const scrollSpeed = ref(10);
const scrolling = ref(false);
const zoom = ref(1);
const fileInput = ref<HTMLInputElement | null>(null);
let currentSpeed = scrollSpeed.value;
let animationFrameId: number | null = null;
let lastTime = 0;
let scrollOffset = 0;

onMounted(async () => {
  const response = await fetch("/musica.html");
  htmlContent.value = await response.text();
});

const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    const file = target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      htmlContent.value = e.target?.result as string;
    };
    reader.readAsText(file);
  }
};

const startScroll = () => {
  if (animationFrameId) return;
  scrolling.value = true;
  currentSpeed = scrollSpeed.value; 
  lastTime = performance.now();

  const step = (time: number) => {
    if (!scrollContainer.value) return;

    const delta = time - lastTime;
    lastTime = time;

    const distance = currentSpeed * (delta / 1000); 
    scrollOffset += distance;

    if (Math.abs(scrollOffset) >= 1) {
      scrollContainer.value.scrollTop += Math.floor(scrollOffset);
      scrollOffset -= Math.floor(scrollOffset);
    }

    animationFrameId = requestAnimationFrame(step);
  };

  animationFrameId = requestAnimationFrame(step);
};

const stopScroll = () => {
  scrolling.value = false;
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
};

const increaseSpeed = () => {
  scrollSpeed.value = +(scrollSpeed.value + 1).toFixed(1);
  if (scrolling.value) currentSpeed = scrollSpeed.value;
};

const decreaseSpeed = () => {
  if (scrollSpeed.value > 0.1) {
    scrollSpeed.value = +(scrollSpeed.value - 1).toFixed(1);
    if (scrolling.value) currentSpeed = scrollSpeed.value;
  }
};

const increaseZoom = () => {
  zoom.value = Math.min(zoom.value + 0.1, 3);
};
const decreaseZoom = () => {
  zoom.value = Math.max(zoom.value - 0.1, 0.5);
};

const handlerInputUpload = () => {
  fileInput.value?.click();
};

onBeforeUnmount(() => {
  stopScroll();
});
</script>


<template>
  <div class="app-container">
    <img src="../assets/logo.png" alt="Fundo" class="background-image" />

    <div
      ref="scrollContainer"
      class="scroll-container"
      :style="{
        transform: `scale(${zoom})`,
      }"
      v-html="htmlContent"
    ></div>

    <!-- Botão de upload -->
    <div class="upload-button">
      <button @click="handlerInputUpload" class="icon-button" title="Carregar HTML">
        <v-icon size="24">mdi-file-upload-outline</v-icon>
      </button>
      <input
        ref="fileInput"
        type="file"
        accept=".html,text/html"
        @change="onFileChange"
        class="hidden-input"
      />
    </div>

    <!-- Menu de controles -->
    <div class="control-menu">
      <button v-if="!scrolling" class="mr-2" @click="startScroll">
        <v-icon>mdi-play</v-icon>
      </button>
      <button v-if="scrolling" class="mr-2" @click="stopScroll">
        <v-icon>mdi-pause</v-icon>
      </button>
      <button class="mr-2" @click="decreaseSpeed">
        <v-icon>mdi-minus</v-icon>
      </button>
      <span class="mr-2">{{ scrollSpeed }}</span>
      <button class="mr-2" @click="increaseSpeed">
        <v-icon>mdi-plus</v-icon>
      </button>
      <button class="mr-2" @click="decreaseZoom">
        <v-icon>mdi-magnify-minus-outline</v-icon>
      </button>
      <span class="mr-2">{{ (zoom * 100).toFixed(0) }}%</span>
      <button class="mr-2" @click="increaseZoom">
        <v-icon>mdi-magnify-plus-outline</v-icon>
      </button>
    </div>
  </div>
</template>
<style scoped>
.app-container {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: contain;
  z-index: 0;
  opacity: 0.2;
}

.scroll-container {
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  background: transparent;
  position: relative;
  z-index: 1;
  top: 75px;
  transform-origin: top left;
}

.upload-button {
  position: absolute;
  bottom: 150px;
  right: 15px;
  z-index: 20;
  background: #000;
  padding: 4px 6px;
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
}

.icon-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: inherit;
}

.hidden-input {
  display: none;
}

.control-menu {
  position: absolute;
  bottom: 100px;
  right: 10px;
  z-index: 10;
  background-color: #000;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  opacity: 0.6;
  display: flex;
  align-items: center;
}
</style>
