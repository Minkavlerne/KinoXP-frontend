import React, { useEffect, useState } from "react";
import { postMovie } from "../services/apiFacade";
import { Movie } from "../services/entityFacade";

function ImageUploader() {
  const [base64Image, setBase64Image] = useState<string | null>(null);

  useEffect(() => {
    if (base64Image) {
      const testMovie2: Movie = {
        id: 2,
        title: "Test Movie",
        description: "This is a test movie",
        posterBase64: base64Image, // You can fill this with a base64 string of an image
        posterUrl: "URL",
        trailerUrl: "URL",
        ageLimit: 12,
        releaseDate: "2022-01-01",
        duration: "02:00:00",
        categories: ["Action"],
      };
      console.log(testMovie2);

      postMovie(testMovie2);
    }
  }, [base64Image]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const img = document.createElement("img");
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const MAX_WIDTH = 400;
        const MAX_HEIGHT = 600;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
        canvas.width = width;
        canvas.height = height;
        ctx?.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL("image/jpeg");
        setBase64Image(dataUrl);
      };
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {base64Image && <img src={base64Image} alt="Uploaded" />}
    </div>
  );
}

export default ImageUploader;
