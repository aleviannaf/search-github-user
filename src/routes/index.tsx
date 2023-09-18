import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
} from "react-router-dom";
import SearchPage from "../pages/SearchPage";
import HistoryPage from "../pages/HistoryPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route
                path="/"
                element={<SearchPage />}
            />
            <Route
                path="/historic"
                element={<HistoryPage/>}
            />
        </Route>
    )
)


export default router