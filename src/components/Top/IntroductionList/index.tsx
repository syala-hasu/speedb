import styles from './index.module.css'
import Introduction from "../Introduction";

function IntroductionList() {
    return (
        <>
            <ul className={`grid grid-cols-4`}>
                <li>
                    <Introduction></Introduction>
                </li>
                <li>
                    <Introduction></Introduction>
                </li>
            </ul>
        </>
    )
}

export default IntroductionList
