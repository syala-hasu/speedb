import {MockConfig} from "../../../../libs/axios/client.ts";

export const GameMockResponse: MockConfig = {
    status: 200,
    delay: 1000,
    data: [
        {
            id: 'examplegame1',
            img: 'https://www.speedrun.com/static/game/pdv27nv6/cover.png',
            title: 'Test Game',
        },
        {
            id: 'examplegame2',
            img: 'https://www.speedrun.com/static/game/pdv27nv6/cover.png',
            title: 'Test Game',
        },
        {
            id: 'examplegame3',
            img: 'https://www.speedrun.com/static/game/pdv27nv6/cover.png',
            title: 'Test Game',
        },
        {
            id: 'examplegame4',
            img: 'https://www.speedrun.com/static/game/pdv27nv6/cover.png',
            title: 'Test Game',
        },
    ]
}