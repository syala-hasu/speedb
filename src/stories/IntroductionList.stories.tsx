import type { Meta, StoryObj } from '@storybook/react';
import IntroductionList from "../features/Introduction/components/IntroductionList";


const meta = {
    title: 'Introduction/IntroductionList',
    component: IntroductionList,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: {},
} satisfies Meta<typeof IntroductionList>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {
        introductionList: [
            {
                img: 'https://www.speedrun.com/static/game/pdv27nv6/cover.png',
                title: 'Test Game',
                description: 'Test Game Description'
            },
            {
                img: 'https://www.speedrun.com/static/game/pdv27nv6/cover.png',
                title: 'Test Game',
                description: 'Test Game Description'
            },
            {
                img: 'https://www.speedrun.com/static/game/pdv27nv6/cover.png',
                title: 'Test Game',
                description: 'Test Game Description'
            },
            {
                img: 'https://www.speedrun.com/static/game/pdv27nv6/cover.png',
                title: 'Test Game',
                description: 'Test Game Description'
            },
        ]
    },
};

export const Loading: Story = {
    args: {
        introductionList: [],
        isLoading: true,
    }
}
