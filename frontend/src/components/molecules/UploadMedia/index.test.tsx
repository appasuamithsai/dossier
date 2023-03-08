import React from "react";
import { render } from "@testing-library/react";
import UploadMedia from ".";
import "@testing-library/jest-dom";

describe("UploadMedia", () => {
    it("should match snapshot", () => {
  
      const wrapper = render(<UploadMedia />);
      expect(wrapper).toBeTruthy;
    });
    
  });