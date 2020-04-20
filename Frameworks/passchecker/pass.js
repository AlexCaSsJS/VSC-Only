// construim o noua aplicatie Vue
var app = new Vue({
    el: '#app',
    data: {
        password: '',
        
    },
    computed: {
        score() {
            // // definim noul score initial egal cu 0
            // let newScore = 0;

            // // evaluam fiecare conditie dintre cele 5 
            // // adaugam 1 la noul score pentru fiecare conditie adevarata
            // newScore +=this.hasSmallLetter();       //   <--- simplificarea codului #1
            // newScore +=this.hasUpperLetter();
            // newScore +=this.hasDigit();
            // newScore +=this.hasSpecialChar();
            // newScore +=this.isLongEnough();

            score = [                //   <--- simplificarea codului #2
                this.hasSmallLetter,
                this.hasUpperLetter,
                this.hasDigit,
                this.hasSpecialChar,
                this.isLongEnough
            ].reduce((score, func) => score + func(), 0);
            return score;
        },
        message() {
            let messages = [
                'very weak',
                'weak',
                'medium',
                'strong',
                'very strong'
            ];
            return messages[this.score()];
        }
    },
    methods: {
        hasSmallLetter: function() {
            return /[a-z]/.test(this.password);
        },
        hasUpperLetter: function() {
            return /[A-Z]/.test(this.password);
        },
        hasDigit: function() {
            return /[0-9]/.test(this.password);
        },
        hasSpecialChar: function() {
            return /[^a-z A-Z 0-9]/.test(this.password);
        },
        isLongEnough: function() {
            return this.password.length >=8;
        },


    }
});