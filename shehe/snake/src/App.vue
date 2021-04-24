<template>
  <div id="app">
    <h1>Snake Game</h1>

    <div class="column">
      Cell size (px):
      <input type="number" min="10" v-model.number="cellSize">
    </div>
    <div class="column">
      Board size (cells):
      <input type="number" min="5" v-model.number="boardSize">
    </div>
    <div class="column">
      Speed:
      <input type="number" min="1" v-model.number="speed">
    </div>

    <SnakeCanvas :cellSize="cellSize" :boardSize="boardSize" :speed="speed" :isPlaying="isPlaying" :stop="stop" :addScores="addScores" :scores="scores" />

    <div>Scores: {{ scores }}</div>

    <button
      id="play-btn"
      v-on:click="isPlaying ? stop() : start()"
    >{{ isPlaying ? "Stop" : "Play" }}</button>
  </div>
</template>

<script src="./App.js"></script>

<style src="./App.css"></style>
