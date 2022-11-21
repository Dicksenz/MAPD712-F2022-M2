import React from "react";
import renderer from "react-test-renderer";
import CustomAppbar from "../../components/CustomAppbar";

test("Check if CustomAppbar component renders correctly", () => {
  const tree = renderer.create(<CustomAppbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
