interface Breed {
  id: number;
  name: string;
  description: string;
}

interface BreedShowProps {
  breed: Breed | null;
  onClose: () => void;
}

export default function BreedShow({ breed, onClose }: BreedShowProps) {
  if (!breed) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-10">
      <div className="bg-white p-6 rounded shadow-lg min-w-[300px]">
        <h2 className="text-xl font-bold mb-2">{breed.name}</h2>
        <p className="mb-4">{breed.description || "No description."}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}