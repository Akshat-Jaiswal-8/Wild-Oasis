/* eslint-disable */
import { formatCurrency } from "../../utils/helpers.js";
import Button from "../../ui/Button.jsx";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm.jsx";
import { useDeleteCabin } from "./useDeleteCabin.js";
import styled from "styled-components";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import useCreateCabin from "./useCreateCabin.js";

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
  font-family: "Sono", serif;
`;

const Price = styled.div`
  font-family: "Sono", serif;
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono", serif;
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const [showForm, setShowForm] = useState(false);
  const { isDeleting, deleteCabin } = useDeleteCabin();

  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    description,
    image,
  } = cabin;

  const { isCreating, createCabin } = useCreateCabin();
  const handleDuplicate = () => {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      description,
      image,
    });
  };

  return (
    <>
      <TableRow role={"row"}>
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>fits upto {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash; </span>
        )}
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          <Button disabled={isCreating} onClick={handleDuplicate}>
            <HiSquare2Stack />
            {/*//------------------------------------------------------duplicate*/}
          </Button>
          <Button
            onClick={() => {
              setShowForm((show) => !show);
            }}
          >
            <HiPencil />
            {/*//------------------------------------------------------Edit*/}
          </Button>
          <Button onClick={() => deleteCabin(cabinId)} disabled={isDeleting}>
            <HiTrash />
            {/*//------------------------------------------------------Delete*/}
          </Button>
        </div>
      </TableRow>
      {showForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
}

export default CabinRow;
