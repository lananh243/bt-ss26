<template>
  <div class="change-language">
    <h1>Bài tập 8 :</h1>
    <button @click="toggleLanguage">
      <span v-if="currentLanguage === 'vi'">Switch to Vietnamese</span>
      <span v-else>Switch to English</span>
    </button>
    <p v-if="currentLanguage === 'en'">
      Welcome to the Language Switcher Demo. This interface demonstrates
      switching between English and Vietnamese.
    </p>
    <p v-else>
      Chào mừng đến với Demo Chuyển đổi Ngôn ngữ. Giao diện này thể hiện tính
      năng chuyển đổi ngôn ngữ giữa tiếng Anh và tiếng Việt.
    </p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const currentLanguage = computed(() => store.getters.currentLanguage);

const toggleLanguage = () => {
  const newLanguage = currentLanguage.value === "en" ? "vi" : "en";
  store.commit("setLanguage", newLanguage); // Pass new language as parameter
};
</script>

<style scoped></style>
