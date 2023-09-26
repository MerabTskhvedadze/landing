import axios from "axios";

export default async function getCrypto(limit: number) {
  try {
    const res = await axios.get(
      `https://api.coincap.io/v2/assets?limit=${limit}`
    );

    if (!res) throw new Error("something went wrong");

    return res.data.data as CryptoCurrencyList;
  } catch (error: any) {
    throw new Error(error);
  }
}
