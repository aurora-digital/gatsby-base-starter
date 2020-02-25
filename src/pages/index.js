import React from "react";
import Link from "gatsby-link";
import { useStaticQuery, graphql } from "gatsby";

import SEO from "root/components/SEO";
import Header from "root/components/Header";
import Layout from "root/components/Layout";

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`;

const IndexPage = () => {
  const data = useStaticQuery(query);

  const { title, description, keywords } = data.site.siteMetadata;

  return (
    <div>
      <SEO title={title} description={description} keywords={keywords} />
      <Header />
      <Layout>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    </div>
  );
};

export default IndexPage;
