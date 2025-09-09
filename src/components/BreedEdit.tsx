import { useState } from "react";

interface BreedEditProps {
  breed: { id: number; name: string; description: string };
  onUpdate: (id: number, breed: { name: string; description: string }) => void;
  onCancel: () => void;
}

export default function BreedEdit({ breed, onUpdate, onCancel }: BreedEditProps) {
  const [name, setName] = useState(breed.name);
  const [description, setDescription] = useState(breed.description);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onUpdate(breed.id, { name, description });
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-blue-100 rounded mb-2">
      <input
        className="border p-2 mr-2 rounded"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        className="border p-2 mr-2 rounded"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button className="bg-green-500 text-white px-3 py-1 rounded mr-2" type="submit">
        Save
      </button>
      <button className="bg-gray-400 text-white px-3 py-1 rounded" type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}