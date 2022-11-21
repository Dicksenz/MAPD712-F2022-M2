import React from "react";
import renderer from "react-test-renderer";
import CriticalConditionCard from "../../components/CriticalConditionCard";

test("Check if CriticalConditionCard component renders correctly", () => {
  const tree = renderer.create(<CriticalConditionCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
