async function fetchSearch({ queryKey }) {
  const { animal, location, breed } = queryKey[1];
  const res = await fetch(
    `/api/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  if (!res.ok)
    throw new Error(`pet search not okay: ${animal}, ${location}, ${breed}`);

  return res.json();
}

export default fetchSearch;
