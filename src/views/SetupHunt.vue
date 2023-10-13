<template lang="">
    <div class="card">
        <form method="post" @submit.prevent class="form">
            <div class="form__setup">
                <label>Имя покемона (id):</label>
                <my-input v-model="form.pokemon" type="text" required></my-input>
            </div>
            <div class="form__setup">
                <label>Выберите игру:</label>
                <select v-model="obj.game" required class="form__selet">
                    <option disabled value="">Выберите игру</option>
                    <option v-for="game in getGames" :key="game">
                        {{ game }}
                    </option>
                </select>
            </div>
            <div class="form__setup">
                <label>Выберите метод</label>
                <select v-model="form.method" required class="form__selet">
                    <option disabled value="">Выберите метод</option>
                    <option v-for="method in form.methods" :key="method">
                        {{ method }}
                    </option>
                </select>
            </div>
            <div class="form__setup--radio">
                <p>Есть ли шайни чарм?</p>
                <input type="radio" name="charm" id="no" checked @click="charm == false">
                <label for="no" class="form__label--radio">Нет</label>
                <input type="radio" name="charm" id="yes" @click="charm == true">
                <label for="yes" class="form__label--radio">Да</label>
            </div>
            <my-button type="submit" class="form__btn" @click="setupHunt">Начать поиск</my-button>
        </form>
    </div>
</template>
<script>
import { mapGetters} from 'vuex'
export default {
    data() {
        return {
            form: {
                pokemon: '',
                method: '',
                methods: ['Soft Reset/Random', 'Masuda', 'Friend Safari'],
                charm: false,
                id: ''
            },
            obj: {
                id: '',
                game:'',
                shinyRate: '',
                name:'',
                url:'',
                counter: 0
            }
        }
    },
    methods: {
        shinyChanse() {
            let currentShinyChanse;
            if(this.form.method == 'Soft Reset/Random' && this.form.charm == false){
                currentShinyChanse = '1/4096' 
            } else if(this.form.method == 'Soft Reset/Random' && this.form.charm == true) {
                currentShinyChanse = '1/1356'
            } else if(this.form.method == 'Masuda' && this.form.charm == false) {
                currentShinyChanse = '1/689'
            } else if(this.form.method == 'Friend Safari' && this.form.charm == false) {
                currentShinyChanse = '1/819'
            } else if (this.form.method == 'Masuda' && this.form.charm == true) {
                currentShinyChanse = '1/512'
            } else if(this.form.method == 'Friend Safari' && this.form.charm == true) {
                currentShinyChanse = '1/585'
            }
            return currentShinyChanse;
        },
        setupHunt() {
            this.findPokemon();
        },
        async findPokemon() {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+this.form.pokemon);
                const pokemon = await response.json();
                this.obj.shinyRate = this.shinyChanse();
                if(pokemon.name && this.obj.game.length > 0 && this.obj.shinyRate.length > 0) {
                    this.obj.id = pokemon.id;
                    this.obj.name = pokemon.name;
                    localStorage.setItem("pokemon", JSON.stringify(this.obj));
                    this.$router.push('/');
                }
                
            } catch {
                alert('Ошибка в имени покемона')
                return
            }
        }
    },
    computed: {
        ...mapGetters(['getGames'])
    }

}
</script>
<style scoped>
.form {
    display: flex;
    flex-direction: column;
}
.form__setup {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}
.form__setup--radio {
    flex-direction: row;
    margin-bottom: 20px;
}
.form__setup--radio input[type="radio"] {
    display: none;
}
.form__selet {
    height: 60px;
    padding-left: 10px;
    font-size: 24px;
    margin-top: 15px;
    margin-bottom: 15px;
    background-color: white;
    border-radius: 46px;
    border: 5px solid blueviolet;
    cursor: pointer;
}
.form__label--radio {
    margin-right: 10px;
    position: relative;
    cursor: pointer;
}

.form__setup--radio input[type="radio"]:checked+label::after {
    position: absolute;
    left: 5px;
    top: 6px;
    content: "";
    display: inline-block;
    background-color: white;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    cursor: pointer;
}
.form__label--radio::before {
    content: "";
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-right: 10px;
    border: 3px solid white;
    cursor: pointer;
}
.form__btn {
    margin-top: 15px;
    margin-bottom: 15px;
}
</style>