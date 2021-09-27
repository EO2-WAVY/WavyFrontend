interface downloadBlogProps {
    blob: Blob;
    fileName: string;
}

export const downloadBlob = ({ blob, fileName }: downloadBlogProps) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.setAttribute("style", "display: none;");
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
};
