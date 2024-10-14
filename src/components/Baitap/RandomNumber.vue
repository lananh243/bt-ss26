<template>
  <div>
    <h1>Bài tập 5 :</h1>
    <h2>{{ number }}</h2>
    <button @click="handleRandom">Generate Random Number</button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const number = computed(() => store.state.randomNumber.number);

const handleRandom = () => {
  store.commit("generateRandom");
};
</script>

<style></style>
