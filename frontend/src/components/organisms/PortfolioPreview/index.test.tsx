import React from "react";
import { render } from "@testing-library/react";
import PortfolioPreview from ".";
import "@testing-library/jest-dom";
import {DATA_ARRAY} from "./index"
describe("Page PortfolioPreview", () => {
    it("should match snapshot", () => {
  
      const wrapper = render(<PortfolioPreview contentArray={DATA_ARRAY} />);
      expect(wrapper).toBeTruthy;
    });
    
  });