import { AuthProvider } from "./lib/context/AuthContext";
import "react-image-crop/dist/ReactCrop.css";
import Page from "./pages/Page";
import { CrudProvider } from "./lib/context/CrudContext";

const App = () => {
  return (
    <>
      <AuthProvider>
        <CrudProvider>
          <Page />
        </CrudProvider>
      </AuthProvider>
    </>
  );
};

export default App;
