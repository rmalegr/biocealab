const { gql, default: request } = require("graphql-request")

const MASTER__URL = "https://api-sa-east-1.hygraph.com/v2/"+process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+"/master"

const getAllCourseList = async () => {
    const query=gql`
    query MyQuery {
        courses {
          author
          free
          demoUrl
          description
          name
          id
          banner {
            url
          }
          chapter {
            ... on Chapter {
              id
              name
            }
          }
          youtuberUrl
          tags
          totalChapters
        }
      }
      
      
    `
    const result = await request(MASTER__URL, query)
    return result;
}
export default {
    getAllCourseList
}