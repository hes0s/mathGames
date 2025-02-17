<template>
  <div class="quiz-container">
    <h1 class="title">Math Quiz Battle</h1>
    <div v-if="!gameOver" class="game-box">
      <p class="question">{{ question.text }}</p>
      <input
        v-model="userAnswer"
        type="number"
        placeholder="Răspunsul tău"
        @keyup.enter="checkAnswer"
        class="input-box"
      />
      <button @click="checkAnswer" class="btn">Trimite</button>
      <p class="score">Scor: {{ score }}</p>
      <p class="timer">Timp rămas: {{ timeLeft }} sec</p>
      <p class="lives">Vieți rămase: {{ lives }}</p>
    </div>
    <WinLose v-else :score="score" @restart="restartGame" />
  </div>
</template>

<script>
import WinLose from './WinLose.vue'

export default {
  name: 'MathQuiz',
  components: { WinLose },
  data() {
    return {
      question: this.generateQuestion(),
      userAnswer: '',
      score: 0,
      timeLeft: 10,
      gameOver: false,
      timer: null,
      lives: 3,
    }
  },
  methods: {
    generateQuestion() {
      const num1 = Math.floor(Math.random() * 10) + 1
      const num2 = Math.floor(Math.random() * 10) + 1
      return {
        text: `${num1} + ${num2} = ?`,
        answer: num1 + num2,
      }
    },
    checkAnswer() {
      if (parseInt(this.userAnswer) === this.question.answer) {
        this.score += 10
        this.userAnswer = ''
        this.question = this.generateQuestion()
        if (this.score >= 100) {
          this.gameOver = true
          clearInterval(this.timer)
        }
      }
    },
    startTimer() {
      this.timer = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--
        } else {
          this.lives--
          this.timeLeft = 10
          if (this.lives === 0) {
            this.gameOver = true
            clearInterval(this.timer)
          }
        }
      }, 1000)
    },
    restartGame() {
      this.score = 0
      this.timeLeft = 10
      this.gameOver = false
      this.userAnswer = ''
      this.question = this.generateQuestion()
      this.lives = 3
      this.startTimer()
    },
  },
  mounted() {
    this.startTimer()
  },
}
</script>

<style scoped>
.quiz-container {
  text-align: center;
  font-family: 'Poppins', sans-serif;
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
.game-box {
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.question {
  font-size: 22px;
  color: #555;
  margin-bottom: 15px;
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
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.btn:hover {
  background: #45a049;
}
.score,
.timer,
.lives {
  margin-top: 10px;
  font-size: 18px;
  color: #333;
}
</style>
