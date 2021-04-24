import "https://unpkg.com/vue/dist/vue.js"
import "https://unpkg.com/vuex/dist/vue.js"

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--,
    }
})

new Vue({
    el: '#app',
    store,
    template: `
        <div>
            <p>{{count}}</p>
            <p>
                <button @click='increment'>+</button>                
                <button @click='decrement'>-</button>
            </p>
        </div>
    `,
    computed: {
        count() {
            return store.state.count
        }
        
    },
    methods: {
        increment: () => store.commit('increment'),
        decrement: () => store.commit('decrement')
    },
})