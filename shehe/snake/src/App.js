import SnakeCanvas from "./components/SnakeCanvas";

export default {
  name: "App",
  components: {
    SnakeCanvas
  },
  data() {
    return {
      cellSize: 10,
      boardSize: 20,
      speed: 10,
      scores: 0,
      isPlaying: false
    };
  },
  methods: {
    start() {
      this.isPlaying = true;
      this.scores = 0;
    },
    stop() {
      this.isPlaying = false;
    },
    addScores(scores) {
      this.scores += scores;
    }
  }
};
