import React from "react";
import renderer from "react-test-renderer";

import NoPatients from "../../components/NoPatients";

test("Check if NoPatient component renders correctly", () => {
  const tree = renderer.create(<NoPatients />).toJSON();
  expect(tree).toMatchSnapshot();
});
