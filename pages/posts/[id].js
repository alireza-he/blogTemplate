import Head from "next/head";
import Link from "next/link";
import { Card, CardBody, CardFooter, CardHeader } from "reactstrap";
import Date from "../../components/date";
import Layout from "../../components/layout";
import { getAllPostAds, getPostData } from "../../lib/post";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>{postData.id}</Head>
      <Card>
        <CardHeader>{postData.title}</CardHeader>
        <CardBody>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
        </CardBody>
        <CardFooter>
          <Date dateString={postData.date} />
        </CardFooter>
      </Card>
    </Layout>
  );
}

export function getStaticPaths() {
  const paths = getAllPostAds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
