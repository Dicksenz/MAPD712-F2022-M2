import React from "react";
import renderer from "react-test-renderer";
import LoadingOverlay from "../../components/LoadingOverlay";

test("Check if LoadingOverlay component renders correctly", () => {
  const tree = renderer.create(<LoadingOverlay />).toJSON();
  expect(tree).toMatchSnapshot();
});
