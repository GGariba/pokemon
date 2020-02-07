// JavaScript source code = [];
pokemonIds = {}



function clearLocal() {
    localStorage.clear();
}

function indexSelector(selected) {
    return Math.floor(Math.random() * selected);
}

function creatUrl(currId) {
    imageStr = "";
    if (currId < 10) {
        imageStr = '<img class="image" src="images/00' + pokemons[currId].id + '.png"/>';
    }
    else if (currId > 9 && currId < 100) {
        imageStr = '<img class="image" src="images/0' + pokemons[currId].id + '.png"/>';

    }
    else {
        imageStr = '<img class="image" src="images/' + pokemons[currId].id + '.png"/>';
    }
    return imageStr;
}


function myPokemonLength(){
    j = 0;
    for (var k in myPokemons) {
        j++
    }
    return j
}



function displayPokemons() {
    var temp = "";
    for (var i = 0; i < 3; i++) {
        pokemonImgUrl = creatUrl(myPokemons[i].id);
        temp += '<div class="pokemonOption">' + pokemonImgUrl + '<h3>' + myPokemons[i].name.english + '</h3></div>';
    }
    document.getElementById("phPokemon").innerHTML = temp
}

//update my available pokemon list 
function UpdatePokemon() {
    var temp = "";
    for (var i = 0; i < myPokemonLength(); i++) {
        temp += '<div class="pokemonBarSelect">' + myPokemons[i].image + '<h6 id="pokemonName">' + myPokemons[i].name + HPprecent(myPokemons[i]) + '%</h6></div>';
    }
    document.getElementById("phMyPokemons").innerHTML = temp
}



function displayPokemones() {
    var temp = "";
    var opponentStr = ""
    for (var i = 0; i < myPokemonLength(); i++) {
        temp += '<div class="pokemonBarSelect">' + myPokemons[i].image + '<h6 id="pokemonName">' + myPokemons[i].name + HPpercentage(myPokemons[i]) + '%</h6></div>';
    }
    document.getElementById("phMyPokemons").innerHTML = temp
    opponentStr = '<div id="pokemonSelect">' + opponent.image + '<h3>' + opponent.name + '</h3></div>';
    document.getElementById("phOpponentPokemon").innerHTML = opponentStr
    
}
//sets the HP as Hp percentage
function HPpercentage(pokemon){
   return (pokemon.base.HP / pokemons[pokemon.id - 1].base.HP) * 100
}

function extractId(item) {
    name = document.getElementById("")
}

function myfighter(item) {
    fName = document.getElementById("pokemons").childNodes

    document.getElementById("phMyPokemon").innerHTML = fighter
}

//pokemon object constractor
function Pokemon(myPokemon) {
    this.id = myPokemon.id;
    this.name = myPokemon.name.english;
    this.type = myPokemon.type;
    this.base = myPokemon.base;
    this.image = creatUrl(myPokemon.id);
    this.attacs = generateAttacks(myPokemon);
}


function calculateAtack(PAttack) {
    return 
}



//receive a pokemo to generate his attacks 
function generateAttacks(selected) {
    var typeSelected = selected.type
    var attacks = []
    var attacks1 = []
    var attacks2 = []
    for (let i = 0; i < typeSelected.length; i++) {
        for (let j = 0; j < moves.length; j++) {
            if (typeSelected[i] == moves[j].type && moves[j].power!=null) {
                if (i == 0) {
                    attacks1.push(moves[j])
                }
                if (i == 1) {
                    attacks2.push(moves[j])
                }
            }
        }
    }
    if (typeSelected.length == 2) {
        let x = indexSelector(attacks1.length)
        let y = indexSelector(attacks2.length)
        attacks.push(attacks1[x])
        attacks.push(attacks2[y])
    }
    if (typeSelected.length == 1) {
        let x = indexSelector(attacks1.length)
        let y = indexSelector(attacks1.length)
        while (x = y) {
            y = indexSelector(attacks1.length)
        }
        attacks.push(attacks1[x])
        attacks.push(attacks1[y])
    }

    return attacks
}


function move(where) {
    location.replace(where)
}


function extractLocal() {
    myPokemons = JSON.parse(localStorage.getItem("currentPokemons"));
    opponent = JSON.parse(localStorage.getItem("opponent"));
    
}


function startBattle() {
    localSave("opponent", randomPokemon)
    move('pokemonChoose.html')
}


function localSave(key, content) {
    localStorage.setItem(key, JSON.stringify(content));
}
