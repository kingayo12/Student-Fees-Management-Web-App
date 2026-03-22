import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./features/dashboard/Dashboard.jsx";
import Reports from "./features/dashboard/Reports.jsx";
import FamilyList from "./features/families/FamilyList.jsx";
import StudentList from "./features/students/StudentList.jsx";
import ClassList from "./features/classes/ClassList.jsx";
import FeeSetup from "./features/fees/FeeSetup.jsx";
import Login from "./features/auth/Login.jsx";
import Register from "./features/auth/Register.jsx";
import ProtectedRoute from "./components/common/ProtectedRoute.jsx";
import FamilyDetails from "./features/families/FamilyDetails.jsx";
import StudentDetails from "./features/students/StudentDetails.jsx";
import MasterLayout from "./Layout/MasterLayout.jsx";
import ClassDetails from "./features/classes/ClassDetails.jsx";
import SettingsPage from "./features/settings/Setting.jsx";
import MigrateTerms from "./features/settings/MigrateTerms.jsx";
import PaymentHistory from "./features/fees/PaymentHistory.jsx";
import PreviousBalances from "./features/previous_balance/Previousbalances.jsx";
import Discounts from "./features/discount/Discounts.jsx";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/* Redirect bare / → /dashboard */}
        <Route path='/' element={<Navigate to='/dashboard' replace />} />

        {/* Protected pages inside layout */}
        <Route
          path='/*'
          element={
            <MasterLayout>
              <Routes>
                {/* ✅ dashboard route (was "/" before — broke nav links) */}
                <Route
                  path='/dashboard'
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path='/families'
                  element={
                    <ProtectedRoute>
                      <FamilyList />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path='/families/:id'
                  element={
                    <ProtectedRoute>
                      <FamilyDetails />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path='/students'
                  element={
                    <ProtectedRoute>
                      <StudentList />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path='/students/:id'
                  element={
                    <ProtectedRoute>
                      <StudentDetails />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path='/classes'
                  element={
                    <ProtectedRoute>
                      <ClassList />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path='/classes/:id'
                  element={
                    <ProtectedRoute>
                      <ClassDetails />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path='/fees'
                  element={
                    <ProtectedRoute>
                      <FeeSetup />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path='/payment-history'
                  element={
                    <ProtectedRoute>
                      <PaymentHistory />
                    </ProtectedRoute>
                  }
                />

                {/* ✅ reports route was missing entirely */}
                <Route
                  path='/reports'
                  element={
                    <ProtectedRoute>
                      <Reports />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path='/balance'
                  element={
                    <ProtectedRoute>
                      <PreviousBalances />
                    </ProtectedRoute>
                  }
                />

                {/* ✅ fixed capital D → lowercase */}
                <Route
                  path='/discount'
                  element={
                    <ProtectedRoute>
                      <Discounts />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path='/settings'
                  element={
                    <ProtectedRoute>
                      <SettingsPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path='/migrate'
                  element={
                    <ProtectedRoute>
                      <MigrateTerms />
                    </ProtectedRoute>
                  }
                />

                {/* Catch-all */}
                <Route path='*' element={<Navigate to='/dashboard' replace />} />
              </Routes>
            </MasterLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
