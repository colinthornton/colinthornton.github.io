import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import projects from "../../../content/projects.json";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { rhythm } from "../../utils/typography";

const ProjectsIndex = ({ location }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <Layout location={location} title={site.siteMetadata.title}>
      <SEO title="/projects" description="Colin Thornton's projects" />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            /projects
          </h1>
        </header>
        {projects.map(({ title, app, repo, circa }) => {
          return (
            <article key={title}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  {title}
                </h3>
                <small>circa {circa}</small>
              </header>
              <section>
                <a href={app} style={{ marginRight: "1rem" }}>
                  Demo
                </a>
                <a href={repo}>Repo</a>
              </section>
            </article>
          );
        })}
      </article>
    </Layout>
  );
};

export default ProjectsIndex;
