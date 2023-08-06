import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./login/login.tsx";
import { FileUploadPage } from "./file-upload.page/file-upload.page.tsx";

export const router = createBrowserRouter([
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <FileUploadPage />,
  },
]);
