import React from "react"
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Clock from "../components/clock";

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>Meta Description: {data.site.siteMetadata.description}</p>
    <p>Total MCs: {data.allContentfulMc.totalCount}</p>
    <ol>
      {data.allContentfulMc.nodes.map(mc => {
        return <li>
        <h2>{mc.name}</h2>
        <p>
          {documentToReactComponents(mc.bio.json)}
        </p>
        </li>
      })}
    </ol>
    <Clock />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        description
      }
    }
    allContentfulMc {
      nodes {
        updatedAt
        name
        id
        createdAt
        contentful_id
        location {
          lat
          lon
        }
        bio {
          json
        }
      }
      totalCount
    }
  }
`

export default IndexPage
