
var app = new Vue({
    el: "#app",
    // datele
    data: {
        fact: "Loading..."
    },
    // metoda care se apeleaza cand porneste aplicatia Vue:
    mounted() {
        axios
            .get('http://api.icndb.com/jokes/random')
            .then(response => this.fact = response.data.value.joke)
            .catch(error => console.log(error));
    }
});