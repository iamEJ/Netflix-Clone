import React, { useState, createContext, useContext } from "react";
import { Title, Item, Header, Body, Container, Inner } from "./style/accordion";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}
Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      {...restProps}
    >
      {children}
      {toggleShow ? <RemoveIcon /> : <AddIcon />}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);
  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};
