import { supabase } from "./SupabaseClient";
import Swal from "sweetalert2";
const uploadImage = async (FileName, file, to) => {
  const { error } = await supabase.storage.from(to).upload(FileName, file);
  if (error) {
    console.error(error.message);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `${error.message}`,
    });
    return;
  }
};

const insertArticle = async (authorId, title, content, file, fileName, category, isPublish, publishDate) => {
  const article = {
    author_id: authorId,
    publish_date: publishDate,
    title: title,
    image: fileName,
    content: content,
    category: category,
    isPublish: isPublish
  }
  const { error } = await supabase
    .from('ayah_article')
    .insert([
      article
    ])
  await uploadImage(fileName, file, "task_school_1");
  return { error }
}

const getArticleList = async (author_id = null, id = null) => {
  let query = supabase
    .from('ayah_article')
    .select('*')
    .order('publish_date', { ascending: true });

  if (author_id !== null) {
    query = query.eq('author_id', author_id);
  }

  if (id !== null) {
    query = query.eq('id', id);
  }

  if (id !== null && author_id !== null) {
    query.eq('id', id).eq('author_id', author_id)
  }
  if (id === null && author_id === null) {
    query.eq('isPublish', true)
  }
  const { data, error } = await query;

  return { data, error };
};

const getImage = (filename, to='task_school_1') => {
  const { data } = supabase
    .storage
    .from(to)
    .getPublicUrl(filename)
  return data.publicUrl
}
const deleteArticle = async (id, filename) => {
  deleteImage(filename)
  const { error } = await supabase
    .from('ayah_article')
    .delete()
    .eq('id', id);
  return { error }
}

const deleteImage = async (fileName) => {
  const { error } = await supabase
    .storage
    .from('task_school_1')
    .remove([fileName])
  if (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })
    return;
  }
}

const updateArticle = async (id, authorId, title, file, content, category, isPublish, publishDate, fileNameNew, fileNameOld) => {
  const article = {
    author_id: authorId,
    publish_date: publishDate,
    title: title,
    content: content,
    category: category,
    isPublish: isPublish
  }
  if (typeof file === 'string') {
    article.image = file
  } else {
    article.image = fileNameNew
    deleteImage(fileNameOld);
    uploadImage(fileNameNew, file, 'task_school_1')
  }
  const { error } = await supabase
    .from('ayah_article')
    .update(article)
    .eq('id', id);
  return { error }
}

const updateProfile = async (id, username, full_name, avatar_url, phone_number, role, file) => {
  const profile = {
    username,
    full_name,
    avatar_url,
    phone_number,
    role
  }
  uploadImage(avatar_url, file, 'avatars')
  const { error } = await supabase
    .from('profiles')
    .update(profile)
    .eq('id', id)
  return { error }
}

const getProfile = async (id) => {
  const { data } = await supabase
  .from('profiles')
  .select('*')
  .eq('id', id)

  return { data }
}

const insertBookmark = async (user_id, index_ayah, surah_name, ayah_surah) => {
  const bookmark = {
  user_id,
    index_ayah,
    surah_name,
    ayah_surah,
  }
  const { data, error } = await supabase
  .from('bookmarks_ayah')
  .insert([bookmark])
      return { data, error }
}

const insertFavorite = async (user_id, author_hadis, hadis_number) => {
  const hadis = {
    user_id,
    author_hadis,
    hadis_number
  }
  const { data, error } = await supabase
  .from('favorite_hadis')
  .insert([hadis])
  return { data, error }
}

const getFavoriteHadis = async () => {
  const { data, error } = await supabase
  .from('favorite_hadis')
  .select('*')
  return { data, error }
}

const deleteFavorite = async (id, number) => {
  const { data, error } = await supabase
  .from('favorite_hadis')
  .delete()
  .eq('user_id', id)
  .eq('hadis_number', number);
  return { data, error }
}
export {
  insertArticle,
  getArticleList,
  getImage,
  deleteArticle,
  updateArticle,
  updateProfile,
  getProfile,
  insertBookmark,
  insertFavorite,
  getFavoriteHadis,
  deleteFavorite
}