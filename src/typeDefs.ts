export const typeDefs = `#graphql
scalar DateTime

interface Media {
  id: ID!
  available: Boolean!
}

type Book implements Media {
  id: ID!
  title: String!
  year: Int
  available: Boolean!
  numberOfPages: Int
}

type Movie implements Media {
  id: ID!
  title: String!
  year: Int
  available: Boolean!
  duration: Int # Duration in minutes
}

type User {
  id: ID!
  borrowedMedias(limit: Int, skip: Int): [BorrowedMedia!]!
}

type BorrowedMedia {
  id: ID!
  media: Media!
  user: User!
  borrowedAt: DateTime!
}

type Query {
  medias(limit: Int, skip: Int, available: Boolean): [Media!]!
  media(id: ID!): Media
  user(id: ID!): User
}

input BorrowMediaInput {
  mediaId: ID!
  userId: ID!
}

type BorrowMediaResponse {
  borrowedMedia: BorrowedMedia
  success: Boolean!
  message: String!
}
type ReturnMediaResponse {
  success: Boolean!
  message: String!
}

type Mutation {
  borrowMedia(input: BorrowMediaInput!): BorrowMediaResponse!
  returnMedia(mediaId: ID!): ReturnMediaResponse!
}
`;
