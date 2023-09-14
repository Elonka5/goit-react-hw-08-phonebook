import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing, selectLoading } from 'redux/selectors';
import { Loader } from './Loader/Loader';
import { Navigate, Route, Routes } from 'react-router-dom';
// import Register from './pages/Register';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Header } from './Header/Header';

const Home = lazy(() => import('components/pages/Home'));
const Login = lazy(() => import('components/pages/Login'));
const Register = lazy(() => import('components/pages/Register'));
const Contacts = lazy(() => import('components/pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isLoading = useSelector(selectLoading);

  return isRefresh ? (
    <Loader />
  ) : (
    <div className="container">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={<Login />} redirectTo="/contacts" />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<Register />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<Contacts />} redirectTo="/login" />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {isLoading && <Loader />}
    </div>
  );
};
