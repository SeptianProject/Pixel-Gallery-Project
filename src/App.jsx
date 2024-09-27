import { AuthProvider } from "./lib/context/AuthContext";
import "react-image-crop/dist/ReactCrop.css";
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
