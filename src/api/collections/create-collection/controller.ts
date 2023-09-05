export type ICreateCollection = Pick<ICollection, "name" | "stories" | "userId">
export type ICreatedCollection = Pick<ICollection, "id">

export const createCollection = (
  args: ICreateCollection
): ICreatedCollection => {
  const { name, stories, userId } = args

  const collection: ICollection = {
    id: "123",
    name,
    userId,
    stories,
  }

  return { id: collection.id }
}
