import { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/Date Picker',
  component: DatePicker,
};
export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Component: Story = {
    args: {
        onChange: () => {},

        range: true,
        initialFirst: undefined,
        initialSecond: undefined,
    },
};