import React from "react";
import Head from "next/head";
import Script from "next/Script";

function Layout({ children }) {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="author" content="" />

        <title>Aplha KAIRE | Menuisier</title>

        <link rel="stylesheet" type="text/css" href="/css/bootstrap.css" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.9/slick.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.9/slick-theme.min.css"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="/css/slick-theme.css" />

        <link href="/css/font-awesome.min.css" rel="stylesheet" />

        <link href="/css/style.css" rel="stylesheet" />

        <link href="/css/responsive.css" rel="stylesheet" />
      </Head>
      {children}

      <Script type="text/javascript" src="/js/jquery-3.4.1.min.js" />

      <Script type="text/javascript" src="/js/bootstrap.js" />

      <Script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.9/slick.min.js"
      />

      <Script type="text/javascript" src="/js/custom.js" />

      <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=myMap" />
    </React.Fragment>
  );
}

export default Layout;
