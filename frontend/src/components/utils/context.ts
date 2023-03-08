import React from "react";

interface PublishedFileContextTypes {
  fileType: string;
  setFileType: React.Dispatch<React.SetStateAction<string>>;
}
export const PublishedFileContext =
  React.createContext<PublishedFileContextTypes | null>(null);
export const UserContext = React.createContext<any>({});
interface InfographyDeleteContextTypes {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
export const InfographyDeleteContext = React.createContext<any>({});
export default PublishedFileContext;
