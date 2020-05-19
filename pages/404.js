import Layout from "../layout/Layout";
import PageTitle from "../layout/PageTitle";

const NotFound = () => {
  return (
    <Layout title="error">
      <PageTitle title="404" subtitle="Page Not Found" />
      <div className="status-code">
        <p>
          If you were brought to this page by an internal link, please let me
          know and I will fix it immediately!
        </p>
      </div>
    </Layout>
  );
};

export default NotFound;
