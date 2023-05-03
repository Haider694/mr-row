import React,{useState} from "react";
import { getMenu } from "../Assets/Services/main";
import Imag2 from "../Assets/images/bargar1.jpg";
import { NavLink } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { addCard } from "../Stor/cartSlice";
import { Box, Stack } from "@mui/system";
import { Button, Typography } from "@mui/material";
import VegIcon from "./VegIcon";
import AddCartShow from "./AddCartShow";
import Back from "./Back";
import SelecteSize from "./SelectedSize";

export default function Sandwich() {
  const dispatch = useDispatch();
  const images=Imag2;

  const state = useSelector((state) => state.cart);
  const [selectedProduct, setSelectedProduct] = useState();
  console.log(selectedProduct);
  const menu = getMenu();
  return (
    <>
      <Box
        sx={{ width: "100%", height: "900px", overflow: "auto" }}
        justifyContent="space-around"
      >
      <Box>
        <Back/>
      </Box>
        <Box sx={{ width: "100%" }}>
          <h1>Sandwich</h1>
        </Box>
        <Box>
        {selectedProduct && (
            <SelecteSize
              item={selectedProduct}
              setSelectedProduct={setSelectedProduct}
            />
          )
        }
        </Box>
        <Stack sx={{ width: "100%", height: "100%" }}>
          {menu.sandwich.map((item, index) => {
            return (
              <Stack
                mb={2.5}
                key={index}
                direction="row"
                sx={{
                  width: "100%",
                }}
              >
                <Stack mr={1} ml={1} justifyContent="start">
                  <img
                    style={{ border: "1px solid grey", borderRadius: "15px" }}
                    src={images}
                    width={90}
                    height={80}
                  />
                </Stack>
                <Stack
                  sx={{
                    width: "50%",
                    height: "100%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  pl={1}
                >
                  <Typography
                    sx={{ textAlign: "start" }}
                    variant="p"
                    textOverflow="clip"
                  >
                    <b>{item.name}</b>
                  </Typography>

                  <Stack direction="row">
                    <VegIcon />
                    <Typography
                      pl="5px"
                      sx={{ textAlign: "start" }}
                      variant="p"
                      textOverflow="clip"
                    >
                      Price:{item.price}
                    </Typography>
                  </Stack>
                  <Box textAlign="start">
                    <Typography variant="p" color="#868584" overflow="hidden">
                      {item.description.toString()}
                    </Typography>
                  </Box>
                </Stack>
                <Stack
                  mr={1.5}
                  ml={1}
                  sx={{ width: "20%", height: "100%" }}
                  pt={3}
                >
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      color: "#d6c10f",
                      borderColor: "#d6c10f",
                      borderRadius: "15px",
                    }}
                    onClick={() =>
                      setSelectedProduct({ ...item, id: index.toString() })
                    }
                  >
                    Add
                  </Button>
                </Stack>
              </Stack>
            );
          })}
        </Stack>
        {
          state.length>0 && <AddCartShow />
        }
      </Box>
    </>
  );
}
