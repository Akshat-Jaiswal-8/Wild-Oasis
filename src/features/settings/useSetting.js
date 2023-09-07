import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings.js";

export const useSetting = () => {
  const {
    isLoading,
    error,
    data: setting,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });
  return { isLoading, error, data: setting };
};
