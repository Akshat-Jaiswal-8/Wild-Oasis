import supabase from "./supabase.js";

export const getCabins = async () => {
  let { data: cabins, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return cabins;
};

export const deleteCabin = async (id) => {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) throw new Error("Cabin cannot be deleted !");
};
