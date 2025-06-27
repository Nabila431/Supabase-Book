async function submitPost() {
  const text = document.getElementById("postInput").value;
  const file = document.getElementById("fileInput").files[0];
  if (!text && !file) return alert("Isi dulu postingannya");

  let fileUrl = null;
  if (file) {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const { data, error } = await supabase.storage
      .from('activity-files')
      .upload(fileName, file);
    if (error) {
      alert("Gagal upload file");
      return;
    }
    fileUrl = `https://wejcgylojzxxgftzjeew.supabase.co/storage/v1/object/public/activity-files/${fileName}`;
  }

  document.getElementById("postList").innerHTML += `
    <div class="post">
      <p>${text}</p>
      ${fileUrl ? `<video src="${fileUrl}" controls width="100%"></video>` : ""}
    </div>
  `;
}