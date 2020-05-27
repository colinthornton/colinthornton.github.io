import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import "../styles/global.css";
import { rhythm } from "../utils/typography";

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="colinthornton" />
      <nav>
        <ul
          style={{
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            <h3
              style={{
                marginTop: rhythm(1 / 4),
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link style={{ boxShadow: `none` }} to={"/blog"}>
                /blog
              </Link>
            </h3>
          </li>
          <li>
            <h3
              style={{
                boxShadow: "none",
                marginTop: rhythm(1 / 4),
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link style={{ boxShadow: `none` }} to={"/projects"}>
                /projects
              </Link>
            </h3>
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
