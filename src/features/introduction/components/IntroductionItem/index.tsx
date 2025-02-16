import React from "react";
import {Introduction} from "../../../../entities/Introduction.ts";

export interface Props {
    introduction: Introduction;
}

function IntroductionItem(props: Props): React.ReactElement {
    return (
        <>
            <td>{props.introduction.playerName}</td>
            <td>{props.introduction.eventName}</td>
            <td></td>
            <td>{props.introduction.category}</td>
            <td>{props.introduction.estHH}:{props.introduction.estMM}:{props.introduction.estSS}</td>
            <td>{props.introduction.description}</td>
        </>
    )
}

export default IntroductionItem
