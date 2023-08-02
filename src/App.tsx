import { Card } from "./components/ui/card";
import { Typography } from "./components/ui/typography";
import { FileUploader } from "./components/ui/file-uploader";

function App() {
  return (
    <div>
      <Card>
        <Typography as={"h1"} variant={"h1"}>
          Add files to Yandex Drive
        </Typography>
        <FileUploader />
      </Card>
    </div>
  );
}

export default App;
