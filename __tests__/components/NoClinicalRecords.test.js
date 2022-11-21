import React from "react";
import renderer from "react-test-renderer";
import NoClinicalRecords from "../../components/NoClinicalRecords";

test("Check if NoClinicalRecords component renders correctly", () => {
  const tree = renderer.create(<NoClinicalRecords />).toJSON();
  expect(tree).toMatchSnapshot();
});
