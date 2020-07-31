import React from "react";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";
import { Avartar } from "./Avatar";

// …
export default {
  title: "Design System|Avartar",
  component: Avartar,
};

export const knobs = () => (
  <Avatar
    loading={boolean("Loading")}
    size={select("Size", ["tiny", "small", "medium", "large"])}
    username="Dominic Nguyen"
    src="https://avatars2.githubusercontent.com/u/263385"
  />
);

knobs.story = {
  decorators: [withKnobs],
};
