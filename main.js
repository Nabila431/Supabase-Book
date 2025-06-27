
const form = document.getElementById('postForm');
const statusInput = document.getElementById('statusInput');
const fileInput = document.getElementById('fileInput');
const feed = document.getElementById('feed');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const text = statusInput.value.trim();
  const file = fileInput.files[0];

  let media_url = null;
  if (file) {
    const { data, error } = await supabase.storage
      .from('activity-files')
      .upload(`posts/${Date.now()}_${file.name}`, file, { upsert: true });
    if (!error) {
      media_url = `https://wejcgylojzxxgftzjeew.supabase.co/storage/v1/object/public/${data.path}`;
    }
  }

  const { error } = await supabase.from('posts').insert([{ text, media_url }]);
  if (!error) {
    statusInput.value = '';
    fileInput.value = '';
    loadPosts();
  }
});

async function loadPosts() {
  const { data } = await supabase.from('posts').select('*').order('id', { ascending: false });
  feed.innerHTML = '';
  data.forEach(post => {
    const div = document.createElement('div');
    div.className = 'post';
    div.innerHTML = `<p>${post.text}</p>`;
    if (post.media_url) {
      if (post.media_url.endsWith('.mp4')) {
        div.innerHTML += \`<video controls src="\${post.media_url}"></video>\`;
      } else {
        div.innerHTML += \`<img src="\${post.media_url}" />\`;
      }
    }
    feed.appendChild(div);
  });
}

loadPosts();
