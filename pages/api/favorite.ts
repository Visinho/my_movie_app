import prismadb from "@/lib/prismadb";
import { NextApiRequest, NextApiResponse } from "next";
// import { without } from "lodash";
import { without } from "lodash";
import getUser from "@/lib/getUser";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { movieId, email } = req.body; //Email
  try {
    if (req.method === "POST") {

      const existingMovie = await prismadb.movie.findUnique({
        where: {
          id: movieId,
        },
      });

      if (!existingMovie) {
        throw new Error("Movie does not exist!");
      }

      const user = await prismadb.user.update({
        where: {
          email,
        },
        data: {
          favoriteIds: {
            push: movieId,
          },
        },
      });
      return res.status(200).json(user);
    }

    if (req.method === "DELETE") {
      const user: any = getUser(email);

      const existingMovie = await prismadb.movie.findUnique({
        where: {
          id: movieId,
        },
      });

      if (!existingMovie) {
        throw new Error("Movie does not exist!");
      }

      const updatedFavoriteIds = without(user.favoriteIds, movieId);

      const updatedUser = await prismadb.user.update({
        where: {
          email,
        },
        data: {
          favoriteIds: updatedFavoriteIds,
        },
      });
      return res.status(200).json(updatedUser);
    }
    return res.status(405).end();
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
