import React from "react";
import Wellinfo from "./Wellinfo.js";
import PoolCard from "./PoolCard.js";
import ImageComp from "./ImageComp.js";

export default function SecondPage() {
  return (
    <div>
      <div
        style={{
          background: `linear-gradient(to bottom, white 80%, rgb(248, 241, 233) 100%)`,
        }}
      >
        <Wellinfo />
      </div>

      <div
        style={{
          backgroundColor: "rgb(248, 241, 233)",
        }}
      >
        <PoolCard />
      </div>

      <div
        style={{
          background: `linear-gradient(to bottom, rgb(248, 241, 233) 70%, rgba(248, 241, 233, 0.5) 90%, white 100%)`,
        }}
      >
        <ImageComp />
      </div>
    </div>
  );
}
