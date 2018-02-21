import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";

import "./reboot.scss";

const TemplateWrapper = ({ children, data }) => {
  const {
    title: siteTitle,
    description: siteDescription,
    keywords: siteKeywords,
  } = data.site.siteMetadata;

  return (
    <div>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="keywords" content={siteKeywords} />
      </Helmet>
      <Header />
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "0px 1.0875rem 1.45rem",
          paddingTop: 0,
        }}
      >
        {children()}
      </div>
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        keywords: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default TemplateWrapper;

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`;
