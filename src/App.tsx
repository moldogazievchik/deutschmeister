import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useUserStore } from './store/userStore';
import { Layout } from './components/layout';

// Pages
import { Landing } from './pages/Landing';
import { Onboarding } from './pages/Onboarding';
import { Dashboard } from './pages/Dashboard';
import { Levels } from './pages/Levels';
import { Level } from './pages/Level';
import { Vocabulary } from './pages/Vocabulary';
import { Practice } from './pages/Practice';
import { Settings } from './pages/Settings';
import { VocabularyPractice } from './pages/VocabularyPractice';
import { PracticeSession } from './pages/PracticeSession';
import { ModulePage } from './pages/ModulePage';
import { Grammar } from './pages/Grammar';
import { Exams } from './pages/Exams';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { onboardingCompleted } = useUserStore();

  if (!onboardingCompleted) {
    return <Navigate to="/onboarding" replace />;
  }

  return <Layout>{children}</Layout>;
}

function App() {
  const { onboardingCompleted } = useUserStore();

  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route
          path="/"
          element={
            onboardingCompleted ? <Navigate to="/dashboard" replace /> : <Landing />
          }
        />
        <Route path="/onboarding" element={<Onboarding />} />

        {/* Protected routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/levels"
          element={
            <ProtectedRoute>
              <Levels />
            </ProtectedRoute>
          }
        />
        <Route
          path="/levels/:level"
          element={
            <ProtectedRoute>
              <Level />
            </ProtectedRoute>
          }
        />
        <Route
          path="/levels/:level/:module"
          element={
            <ProtectedRoute>
              <ModulePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/vocabulary"
          element={
            <ProtectedRoute>
              <Vocabulary />
            </ProtectedRoute>
          }
        />
        <Route
          path="/vocabulary/practice"
          element={
            <ProtectedRoute>
              <VocabularyPractice />
            </ProtectedRoute>
          }
        />
        <Route
          path="/grammar"
          element={
            <ProtectedRoute>
              <Grammar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/practice"
          element={
            <ProtectedRoute>
              <Practice />
            </ProtectedRoute>
          }
        />
        <Route
          path="/practice/:type"
          element={
            <ProtectedRoute>
              <PracticeSession />
            </ProtectedRoute>
          }
        />
        <Route
          path="/exams"
          element={
            <ProtectedRoute>
              <Exams />
            </ProtectedRoute>
          }
        />
        <Route
          path="/academic"
          element={
            <ProtectedRoute>
              <div className="text-center py-12">
                <h2 className="text-xl font-bold">Академический немецкий</h2>
                <p className="text-gray-600">Доступен с уровня B2</p>
              </div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
