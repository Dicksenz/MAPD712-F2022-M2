import React from "react";
import renderer from "react-test-renderer";
import ModalCard from "../../components/ModalCard";

test("Check if ModalCard component renders correctly", () => {
  const tree = renderer.create(<ModalCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
