import React from "react";
import UseContent from "../hooks/useContent";
import selectionMap from "../utils/selectionMap";
import { BrowseContainer } from "../containers/browse";

export default function Browse() {
  const { series } = UseContent("series");
  const { films } = UseContent("films");
  const slides = selectionMap({ series, films });

  return <BrowseContainer slides={slides} />;
}
