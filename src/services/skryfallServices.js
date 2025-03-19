import axios from "axios";

export const getCard = async (cardName) => {
  const response = await axios.get(`https://api.scryfall.com/cards/named?fuzzy=${cardName}`);
  return response.data;
}