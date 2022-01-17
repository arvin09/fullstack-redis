import { useState } from "react";

export default function SearchForm() {
  const [hits, setHits] = useState([]);
  const search = async (event) => {
    const q = event.target.value;
    if (q.length > 2) {
      const params = new URLSearchParams({ q });
      const res = await fetch(`/api/search?${params}`);
      const result = await res.json();

      console.log(result);

      setHits(result["cars"]);
    }
  };
  return (
    <div>
      <input onChange={search} type="text" />
      <ul>
        List of Cars
        {console.log("Hits", hits)}
        {hits.map((hit) => (
          <li key={hit.entityId}>
            <img src={hit.image} width={100} height={100} alt="image" />
            {hit.make} {hit.model}
          </li>
        ))}
      </ul>
    </div>
  );
}
