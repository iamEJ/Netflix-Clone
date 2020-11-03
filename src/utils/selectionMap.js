export default function selectionMap({ series, films }) {
  return {
    series: [
      {
        title: "Action",
        data: series?.filter((item) => item.genre === "action"),
      },
      {
        title: "Comedy",
        data: series?.filter((item) => item.genre === "comedies"),
      },
      {
        title: "Children",
        data: series?.filter((item) => item.genre === "children"),
      },
      {
        title: "Crime",
        data: series?.filter((item) => item.genre === "crime"),
      },
      {
        title: "Romance",
        data: series?.filter((item) => item.genre === "romance"),
      },
    ],
    films: [
      { title: "Drama", data: films?.filter((item) => item.genre === "drama") },
      {
        title: "Thriller",
        data: films?.filter((item) => item.genre === "thriller"),
      },
      {
        title: "Children",
        data: films?.filter((item) => item.genre === "children"),
      },
      {
        title: "Suspense",
        data: films?.filter((item) => item.genre === "suspense"),
      },
      {
        title: "Romance",
        data: films?.filter((item) => item.genre === "romance"),
      },
    ],
  };
}
