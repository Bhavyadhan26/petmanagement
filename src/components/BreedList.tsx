interface Breed {
  id: number;
  name: string;
  description: string;
}

interface BreedListProps {
  breeds: Breed[];
  onEdit: (breed: Breed) => void;
  onDelete: (id: number) => void;
  onShow: (breed: Breed) => void;
}

export default function BreedList({ breeds, onEdit, onDelete, onShow }: BreedListProps) {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Dog Breeds</h2>
      {breeds.length === 0 && <p>No breeds added yet.</p>}
      <ul>
        {breeds.map(breed => (
          <li key={breed.id} className="flex items-center justify-between bg-white p-2 mb-2 rounded shadow">
            <span className="font-semibold">{breed.name}</span>
            <div>
              <button
                className="bg-blue-400 text-white px-2 py-1 rounded mr-2"
                onClick={() => onShow(breed)}
              >
                View
              </button>
              <button
                className="bg-blue-400 text-white px-2 py-1 rounded mr-2"
                onClick={() => onEdit(breed)}
              >
                Edit
              </button>
              <button
                className="bg-red-600 text-white px-2 py-1 rounded"
                onClick={() => onDelete(breed.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}