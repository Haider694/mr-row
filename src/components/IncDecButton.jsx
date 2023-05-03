import { Box, ButtonGroup, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

export default function IncDecButton() {
  return (
    <>
      {
        <Stack direction="row">
          <Box width={1}>
            <ButtonGroup sx={{ bgcolor: "yellow", borderRadius: "15%" }}>
              <IconButton onClick={decrement}>
                <AiFillMinusCircle
                  fontSize={20}
                  className=" hover:text-gray-300"
                />
              </IconButton>
              <Typography pt={0.5} variant="p">
                {product.qty}
              </Typography>
              <IconButton onClick={increment}>
                <AiFillPlusCircle
                  fontSize={20}
                  className=" hover:text-gray-300"
                />
              </IconButton>
            </ButtonGroup>
          </Box>
        </Stack>
      }
    </>
  );
}
