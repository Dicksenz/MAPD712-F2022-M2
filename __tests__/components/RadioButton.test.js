import React from "react";
import renderer from "react-test-renderer";
import RadioButton from "../../components/RadioButton";

test("Check if RadioButton component renders correctly", () => {
  const tree = renderer.create(<RadioButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
