// @refresh reload
import { type Component, Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Html,
  Routes,
  Scripts,
} from "solid-start";
import "./root.css";
import XHead from "./components/XHead";

const Root: Component = () => {
  return (
    <Html lang="en">
      <XHead />
      <Body>
        <Suspense>
          <ErrorBoundary>
            {/* <Header /> */}
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
};

export default Root;
