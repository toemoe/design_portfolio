import './styles/App.css';
import AppHeader from './components/AppHeader';
import AppLanding from './components/AppLanding';
import AppSelected from './components/AppSelected';
import AppProfile from './components/AppProfile';
import AppForm from './components/AppForm';
import AppFooter from './components/AppFooter';


export default function App() {
  return (
    <>
    <AppHeader />
    <AppLanding />
    <AppSelected />
    <AppProfile />
    <AppForm />
    <AppFooter />
    </>
  );
};
