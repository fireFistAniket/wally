"use server";
export async function getAllData(offset: Number) {
  try {
    const resp = await fetch(
      `${process.env.API_URI}/products?limit=10&skip=${offset}`
    );

    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getDataByCategory(
  category: string | Number,
  offset: Number
) {
  try {
    const resp = await fetch(
      `${process.env.API_URI}/products/category/${category}?limit=10&skip=${offset}`
    );

    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getDataofSearch(
  query: string | Number | string[],
  offset: Number
) {
  try {
    const resp = await fetch(
      `${process.env.API_URI}/products/search?q=${query}?limit=10&skip=${offset}`
    );
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
