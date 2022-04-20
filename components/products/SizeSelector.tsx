import { Box, Button } from "@mui/material";
import { FC } from "react";
import { ISize } from "../../interfaces";

interface SizeSelectorProps {
  selectedSize?: ISize;
  sizes: ISize[];
}

export const SizeSelector: FC<SizeSelectorProps> = ({
  selectedSize,
  sizes,
}) => {
  return (
    <Box>
      {sizes.map((size) => (
        <Button
          key={size}
          size="small"
          color={selectedSize === size ? "info" : "primary"}
        >
          {size}
        </Button>
      ))}
    </Box>
  );
};
