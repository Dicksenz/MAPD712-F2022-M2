import React from "react";
import renderer from "react-test-renderer";
import CustomButton from "../../components/CustomButton";

test("Check if CustomButton component renders correctly", () => {
  const tree = renderer.create(<CustomButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
