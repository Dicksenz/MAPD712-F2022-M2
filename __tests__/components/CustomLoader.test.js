import React from "react";
import renderer from "react-test-renderer";
import CustomLoader from "../../components/CustomLoader";

test("Check if CustomLoader component renders correctly", () => {
  const tree = renderer.create(<CustomLoader />).toJSON();
  expect(tree).toMatchSnapshot();
});
