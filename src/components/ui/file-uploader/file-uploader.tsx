import s from "./file-uploader.module.scss";
import { Button } from "../button";
import { useRef } from "react";

type FileUploadPropsType = {
  onChange?: (file: FileList | null) => void;
};

export const FileUploader = ({ onChange }: FileUploadPropsType) => {
  const filePicker = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    filePicker.current?.click();
  };
  return (
    <>
      <input
        type={"file"}
        multiple
        className={s.hidden}
        ref={filePicker}
        onChange={(e) => (onChange ? onChange(e.target?.files) : null)}
      />
      <Button variant={"primary"} onClick={handleClick}>
        Pick files
      </Button>
    </>
  );
};
