interface ImageConverterProps {
  onImageUpload: (base64Image: string) => void;
}

function ImageConverter({ onImageUpload }: ImageConverterProps) {
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        onImageUpload(base64String); // Call the onImageUpload prop with the Base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
    </div>
  );
}

export default ImageConverter;
