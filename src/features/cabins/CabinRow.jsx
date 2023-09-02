/* eslint-disable */
import styled from "styled-components";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

import { formatCurrency } from "../../utils/helpers.js";
import Button from "../../ui/Button.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins.js";
import { toast, ToastContainer } from "react-toastify";

// eslint-disable-next-line react/prop-types
function CabinRow({ cabin }) {
  // eslint-disable-next-line react/prop-types
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
  } = cabin;

  const queryClient = useQueryClient(); // hook for accessing the query client instance from app.jsx

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: (id) => deleteCabin(id),
    onSuccess: () => {
      alert("Cabin deleted Successfully !");
      queryClient.invalidateQueries({
        // this will invalidate the cache data, and again fetching of data will be done.
        queryKey: ["cabins"],
      });
    },
    onError: () => {
      alert("Error Occurred while deleting the cabin ");
    },
  });

  return (
    <>
      <TableRow role={"row"}>
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>fits upto {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        <Discount>{formatCurrency(discount)}</Discount>
        <Button onClick={() => mutate(cabinId)} disabled={isDeleting}>
          Delete
        </Button>
      </TableRow>
    </>
  );
}

export default CabinRow;
