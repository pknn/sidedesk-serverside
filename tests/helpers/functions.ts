import faker from 'faker'

export const getRandomItemAndNeighbor = <T>(items: T[]): [T, T] => {
  const randomIndex = faker.datatype.number(items.length - 2)
  const randomItemA = items[randomIndex] as T
  const randomItemB = items[randomIndex + 1] as T

  return [randomItemA, randomItemB]
}
