import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import publicRoutes from './routes';
import DefaultLayout from './layouts/DefaultLayout';
import publicArchive from './pages/News/Archive';
import ScrollToTop from './components/ScrollToTop';
function App() {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <DefaultLayout>
                                            <Page />
                                        </DefaultLayout>
                                    }
                                />
                            );
                        })}
                        {publicArchive.map((route, index) => {
                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path()}
                                    element={
                                        <DefaultLayout>
                                            <Page />
                                        </DefaultLayout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </ScrollToTop>
        </BrowserRouter>
    );
}

export default App;
