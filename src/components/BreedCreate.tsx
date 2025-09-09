import { useState } from "react";

interface BreedCreateProps {
  onCreate: (breed: { name: string; description: string }) => void;
}

export default function BreedCreate({ onCreate }: BreedCreateProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    onCreate({ name, description });
    setName("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow mb-4">
      <h2 className="text-lg font-bold mb-2">Enter the details of the New Breed of Dog</h2>
      <input
        className="border p-2 mr-2 rounded"
        placeholder="Enter Breed Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        className="border p-2 mr-2 rounded"
        placeholder="Enter the Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button className="bg-green-500 text-white px-4 py-2 rounded" type="submit">
        Add
      </button>
    </form>
  );
}