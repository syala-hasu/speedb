import IntroductionList from "../../features/introduction/components/IntroductionList";
import {useFetchIntroductionList} from "../../features/introduction/hooks/useFetchIntroductionList.ts";

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
