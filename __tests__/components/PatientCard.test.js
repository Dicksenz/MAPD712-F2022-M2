import React from "react";
import renderer from "react-test-renderer";
import PatientCard from "../../components/PatientCard";

test("Check if PatientCard component renders correctly", () => {
  const tree = renderer.create(<PatientCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
