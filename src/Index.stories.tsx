import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from "./index";

const meta: Meta<typeof AspectRatio> = {
  component: AspectRatio,
  title: "Marbella/AspectRatio",
  argTypes: {},
};
export default meta;

type Story = StoryObj;

export const Primary: Story = (args: any) => (
  <AspectRatio ratio={16 / 9} className="bg-muted">
    <img
      src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
      alt="Photo by Drew Beamer"
      className="rounded-md object-cover"
    />
  </AspectRatio>
);
Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};
