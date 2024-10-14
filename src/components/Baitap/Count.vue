<template>
  <div>
    <h1>Bài tập 4 :</h1>
    <h2>Count : {{ count }}</h2>

    <button @click="handleIncrement">Increment</button>
    <button @click="handleDecrement">Decrement</button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const count = computed(() => store.state.countState.count);

const handleIncrement = () => {
  store.commit("increment");
};

const handleDecrement = () => {
  store.commit("decrement");
};
</script>

<style></style>
