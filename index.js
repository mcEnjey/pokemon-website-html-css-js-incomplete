for (let i = 0; i < pokemons.length; i++) {
  const div = createElement(
    "div",
    "card p-3 mx-auto m-2 ",

    `<img src="${pokemons[i].img}">
        <h3>${pokemons[i].name}</h3>
        <p>${pokemons[i].candy} ${pokemons[i].num}</p>
        <p>${pokemons[i].type}</p>
        <p>${pokemons[i].weight} ${pokemons[i].height}</p>

        `
  );
  $(".wrapper").appendChild(div);
}