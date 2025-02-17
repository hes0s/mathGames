<template>
    <div class="main-container">
      <h1 class="title">Alege un joc matematic</h1>
      <div class="game-options">
        <router-link to="/quiz" class="btn">Math Quiz Battle</router-link>
        <router-link to="/guess-the-number" class="btn">Ghiceste Numărul</router-link>
        <button class="btn disabled">Joc nou (Curând)</button>
      </div>
    </div>
  </template>
  
  <script>
  import MathQuiz from "./mathQuiz.vue";
  import TakeTheNumber from "./takeTheNumber.vue";
  export default {
    name: "MainPage",
    cmponents: {MathQuiz, TakeTheNumber},
  };
  </script>
  
  <style scoped>
  .main-container {
    text-align: center;
    font-family: "Poppins", sans-serif;
    padding: 20px;
    max-width: 400px;
    margin: auto;
    background: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  .title {
    font-size: 28px;
    font-weight: bold;
    color: #333;
    margin-bottom: 15px;
  }
  .game-options {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .btn {
    width: 100%;
    padding: 10px;
    font-size: 18px;
    background: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    display: block;
  }
  .btn:hover {
    background: #45a049;
  }
  .btn.disabled {
    background: #ccc;
    cursor: not-allowed;
  }
  </style>
  