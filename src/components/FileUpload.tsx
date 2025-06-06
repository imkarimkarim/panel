import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

export const FileUpload = () => {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const mp3Files = acceptedFiles.filter((file) => file.type === "audio/mpeg");
    setFiles((prev) => [...prev, ...mp3Files]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "audio/mpeg": [".mp3"],
    },
  });

  return (
    <div className="p-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
          ${
            isDragActive
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300 hover:border-blue-400"
          }`}
      >
        <input {...getInputProps()} />
        <div className="text-gray-600">
          {isDragActive ? (
            <p>فایل‌ها را اینجا رها کنید...</p>
          ) : (
            <p>فایل‌های MP3 را اینجا رها کنید یا برای انتخاب کلیک کنید</p>
          )}
        </div>
      </div>

      {files.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">فایل‌های آپلود شده:</h3>
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-white p-3 rounded-lg shadow"
              >
                <span className="text-gray-700">{file.name}</span>
                <span className="text-sm text-gray-500">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
