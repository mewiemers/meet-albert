import { Meta, Story } from "@storybook/react/types-6-0";
import Speechbubble from "./Speechbubble";

export default {
  title: "Common/Speechbubble",
  component: Speechbubble,
} as Meta;

const Template: Story = (args) => <Speechbubble {...args} />;

export const User = Template.bind({});

User.args = {};
