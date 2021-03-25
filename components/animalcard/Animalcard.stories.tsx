import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Animalcard, { AnimalProps } from "./Animalcard";

export default {
  title: "Common/Animalcard",
  component: Animalcard,
} as Meta;

const Template: Story<AnimalProps> = (args) => <Animalcard {...args} />;

export const Animal = Template.bind({});
Animal.args = {
  _id: "kookaburra",
  name: "Kookaburra",
  ImgSrc: "/imgdb/kookaburra.png",
  description:
    "The Jägerliest, as it is called in German, is also known as 'Laughing Hans'. The reason for this is his reputation, which sounds like he's laughing.He likes to do this early in the morning and often luring locals and visitors out of bed.- belongs to the genus of kingfishers(Eisvogel)- 45 centimetres long, 500g weight (adult) - found in east`, south Australia and Tasmania He likes places nearbodies of water and in tree-rich areas",
  audioFile: "/audiodb/LaughingKookaburra.mp3",
};
