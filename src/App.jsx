import { AuthProvider } from "./lib/auth/AuthContext";
import Page from "./pages/Page";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Page />
      </AuthProvider>
    </>
  );
};

export default App;
