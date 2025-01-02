import {MockConfig} from "../../../../libs/axios/client.ts";

export const IntroductionMockResponse: MockConfig = {
    status: 200,
    delay: 1000,
    data: [
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
}