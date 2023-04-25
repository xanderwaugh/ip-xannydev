import { type Component } from "solid-js";
import { Head, Title, Meta, Link } from "solid-start";

const companyTitle = "xanny.dev";
const seoDescription = "A blog about web development and tech";
const siteURL = "https://xanny.dev/";
const themeColor = "#a8daf9";

export const XHead: Component = () => {
  return (
    <Head>
      <Title>xanny.dev</Title>
      <Meta charset="UTF-8" />
      <Meta name="viewport" content="width=device-width, initial-scale=1" />

      <Meta name="description" content={seoDescription} />
      <Meta name="theme-color" content={themeColor} />

      <Meta name="twitter:card" content="summary" />
      <Meta name="twitter:site" content="@xanderwaugh" />
      <Meta name="twitter:creator" content="@xanderwaugh" />
      <Meta name="twitter:title" content={companyTitle} />
      <Meta name="twitter:description" content={seoDescription} />
      <Meta name="twitter:image" content={`${siteURL}assets/shinji.webm`} />

      <Meta property="og:type" content="website" />
      <Meta property="og:title" content={companyTitle} />
      <Meta property="og:description" content={seoDescription} />
      <Meta property="og:site_name" content={companyTitle} />
      <Meta property="og:url" content={siteURL} />
      <Meta property="og:image" content={`${siteURL}assets/shinji.webm`} />
      <Meta property="og:image:alt" content="Shinji Ikari" />
      <Meta property="og:image:width" content="640" />
      <Meta property="og:image:height" content="640" />
      <Meta property="og:image:type" content="image/gif" />
      <Meta property="og:locale" content="en_US" />

      <Meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <Meta name="HandheldFriendly" content="true" />

      <Meta name="robots" content="index, follow" />
      <Meta name="googlebot" content="index, follow" />

      <Meta name="apple-mobile-web-app-capable" content="yes" />
      <Meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <Meta name="apple-mobile-web-app-title" content={companyTitle} />
      <Meta name="format-detection" content="telephone=no" />
      <Meta name="mobile-web-app-capable" content="yes" />

      <Link
        href="/favicon-32x32.png"
        type="image/png"
        rel="shortcut icon"
        sizes="32x32"
      />
      <Link
        href="/favicon-32x32.png"
        type="image/png"
        rel="icon"
        sizes="32x32"
      />

      <Link
        href="/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />

      <Link
        href="/safari-pinned-tab.svg"
        rel="mask-icon"
        color={themeColor}
        sizes="any"
      />
    </Head>
  );
};

export default XHead;
