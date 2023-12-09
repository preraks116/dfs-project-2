import React, { useState, useEffect } from "react";

interface Author {
  id: string;
  name: string;
}

interface AddEbookFormProps {
  categoryID: string;
  isOpen: boolean;
  onSubmit: (formData: {
    title: string;
    authorId: string;
    description: string;
    image: File | string; // Use File type for image
  }) => void;
  onCancel: () => void;
}

const AddEbookForm: React.FC<AddEbookFormProps> = ({
  onSubmit,
  onCancel,
  isOpen,
  categoryID,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    authorId: "", // Store the selected author's ID
    description: "",
    thumbnailPath: "",
    image: "" as File | string, // Use File type for image
  });

  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    // Fetch authors from the backend when the component mounts
    const fetchAuthors = async () => {
      try {
        const res = await fetch(
          "http://127.0.0.1:8090/api/collections/authors/records"
        );
        const data = await res.json();
        setAuthors(data.items);
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };

    fetchAuthors();
  }, []);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;

    setFormData((prevData) => ({ ...prevData, title: title }));
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const description = e.target.value;

    setFormData((prevData) => ({ ...prevData, description: description }));
  };

  const handleAuthorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const authorId = e.target.value;

    setFormData((prevData) => ({ ...prevData, authorId: authorId }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      // If a file is selected, set it in the state
      setFormData((prevData) => ({ ...prevData, image: file }));
    }
  };


  const handleSubmit = () => {
    // onSubmit(formData);
    // console.log(formData)

    onSubmit(formData);
    onCancel();
  };

  return (
    <div className={`modal ${isOpen ? "block" : "hidden"}`}>
      <div className="flex flex-col modal-overlay" onClick={onCancel}></div>
      <div className="modal-container">
        <div className="modal-content">
          <form>
            <label className="text-2xl font-bold mt-5 mb-5">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={handleTitleChange}
              className="w-full p-2 mb-4 border"
            />

            <label className="text-2xl font-bold mt-5 mb-5">Author</label>
            <select
              name="authorId"
              value={formData.authorId}
              onChange={handleAuthorChange}
              className="w-full p-2 mb-4 border"
            >
              <option value="">Select an author</option>
              {authors.map((author) => (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              ))}
            </select>

            <label className="text-2xl font-bold mt-5 mb-5">Description</label>
            <input
              type="text"
              value={formData.description}
              onChange={handleDescriptionChange}
              className="w-full p-2 mb-4 border"
            />

            {/* image input */}
            <label className="text-2xl font-bold mt-5 mb-5">Image</label>
            <input
              type="file"
              accept="image/*" // Allow only image files
              onChange={handleImageChange}
              className="w-full p-2 mb-4 border"
            />
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-gray-100 hover:bg-gray-300 text-gray-800 font-bold px-4 py-2 rounded items-center"
                onClick={onCancel}
              >
                Cancel
              </button>
              <button
                type="button"
                className="bg-gray-100 hover:bg-gray-300 text-gray-800 font-bold px-4 py-2 rounded items-center"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEbookForm;
