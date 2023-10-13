<template>
  <div class="current-hunt card">
    <img :src="this.pokemonData.url" class="card__image">
    <div class="counter">
      <p class="counter__number" v-if="!editing">Всего встреч: {{ pokemonData.counter }} <span class="counter__edit" @click="editCount"></span></p>
      <div class="counter__number--edit" v-else><p>Всего встреч:</p> <my-input v-model="pokemonData.counter"></my-input><span class="counter__edit-ok" @click="editCountOk">Ok</span></div>
      <div>
        <my-button class="minus" @click="removeCount">-</my-button>
        <my-button class="plus" @click="addCount">+</my-button>
      </div>
    </div>
    <p class="card__name"><strong>Покемон:</strong> {{ pokemonData.name }}</p>
    <p class="card__game"><strong>Игра:</strong> {{ pokemonData.game }}</p>
    <div class="chance-rate">
      <p><strong>Шанс на шайни:</strong> {{ pokemonData.shinyRate }}</p>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      pokemonData: {
        counter: 0,
        url: '',
        id: 1,
        name:'',
        game: 'Pokemon X/Y',
        shinyRate: '1/4096'
      },
      editing: false
    }
  },
  methods: {
    getData(){
      if(!localStorage.getItem("pokemon")){
        localStorage.setItem("pokemon", JSON.stringify(this.pokemonData));
      }
      this.pokemonData = JSON.parse(localStorage.getItem("pokemon"));
      this.fetchPokemon(this.pokemonData.id);
    },
    addCount() {
      this.pokemonData.counter++
      localStorage.setItem("pokemon", JSON.stringify(this.pokemonData));
    },
    removeCount() {
      if(this.pokemonData.counter == 0){
        return
      }
      this.pokemonData.counter--
      localStorage.setItem("pokemon", JSON.stringify(this.pokemonData));
    },
    async fetchPokemon(id) {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+id);
      const pokemon = await response.json();
      this.pokemonData.url = pokemon.sprites.other.home.front_shiny
      this.pokemonData.name = pokemon.name
    },
    editCount(){
      this.editing = true
    },
    editCountOk(){
      localStorage.setItem("pokemon", JSON.stringify(this.pokemonData));
      this.editing = false
    }
  },
  mounted() {
    this.getData()
  }
}
</script>
<style scoped>

.card__name, .card__game {
  align-self: center;
  font-size: 32px;
  margin-bottom: 0;
  text-align: center;
}

.counter {
  position: relative;
  font-size: 42px;
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
}

.counter__number {
  margin-bottom: 20px;
}

.minus {
  margin-right: 10px;
}

.chance-rate {
  align-self: center;
  font-size: 32px;
}


.counter__edit {
  position: absolute;
  right: 10px;
  display: inline-block;
  width: 30px;
  height: 30px;
  background-image: url("../assets/pencil.png");
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
}

.counter__edit-ok {
  display: inline-block;
  font-size: 26px;
  margin-left: 10px;
  padding: 6px 11px;
  color: white;
  background-color: blueviolet;
  border-radius: 46px;
  cursor: pointer;
  height: 27px;
  align-self: center;
}
.counter__number--edit {
  display: flex;

}
.counter__number--edit p {
  margin: 0;
  align-self: center;
  margin-right: 10px;
  font-size: 28px;
}
</style>