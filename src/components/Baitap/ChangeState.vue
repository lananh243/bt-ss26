<template>
  <div>
    <h1>Bài tập 6 :</h1>
    <h2>{{ content }}</h2>
    <button @click="handleChange">Change state</button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const content = computed(() => store.state.changeTitle.text);
const handleChange = () => {
  store.commit("changeText");
};
</script>

<style></style>
