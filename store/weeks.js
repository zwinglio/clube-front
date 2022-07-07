import axios from 'axios';

const url = 'http://localhost:8000/api/weeks';
const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' };

export const state = () => ({
    weeks: [],
})

//getters
export const getters = {
    getWeeks(state){
        return state.weeks
    }
}

//mutations
export const mutations = {
    setAllWeeks(state, weeks) {
        state.weeks = weeks
    }
}

//actions
export const actions = {
    async fetchAllWeeks(state) {
        const weeks = await axios.get(url, { headers });
        state.commit('setAllWeeks', weeks.data);
        return weeks;
    },
}
