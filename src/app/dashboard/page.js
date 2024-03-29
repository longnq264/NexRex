import { Suspense } from "react";
import React from "react";
import DashBoardLayout from "./layout.js";
import Loading from "./loading.js";
const DashBoard = () => {
  return (
    <DashBoardLayout>
      <Suspense fallback={<Loading />}>
        <h1>Welcome to DashBoard!</h1>
      </Suspense>
    </DashBoardLayout>
  );
};

export default DashBoard;
