import { Typography } from "../../components/ui/typography";
import { FileUploader } from "../../components/ui/file-uploader";
import { Card } from "../../components/ui/card";

export const FileUploadPage = () => {
  return (
    <Card>
      <Typography as={"h1"} variant={"h1"}>
        Add files to Yandex Drive
      </Typography>
      <FileUploader />
    </Card>
  );
};
