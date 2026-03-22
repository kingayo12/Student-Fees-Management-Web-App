import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../features/dashboard/Dashboard";
import FamilyList from "../features/families/FamilyList";
import StudentList from "../features/students/StudentList";
import ClassList from "../features/classes/ClassList";
import FeeSetup from "../features/fees/FeeSetup";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";
import ProtectedRoute from "../components/common/ProtectedRoute";
import FamilyDetails from "../features/families/FamilyDetails";
import StudentDetails from "../features/students/StudentDetails";
import MasterLayout from "../Layout/MasterLayout";
import ClassDetails from "../features/classes/ClassDetails";
import SettingsPage from "../features/settings/Setting";
import MigrateTerms from "../features/settings/MigrateTerms";
import PaymentHistory from "../features/fees/PaymentHistory";
import PreviousBalances from "../features/previous_balance/Previousbalances";
import Discounts from "../features/discount/Discounts";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route
          path='/*'
          element={
            <MasterLayout>
              <Routes>
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
                  path='/students'
                  element={
                    <ProtectedRoute>
                      <StudentList />
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
                  path='/fees'
                  element={
                    <ProtectedRoute>
                      <FeeSetup />
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
                  path='/students/:id'
                  element={
                    <ProtectedRoute>
                      <StudentDetails />
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
                  path='/balance'
                  element={
                    <ProtectedRoute>
                      <PreviousBalances />
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
                <Route
                  path='/payment-history'
                  element={
                    <ProtectedRoute>
                      <PaymentHistory />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path='/Discount'
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
              </Routes>
            </MasterLayout>
          }
        />

        {/* <Route path='/' element={<Navigate to='/dashboard' />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
