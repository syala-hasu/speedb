import IntroductionList from "../../features/Introduction/components/IntroductionList";
import {useFetchIntroductionList} from "../../features/Introduction/hooks/useFetchIntroductionList.ts";

function Top() {
    const {introductionList, isLoading} = useFetchIntroductionList()

    return (
        <>
            <div className={`container mx-auto`}>
                <IntroductionList introductionList={introductionList} isLoading={isLoading}></IntroductionList>
            </div>
        </>
    )
}

export default Top
