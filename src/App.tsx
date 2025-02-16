import './App.css'
import {Route, Routes} from "react-router-dom";
import Top from "./pages/Top";
import Navbar from "./features/common/components/Navbar";
import Public from "./layouts/Public";
import Private from "./layouts/Private";
import Upload from "./pages/Run/Upload";
import MyRun from "./pages/Run/MyRun";
import ROUTES from "./libs/router/routes.ts";

function App() {
    return (
        <>
            <Navbar/>

            <div className="mt-4 max-w-[1240px] mx-auto">
                <Routes>
                    <Route element={<Public />}>
                        <Route path={ROUTES.HOME} element={<Top />} />
                    </Route>
                    <Route element={<Private />}>
                        <Route path={ROUTES.MY_RUN} element={<MyRun />} />
                        <Route path={ROUTES.RUN_UPLOAD} element={<Upload />} />
                    </Route>
                </Routes>
            </div>
        </>
    )
}

export default App
