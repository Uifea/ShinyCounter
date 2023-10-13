export default {
    actions: {
    },
    mutations: {
    },
    state: {
        games: ['Pokemon X/Y', 'Pokemon Omega Ruby/Alpha Sapphire', 'Pokemon Sun/Moon', 'Pokemon Ultra Sun/Ultra Moon', 'Lets Go Pikachu/Eevee', 'Pokemon Sword/Shield', 'Pokemon Scarlet/Violet']
    },
    getters: {
        getGames(state) {
            return state.games
        }
    }
}