import { useState } from "react";
import BreedCreate from "./components/BreedCreate";
import BreedEdit from "./components/BreedEdit";
import BreedList from "./components/BreedList";
import BreedShow from "./components/BreedShow";

interface Breed {
  id: number;
  name: string;
  description: string;
}

function App() {
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [editing, setEditing] = useState<Breed | null>(null);
  const [showing, setShowing] = useState<Breed | null>(null);

  function handleCreate(breed: { name: string; description: string }) {
    setBreeds([
      ...breeds,
      { id: Date.now(), ...breed }
    ]);
  }

  function handleEdit(breed: Breed) {
    setEditing(breed);
  }

  function handleUpdate(id: number, updated: { name: string; description: string }) {
    setBreeds(breeds.map(b => (b.id === id ? { ...b, ...updated } : b)));
    setEditing(null);
  }

  function handleDelete(id: number) {
    setBreeds(breeds.filter(b => b.id !== id));
  }

  function handleShow(breed: Breed) {
    setShowing(breed);
  }

  function handleCloseShow() {
    setShowing(null);
  }

  function handleCancelEdit() {
    setEditing(null);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-700">
          Pet Dog Breed Management 
        </h1>
        <BreedCreate onCreate={handleCreate} />
        {editing && (
          <BreedEdit
            breed={editing}
            onUpdate={handleUpdate}
            onCancel={handleCancelEdit}
          />
        )}
        <BreedList
          breeds={breeds}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onShow={handleShow}
        />
        <BreedShow breed={showing} onClose={handleCloseShow} />
      </div>
    </div>
  );
}

export default App;