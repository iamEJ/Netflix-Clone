import React from "react";
import { Container, Title, SubTitle } from "./style/feature";

export default function Feature({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Feature.Title = function FeatureTitle({ children, ...restprops }) {
  return <Title {...restprops}>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({ children, ...restprops }) {
  return <SubTitle {...restprops}>{children}</SubTitle>;
};
