import React from "react";
import renderer from "react-test-renderer";
import FabButton from "../../components/FabButton";

test("Check if FabButton renders correctly", () => {
  const tree = renderer.create(<FabButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
