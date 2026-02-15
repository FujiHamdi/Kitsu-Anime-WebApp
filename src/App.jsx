import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import PageStatus from "./libs/shared/components/PageStatus";

const AnimeListPage = lazy(() => import("./features/pages/AnimeListPage"));
const AnimeDetailPage = lazy(() => import("./features/pages/AnimeDetailPage"));

function App() {
  return (
    <Suspense fallback={<PageStatus loading={true} />}>
      <Routes>
        <Route path="/" element={<AnimeListPage />} />
        <Route path="/anime/:id" element={<AnimeDetailPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
