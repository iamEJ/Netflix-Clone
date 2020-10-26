import React from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Button, Input, Container, Text } from "./style/optForm";

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}
      <ChevronRightIcon />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
