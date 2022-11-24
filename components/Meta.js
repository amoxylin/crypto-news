import Head from "next/head";

export default function Meta(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png" />
      <link rel="mask-icon" href="/assets/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="msapplication-config" content="/assets/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="description" content="Read the list of latest cypto news!" />
    </Head>
  );
}