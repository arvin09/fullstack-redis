export default function CarForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const formData = Object.fromEntries(form.entries());

    console.log(formData);

    const res = await fetch("/api/cars", {
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    console.log(result);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input name="make" type="text" placeholder="Enter make of the car" />
      </div>
      <div>
        <input name="model" type="text" placeholder="Enter model of the car" />
      </div>
      <div>
        <input name="image" type="text" />
      </div>
      <div>
        <textarea
          name="description"
          type="text"
          placeholder="Enter description of the car"
        />
      </div>
      <div>
        <button type="submit">Create Car</button>
      </div>
    </form>
  );
}
