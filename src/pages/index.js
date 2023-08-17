import RootLayouts from "../../components/Layouts/RootLayouts";

const HomePage = () => {

  return (
    <div>
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