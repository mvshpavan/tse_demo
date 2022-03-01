import React from "react";
import { LiveboardEmbed } from "@thoughtspot/visual-embed-sdk";

export const Liveboard = () => {
  React.useEffect(() => {
    const tsSearch = new LiveboardEmbed("#tse", {
      frameParams: {
        width: "100%",
        height: "800px",
      },
      liveboardId: "7fac7eca-c894-4b53-a2f2-a6b7cafd5d67",
    });
    tsSearch.render();
  }, []);
  return <div id="tse" />;
};