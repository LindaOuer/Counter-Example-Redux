import { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import CounterRedux from "./components/CounterRedux";

function App() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<CounterRedux />} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>
            </Suspense>
        </>
    );
}

export default App;
