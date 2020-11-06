import selectionMap from "../../utils/selectionMap";

test("selection map with legitimate data", () => {
  const series = [
    {
      id: "series-1x",
      title: "Vikings",
      description:
        "Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore - and raid - the distant shores across the ocean.",
      genre: "action",
      maturity: "15",
      slug: "vikings",
    },
  ];
  const films = [
    {
      id: "film-1x",
      title: "The Prestige",
      description:
        "Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences.",
      genre: "drama",
      maturity: "15",
      slug: "the-prestige",
    },
  ];
  const slides = selectionMap({ series, films });
  expect(slides.films[0].title).toBe("Drama");
  expect(slides.films[0].data[0].description).toBe(
    "Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences."
  );
  expect(slides.films[0].data[0].genre).toBe("drama");
  expect(slides.films[0].data[0].maturity).toBe("15");
  expect(slides.films[0].data[0].slug).toBe("the-prestige");

  expect(slides.series[0].title).toBe("Action");
  expect(slides.series[0].data[0].description).toBe(
    "Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore - and raid - the distant shores across the ocean."
  );
  expect(slides.series[0].data[0].genre).toBe("action");
  expect(slides.series[0].data[0].maturity).toBe("15");
  expect(slides.series[0].data[0].slug).toBe("vikings");
});
