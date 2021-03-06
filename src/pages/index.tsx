import React from "react";
import Head from "next/head";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Hello</title>
      </Head>
      <h1>Hello Next</h1>
      <ul>
        <li>
          <Link href="/sample">
            <a>sample</a>
          </Link>
        </li>
        <li>
          <Link href="/swipe">
            <a>swipe</a>
          </Link>
        </li>
        <li>
          <Link href="/framer-motion">
            <a>framer-motion</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
