// lib/uploadStagedFile.ts
const uploadStagedFile = async (stagedFile: File | Blob) => {
    const form = new FormData();
    form.append("file", stagedFile);
  
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: form,
      });
  
      const data = await res.json();
      return data.imgUrl;
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  
  export { uploadStagedFile };
  