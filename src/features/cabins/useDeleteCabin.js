import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins.js";
import toast from "react-hot-toast";
export const useDeleteCabin = () => {
  const queryClient = useQueryClient(); // hook for accessing the query client instance from app.jsx

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: (id) => deleteCabinApi(id),
    onSuccess: () => {
      toast.success("Cabin deleted Successfully !");
      queryClient.invalidateQueries({
        // this will invalidate the cache data, and again fetching of data will be done.
        queryKey: ["cabins"],
      });
    },
    onError: () => {
      toast.error("Error Occurred while deleting the cabin ");
    },
  });
  return { isDeleting, deleteCabin };
};
