import { GraphQLScalarType, Kind } from "graphql";
import { medias, users } from "./data";

export const dateTimeScalar = new GraphQLScalarType({
  name: "DateTime",
  description: "DateTime custom scalar type",
  serialize(value) {
    if (value instanceof Date) {
      return value.toISOString();
    }
    throw Error("GraphQL Date Scalar serializer expected a `Date` object");
  },
  parseValue(value) {
    if (typeof value === "string") {
      const date = new Date(value);
      if (date.toString() === "Invalid Date") {
        throw new Error("GraphQL Date Scalar parser expected a `ISO`");
      }

      return date;
    }
    throw new Error("GraphQL Date Scalar parser expected a `ISO`");
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      const date = new Date(ast.value);

      if (date.toString() === "Invalid Date") {
        return null;
      }

      return date;
    }

    return null;
  },
});

export const resolvers = {
  DateTime: dateTimeScalar,
  Media: {
    __resolveType(obj) {
      if (obj.type === "book") {
        return "Book";
      }

      return "Movie";
    },
  },
  User: {
    borrowedMedias(parent, { limit, skip }: { limit?: number; skip?: number }) {
      const mediaIds = users.get(parent.id);

      return mediaIds
        .map((item) => ({
          media: medias.get(item.mediaId),
          user: parent,
          borrowedAt: item.borrowedAt,
        }))
        .slice(skip ?? 0)
        .slice(0, limit ?? 10);
    },
  },
  BorrowedMedia: {
    id(parent) {
      return `${parent.media.id}-${parent.user.id}`;
    },
  },
  Query: {
    medias(
      _,
      {
        limit,
        skip,
        available,
      }: { limit?: number; skip?: number; available?: boolean }
    ) {
      return Array.from(medias.values())
        .filter(
          (media) =>
            typeof available === "undefined" || media.available === available
        )
        .slice(skip ?? 0)
        .slice(0, limit ?? 10);
    },
    media(_, { id }) {
      return medias.get(id);
    },
    user(_, args) {
      return users.has(args.id) ? { id: args.id } : null;
    },
  },
  Mutation: {
    borrowMedia(
      _,
      {
        input: { mediaId, userId },
      }: { input: { mediaId: string; userId: string } }
    ) {
      if (!users.has(userId)) {
        users.set(userId, []);
      }

      if (!medias.has(mediaId)) {
        return {
          success: false,
          message: "Media not found",
          borrowedMedia: null,
        };
      }

      const borrowedAt = new Date();
      users.get(userId).push({ borrowedAt, mediaId });

      const media = medias.get(mediaId);
      media.available = false;

      const borrowedMedia = {
        id: "",
        media,
        user: { id: userId },
        borrowedAt,
      };

      return {
        borrowedMedia,
        success: true,
        message: "Success",
      };
    },
    returnMedia(_, { mediaId }: { mediaId: string }) {
      const media = medias.get(mediaId);

      if (!media) {
        return {
          success: false,
          message: "Media not found",
        };
      }

      for (const [, values] of users) {
        const index = values.findIndex((m) => mediaId === m.mediaId);

        if (index > -1) {
          values.splice(index, 1);
          media.available = true;
          return {
            success: true,
            message: "Media is returned",
          };
        }
      }

      return {
        success: false,
        message: "Media is already available",
      };
    },
  },
};
