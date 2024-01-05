import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <header style={{ display: "flex", flexDirection: "column" }}>
          <Link href="/">Home</Link>
          <Link href="/simple-form">Simple Form</Link>
          <Link href="/validation-form">Validation Form</Link>
        </header>
        <h1>Test Formik</h1>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
