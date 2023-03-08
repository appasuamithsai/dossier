import React, { ReactNode, useState } from "react";
import { PublishedFileContext, InfographyDeleteContext } from "./context";

interface PropTypes {
  children: ReactNode;
}
const ContextProvider = (props: PropTypes) => {
  const [fileType, setFileType] = useState("");
  const [visible, setVisible] = useState(false);
  return (
    <PublishedFileContext.Provider value={{ fileType, setFileType }}>
      <InfographyDeleteContext.Provider value={{ visible, setVisible }}>
        {props.children}
      </InfographyDeleteContext.Provider>
    </PublishedFileContext.Provider>
  );
};
export default ContextProvider;
