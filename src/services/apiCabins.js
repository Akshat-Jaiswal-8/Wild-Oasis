/* eslint-disable */
import supabase, { supabaseUrl } from "./supabase.js";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export const createEditCabin = async (newCabin, id) => {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    "",
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. create/edit the cabin
  let query = supabase.from("cabins"); // we have done this, bcz this is the commonly used technique to use some part of the query.
  //1.CREATE
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  //2.EDIT
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  const { data, error } = await query
    .select() //this will take the new element present in the array bcz supabase does not immediately return
    .single(); // the inserted data.;
  if (error) throw new Error("Unable to create a new cabin");

  // 2.Upload image
  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3.Deleting the cabin if there was an error while uploading an image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created",
    );
  }
  return data;
};
export const deleteCabin = async (id) => {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) throw new Error("Cabin cannot be deleted !");
  return data;
};
