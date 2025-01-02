import IntroductionList from "../../features/Introduction/components/IntroductionList";
import {useFetchIntroductionList} from "../../features/Introduction/hooks/Introduction/useFetchIntroductionList.ts";

function Top() {
    const {introductionList, isLoading} = useFetchIntroductionList()

    return (
        <>
            <div className={``}>
                <IntroductionList introductionList={introductionList} isLoading={isLoading}></IntroductionList>
            </div>
        </>
    )
}

export default Top
