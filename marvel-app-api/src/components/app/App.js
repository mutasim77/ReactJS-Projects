import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainPage, ComicsPage, Page404, SingleComicPage } from '../pages';
import AppHeader from "../appHeader/AppHeader";

const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader />
                <main>
                    <Routes>
                        <Route
                            path="/"
                            element={<MainPage />}
                            errorElement={<Page404 />}
                        />
                        <Route
                            path="/comics"
                            element={<ComicsPage />}
                        />
                        <Route
                            path="/comics/:comicId"
                            element={<SingleComicPage />}
                        />
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App;