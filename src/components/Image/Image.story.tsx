import { Meta, StoryObj } from '@storybook/react';
import Image from '../Image/Image';

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,

  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'normal'],
      },
    },
    option: {
      control: {
        type: 'boolean',
      },
    },
  },

  args: {
    size: 'normal',
    option: false,
  },
};
export default meta;

type Story = StoryObj<typeof Image>;

export const Component: Story = {
    args: {
        src: "https://img.freepik.com/vecteurs-libre/vecteur-fond-orange-blanc-corporatif-pour-entreprises_53876-166890.jpg"
    },
};