<template>
    <div class="game-container">
      <h1 class="title">Ghiceste Numărul</h1>
      <p class="description">Ghicește numărul între 1 și 100.</p>
      <input v-model.number="userGuess" type="number" placeholder="Introdu un număr" class="input-box" @keyup.enter="checkGuess" />
      <button @click="checkGuess" class="btn">Verifică</button>
      <p class="feedback">{{ feedback }}</p>
      <p class="attempts">Încercări rămase: {{ attempts }}</p>
      <button v-if="gameOver" @click="restartGame" class="btn restart">Reîncepe</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "TakeTheNumber",
    data() {
      return {
        targetNumber: Math.floor(Math.random() * 100) + 1,
        userGuess: null,
        feedback: "",
        attempts: 10,
        gameOver: false,
      };
    },
    methods: {
      checkGuess() {
        if (this.gameOver) return;
        
        if (this.userGuess === this.targetNumber) {
          this.feedback = "Felicitări! Ai ghicit numărul! 🎉";
          this.gameOver = true;
        } else if (this.userGuess > this.targetNumber) {
          this.feedback = "Numărul este mai mic!";
        } else {
          this.feedback = "Numărul este mai mare!";
        }
        
        this.attempts--;
        if (this.attempts === 0 && this.userGuess !== this.targetNumber) {
          this.feedback = `Ai pierdut! Numărul era ${this.targetNumber}. 😢`;
          this.gameOver = true;
        }
      },
      restartGame() {
        this.targetNumber = Math.floor(Math.random() * 100) + 1;
        this.userGuess = null;
        this.feedback = "";
        this.attempts = 10;
        this.gameOver = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .game-container {
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
  .description {
    font-size: 18px;
    color: #555;
    margin-bottom: 10px;
  }
  .input-box {
    width: 100%;
    padding: 10px;
    font-size: 18px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 10px;
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
    margin-bottom: 10px;
  }
  .btn:hover {
    background: #45a049;
  }
  .btn.restart {
    background: #007BFF;
  }
  .btn.restart:hover {
    background: #0056b3;
  }
  .feedback {
    font-size: 18px;
    color: #333;
    margin-top: 10px;
  }
  .attempts {
    font-size: 16px;
    color: #777;
  }
  </style>
  