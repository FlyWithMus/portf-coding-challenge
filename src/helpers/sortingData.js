const dataExample = [
  {
    id: 18,
    name: "Russian Doll – India Pale Ale",
    tagline: "Nesting Hop Bomb.",
    first_brewed: "/2014",
    description:
      "The levels of hops vary throughout the range. We love hops, so all four beers are big, bitter badasses, but by tweaking the amount of each hop used later in the boil and during dry- hopping, we can balance the malty backbone with some unexpected flavours. Simcoe is used in the whirlpool for all four beers, and yet still lends different characters to each",
    image_url: "https://images.punkapi.com/v2/18.png",
    abv: 6,
    ibu: 70,
    target_fg: 1012,
    target_og: 1058,
    ebc: 25,
    srm: 12.5,
    ph: 5.2,
    attenuation_level: 79.3,
    volume: { value: 20, unit: "litres" },
    boil_volume: { value: 25, unit: "litres" },
    method: {
      mash_temp: [{ temp: { value: 65, unit: "celsius" }, duration: 75 }],
      fermentation: { temp: { value: 19, unit: "celsius" } },
      twist: null,
    },
    ingredients: {
      malt: [
        { name: "Extra Pale", amount: { value: 5.06, unit: "kilograms" } },
        { name: "Caramalt", amount: { value: 0.25, unit: "kilograms" } },
        { name: "Dark Crystal", amount: { value: 0.06, unit: "kilograms" } },
      ],
      hops: [
        {
          name: "Cascade",
          amount: { value: 2.5, unit: "grams" },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "Centennial",
          amount: { value: 12.5, unit: "grams" },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "Simcoe",
          amount: { value: 17.5, unit: "grams" },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "Simcoe",
          amount: { value: 17.5, unit: "grams" },
          add: "end",
          attribute: "flavour",
        },
        {
          name: "Citra",
          amount: { value: 17.5, unit: "grams" },
          add: "end",
          attribute: "flavour",
        },
        {
          name: "Simcoe",
          amount: { value: 75, unit: "grams" },
          add: "dry hop",
          attribute: "aroma",
        },
        {
          name: "Cascade",
          amount: { value: 75, unit: "grams" },
          add: "dry hop",
          attribute: "aroma",
        },
        {
          name: "Centennial",
          amount: { value: 75, unit: "grams" },
          add: "dry hop",
          attribute: "aroma",
        },
        {
          name: "Citra",
          amount: { value: 25, unit: "grams" },
          add: "dry hop",
          attribute: "aroma",
        },
      ],
      yeast: "Wyeast 1056 - American Ale™",
    },
    food_pairing: [
      "Spicy chicken skewers",
      "Fish tacos with hot sauce",
      "Lemon pound cake with a ice sugar glaze",
    ],
    brewers_tips:
      "Create balance through experimentation with the hop amounts and malt backbone.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    id: 34,
    name: "Bourbon Baby",
    tagline: "Barrel-Aged Scotch Ale.",
    first_brewed: "01/2014",
    description:
      "Santa Paws Scotch ale aged in bourbon barrels - light, dry and toasty, with vanilla, hints of chocolate and ginger biscuit, and a faint spicy hoppiness.",
    image_url: "https://images.punkapi.com/v2/34.png",
    abv: 5.8,
    ibu: 35,
    target_fg: 1005,
    target_og: 1049,
    ebc: 44,
    srm: 22,
    ph: 4.4,
    attenuation_level: 90,
    volume: { value: 20, unit: "litres" },
    boil_volume: { value: 25, unit: "litres" },
    method: {
      mash_temp: [{ temp: { value: 65, unit: "celsius" }, duration: 90 }],
      fermentation: { temp: { value: 19, unit: "celsius" } },
      twist: null,
    },
    ingredients: {
      malt: [
        { name: "Extra Pale", amount: { value: 1.75, unit: "kilograms" } },
        { name: "Munich", amount: { value: 0.44, unit: "kilograms" } },
        { name: "Dark Crystal", amount: { value: 0.5, unit: "kilograms" } },
        { name: "Wheat", amount: { value: 0.56, unit: "kilograms" } },
        { name: "Flaked Oats", amount: { value: 0.56, unit: "kilograms" } },
        {
          name: "Carafa Special Malt Type 3",
          amount: { value: 0.13, unit: "kilograms" },
        },
        { name: "Amber", amount: { value: 0.25, unit: "kilograms" } },
        {
          name: "Weyermann Beech Smoked",
          amount: { value: 0.06, unit: "kilograms" },
        },
      ],
      hops: [
        {
          name: "First Gold",
          amount: { value: 18.5, unit: "grams" },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "Willamette",
          amount: { value: 12.5, unit: "grams" },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "Hallertauer Mittelfrüh",
          amount: { value: 6, unit: "grams" },
          add: "middle",
          attribute: "flavour",
        },
      ],
      yeast: "Wyeast 1056 - American Ale™",
    },
    food_pairing: [
      "Blackened cajun beef",
      "Pulled pork",
      "Millionaire's shortbread",
    ],
    brewers_tips:
      "Use bourbon-soaked oak chips in secondary to achieve barrel character.",
    contributed_by: "Ali Skinner <AliSkinner>",
  },
  {
    id: 39,
    name: "Kohatu - IPA Is Dead",
    tagline: "Single Hop India Pale Ale.",
    first_brewed: "02/2014",
    description:
      "As you’d expect from a New Zealand hop variety, Kohatu contributes bags of tropical fruit, but with loads of lime notes, & pineapple hits. Seriously fruity, with sweet, juicy melon and stonefruit notes.",
    image_url: "https://images.punkapi.com/v2/39.png",
    abv: 7.2,
    ibu: 70,
    target_fg: 1012,
    target_og: 1067,
    ebc: 30,
    srm: 15,
    ph: 4.4,
    attenuation_level: 82.1,
    volume: { value: 20, unit: "litres" },
    boil_volume: { value: 25, unit: "litres" },
    method: {
      mash_temp: [{ temp: { value: 65, unit: "celsius" }, duration: null }],
      fermentation: { temp: { value: 19, unit: "celsius" } },
      twist: null,
    },
    ingredients: {
      malt: [
        { name: "Extra Pale", amount: { value: 5.65, unit: "kilograms" } },
        { name: "Caramalt", amount: { value: 0.31, unit: "kilograms" } },
        { name: "Dark Crystal", amount: { value: 0.06, unit: "kilograms" } },
      ],
      hops: [
        {
          name: "Kohatu",
          amount: { value: 37.5, unit: "grams" },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "Kohatu",
          amount: { value: 25, unit: "grams" },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "Kohatu",
          amount: { value: 37.5, unit: "grams" },
          add: "end",
          attribute: "flavour",
        },
        {
          name: "Kohatu",
          amount: { value: 250, unit: "grams" },
          add: "dry hop",
          attribute: "aroma",
        },
      ],
      yeast: "Wyeast 1056 - American Ale™",
    },
    food_pairing: [
      "Tuna sushi roll with spicy mayonnaise sauce",
      "Thai green curry",
      "Pineapple upside down cake",
    ],
    brewers_tips:
      "New Zealand hops are in short supply - club together with other brewers to try and get hold of some, or ask your local brewery if you can buy small amounts from them.",
    contributed_by: "Sam Mason <samjbmason>",
  },
];

const sortData = (beersData) => {
  let simpleBeersArray = [];

  for (let i = 0; i < beersData.length; i++) {
    simpleBeersArray[i] = {
      name: beersData[i].name,
      first_brewed: beersData[i].first_brewed,
      month: +beersData[i].first_brewed.split("/")[0],
      year: +beersData[i].first_brewed.split("/")[1],
    };
  }

  for (let i = 0; i < simpleBeersArray.length; i++) {
    simpleBeersArray[i].date = new Date(
      `${simpleBeersArray[i].year}-${simpleBeersArray[i].month || "01"}-02`
    );
  }

  console.log(simpleBeersArray);

  const orderedBeersArray = simpleBeersArray.sort((a, b) => a.date - b.date);

  return orderedBeersArray;
};

export default sortData;
