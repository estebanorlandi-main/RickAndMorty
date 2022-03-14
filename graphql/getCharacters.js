import client from '../graphql';
import { CHARACTERS_PAGE } from './queries';

const getCharacters = async ({ page }) => {
  try {
    const { data } = await client.query({
      query: CHARACTERS_PAGE,
      variables: { page },
    });

    const { characters } = data;
    const { results, info } = characters;

    return { characters: results, info };
  } catch (e) {
    console.log(e.networkError?.result?.errors);
    return { characters: [], info: {} };
  }
};

export default getCharacters;
