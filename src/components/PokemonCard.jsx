function PokemonCard() {
  const pokemon = "mew";

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

  const PokemonCard = (name) => {
    const Pokemondata = pokemonList.find(pokemon => pokemon.name === name);
    
    return (
      <div>
        {Pokemondata && (
          <>
            <img src={Pokemondata.imgSrc} alt={Pokemondata.name}/>
            <figcaption>{Pokemondata.name}</figcaption>
          </>
        )}
        {!Pokemondata && (
          <div>
            <figcaption>???</figcaption>
          </div>
        )}
      </div>
    );
  };

  return (
    <figure className="card">
      {PokemonCard(pokemon)}
    </figure>
  );
}

export default PokemonCard;
