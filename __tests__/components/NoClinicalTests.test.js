import React from "react";
import renderer from "react-test-renderer";
import NoClinicalTests from "../../components/NoClincalTests";

test("Check if NoClinicalTests component renders correctly", () => {
  const tree = renderer.create(<NoClinicalTests />).toJSON();
  expect(tree).toMatchSnapshot();
});
