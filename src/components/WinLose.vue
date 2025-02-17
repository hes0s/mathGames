<template>
    <div class="win-lose-container">
      <h2 v-if="score >= 100">Felicitări! Ai câștigat! 🏆</h2>
      <h2 v-else>Dina păcate, ai pierdut. 😢</h2>
      <p>Scor final: {{ score }}</p>
      <button @click="$emit('restart')">Reîncepe</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "WinLose",
    props: {
      score: Number,
    },
  };
  </script>
  
  <style scoped>
  .win-lose-container {
    text-align: center;
    font-family: Arial, sans-serif;
    padding: 20px;
  }
  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  p {
    font-size: 18px;
    margin-bottom: 10px;
  }
  button {
    padding: 10px;
    font-size: 18px;
    cursor: pointer;
  }
  </style>
  