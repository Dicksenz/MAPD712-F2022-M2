import React from "react";
import renderer from "react-test-renderer";
import DatePickerButton from "../../components/DatePickerButton";

test("Check if DatePickerButton component renders correctly", () => {
  const tree = renderer.create(<DatePickerButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
