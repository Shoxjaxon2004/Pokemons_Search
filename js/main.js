var elPokemonsContainer = document.querySelector('.pokemons');
var elPokemonTemplate = document.querySelector('.pokemon-template').content;

// * create a fragment for pokemons
var pokemonsFragment = document.createDocumentFragment('');

pokemons.forEach(function (pokemon) {
    var pokemonTemplateClone = elPokemonTemplate.cloneNode(true);

    pokemonTemplateClone.querySelector('.pokemon__id').textContent = pokemon.id;
    pokemonTemplateClone.querySelector('.pokemon__pic').src = pokemon.img;
    pokemonTemplateClone.querySelector('.pokemon__name').textContent = pokemon.name;

    var pokemonWeak = pokemon.weaknesses;
    // Метод первый 
    pokemon.weaknesses.forEach(function (pokemonWeak) {
        var weakItem = document.createElement('li');
        weakItem.classList.add('pokemon__list')
        weakItem.textContent = pokemonWeak;
        pokemonTemplateClone.querySelector('.pokemon__weak').appendChild(weakItem);
    });

    pokemonsFragment.appendChild(pokemonTemplateClone);
});

elPokemonsContainer.appendChild(pokemonsFragment);

var elPokemonForm = document.querySelector('#pokemon__form');
var elPokemonInput = document.querySelector('#pokemon__input');
var elSearchByName = document.querySelector('#name__search');
var elSearchByWeak = document.querySelector('#weak__search');

elPokemonForm.addEventListener('submit', function(e){
    e.preventDefault();
}); 

var sortedPokemonsFragment = document.createDocumentFragment();

elSearchByName.addEventListener('click' , function(){
    var searchKey = new RegExp(elPokemonInput.value, 'gi');

    var pokemonsSortedByName = pokemons.filter(function(pokemon){
        return pokemon.name.match(searchKey);
    });

    var sortedPokemonsFragment = document.createDocumentFragment();

    pokemonsSortedByName.forEach(function (pokemon) {
        var pokemonTemplateClone = elPokemonTemplate.cloneNode(true);
    
        pokemonTemplateClone.querySelector('.pokemon__id').textContent = pokemon.id;
        pokemonTemplateClone.querySelector('.pokemon__pic').src = pokemon.img;
        pokemonTemplateClone.querySelector('.pokemon__name').textContent = pokemon.name;
    
        var pokemonWeak = pokemon.weaknesses;

        pokemon.weaknesses.forEach(function (pokemonWeak) {
            var weakItem = document.createElement('li');
            weakItem.classList.add('pokemon__list')
            weakItem.textContent = pokemonWeak;
            pokemonTemplateClone.querySelector('.pokemon__weak').appendChild(weakItem);
        });
    
        sortedPokemonsFragment.appendChild(pokemonTemplateClone);
    });
    elPokemonsContainer.textContent = '';
    elPokemonsContainer.appendChild(sortedPokemonsFragment);
});
