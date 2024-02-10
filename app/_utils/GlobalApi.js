const { gql, default: request } = require("graphql-request")

const MASTER__URL = "https://api-sa-east-1.hygraph.com/v2/"+process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+"/master"

const getAllCourseList = async () => {
  const query = gql`
    query MyQuery {
      courses(first: 10, orderBy: createdAt_ASC) {
        author
        name
        id
        free
        description
        demoUrl
        banner {
          url
        }
        chapter {
          ... on Chapter {
            id
            name
            video {
              url
            }
          }
        }
        totalChapters
        sourceCode
        tags
      }
    }
  `;
  const result = await request(MASTER__URL, query);
  return result;
};
const getSideBanner = async () => {
  const query = gql`
    query MyQuery {
      sideBanners {
        id
        name
        banner {
          url
          id
        }
        url
      }
    }
  `;
  const result = await request(MASTER__URL, query);
  return result;
}; 


export default {
    getAllCourseList,
    getSideBanner
}