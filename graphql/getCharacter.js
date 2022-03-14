import client from '../graphql';
import { CHARACTER } from './queries';

const getCharacter = async ({ id }) => {
  try {
    const { data } = await client.query({
      query: CHARACTER,
      variables: { id },
    });

    const { character } = data;
    return { character };
  } catch (e) {
    console.log(e.networkError?.result?.errors);
    return { characters: [], info: {} };
  }
};

export default getCharacter;
