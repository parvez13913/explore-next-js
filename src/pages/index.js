import Head from "next/head";
import RootLayouts from "../../components/Layouts/RootLayouts";

const HomePage = () => {

  return (
    <div>
      <Head>
        <title>Next Home Page</title>
        <meta name="home page" description=" ths page is created by next js" />
      </Head>
      <h1>This is Next.js Home Page</h1>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayouts>
      {page}
    </RootLayouts>
  )
}