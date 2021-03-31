export type Animal = {
  _id: string;
  name: string;
  ImgSrc: string;
  description: string;
  audioFile: string;
};

async function fetchURL<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

export async function getAnimalsInfo(): Promise<Animal[]> {
  return await fetchURL<Animal[]>("api/animalsinfo");
}
export async function getAnimalInfo(_id: string): Promise<Animal> {
  return await fetchURL<Animal>(`api/animalsinfo/${_id}`);
}
