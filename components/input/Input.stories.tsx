import { Meta, Story } from "@storybook/react/types-6-0";
import Input from "./Input ";

export default {
  title: "Common/Input",
  component: Input,
} as Meta;

const Template: Story = (args) => <Input {...args} />;

export const User = Template.bind({});

User.args = {};
