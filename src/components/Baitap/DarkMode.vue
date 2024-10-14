<template>
  <div>
    <h1>Bài tập 7 :</h1>
    <div :class="darkModeClass" class="content">
      <label>
        <input type="checkbox" :checked="isDarkMode" @change="toggleMode" />
        {{ isDarkMode ? "Tối" : "Sáng" }}
      </label>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const isDarkMode = computed(() => store.state.changeColor.isDarkMode);

const darkModeClass = computed(() => (isDarkMode.value ? "dark" : "light"));

const toggleMode = () => {
  store.commit("toggleDarkMode");
};
</script>

<style scoped>
.light {
  background-color: #ffffff;
  color: #000000;
}

.dark {
  background-color: #000000;
  color: #ffffff;
}

.content {
  padding: 20px;
  width: 300px;
  height: 150px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
