// Import the required libraries
const { request, gql } = require('graphql-request')

// Set your GitHub token, organization name, and repository name
const GH_TOKEN = 'your-github-token'
const ORG_NAME = 'your-organization-name'
const REPO_NAME = 'your-repo-name'

// Define the GraphQL query
const query = gql`
  query {
    repository(owner: "${ORG_NAME}", name: "${REPO_NAME}") {
      secretScanningAlerts(first: 100) {
        nodes {
          createdAt
          dismissedAt
          secretType
          resolvedAt
          severity
          updatedAt
        }
      }
    }
  }
`

// Define the endpoint and headers
const endpoint = 'https://api.github.com/graphql'
const headers = {
  authorization: `bearer ${GH_TOKEN}`
}

// Send the request
request(endpoint, query, undefined, headers)
  .then(data => console.log(data))
  .catch(err => console.error(err))