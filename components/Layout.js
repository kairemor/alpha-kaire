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

        <meta
          name="keywords"
          content="Menuisier, Menuisier Bois, Menuisier Dakar, Menuisier Pikine"
        />
        <meta
          name="description"
          content="Website describes the work of carpenter Alpha Kaire"
        />
        <meta name="author" content="Mor KAIRE" />

        <title>Aplha KAIRE | Menuisier Bois | Dakar | Senegal</title>

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

      <Script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        crossorigin="anonymous"
      />

      <Script src="/js/bootstrap.js" />

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.9/slick.min.js" />

      <Script src="/js/custom.js" />
    </React.Fragment>
  );
}

export default Layout;
