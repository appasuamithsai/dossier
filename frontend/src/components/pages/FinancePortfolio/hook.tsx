import { useEffect, useState } from "react";
import { getLink } from "../../../services/getLink";
import { getPortfolioId, getPortfoliosByUserId } from "../../../services/services";
import { tempId } from "../../utils/constants";

export const usePortfolioLink = (userId:string) => {
  const [link, setLink] = useState("");
  useEffect(() => {
    getPortfoliosByUserId(`/portfolios/${userId}`)
      .then((res) => {
        setLink(res[0].portfolioLink);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return link;
};
