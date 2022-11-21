import React from "react";
import renderer from "react-test-renderer";
import FilterButton from "../../components/FilterButton";

test("Check if CustomButton component renders correctly", () => {
  const tree = renderer.create(<FilterButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
