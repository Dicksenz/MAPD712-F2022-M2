import React from "react";
import renderer from "react-test-renderer";
import ClinicalCard from "../../components/ClinicalCard";

test("Check if ClinicalCard component renders correctly", () => {
  const tree = renderer.create(<ClinicalCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
