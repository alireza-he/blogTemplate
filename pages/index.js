import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/post";
import { Button, Card, CardBody, CardFooter, CardHeader } from "reactstrap";
import Link from "next/link";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am Reza Heydari, the developer of Front-End.</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <Card className={utilStyles.listItem} key={id}>
              <li>
                <CardHeader>{title}</CardHeader>
                <CardBody>
                  {id}
                  <br />
                  {date}
                </CardBody>
                <CardFooter>
                  <Link href={`./posts/${id}`}>
                    <Button color="secondary">{`Click for read post ${id}`}</Button>
                  </Link>
                </CardFooter>
              </li>
            </Card>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: { allPostsData },
  };
}
