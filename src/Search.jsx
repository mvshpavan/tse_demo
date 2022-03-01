import React from "react";
import { SearchEmbed } from "@thoughtspot/visual-embed-sdk";

export const Search = () => {
  React.useEffect(() => {
    const tsSearch = new SearchEmbed("#tse", {
      frameParams: {
        width: "100%",
        height: "800px",
      },
    });
    tsSearch.render();
  }, []);
  return <div id="tse" />;
};