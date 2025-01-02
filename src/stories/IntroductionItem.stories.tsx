import type { Meta, StoryObj } from '@storybook/react';
import IntroductionItem from "../features/introduction/components/IntroductionItem";


const meta = {
    title: 'introduction/IntroductionItem',
    component: IntroductionItem,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: {
    },
} satisfies Meta<typeof IntroductionItem>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {
        id: 'example1',
        img: 'https://www.speedrun.com/static/game/pdv27nv6/cover.png?v=fcbf150',
        title: 'Test Game',
        description: 'Test Game Description'
    },
};
