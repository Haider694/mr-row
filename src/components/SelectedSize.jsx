import {
    Button,
    ButtonGroup,
    Checkbox,
    FormControlLabel,
    FormGroup,
    IconButton,
    Typography,
  } from "@mui/material";
  import { Box, Stack } from "@mui/system";
  import React, { useState } from "react";
  import { MdOutlineClear } from "react-icons/md";
  import { useDispatch, useSelector } from "react-redux";
  import { addCard } from "../Stor/cartSlice";
  
  import ToggleButton from "./ToggleButton";
  
  export default function SelecteDescription(props) {
    // const [props.item, setSelectedProduct] = useState(pro);
    const [itemAdded, setItemAdded] = useState(false);
    const [itemModified, setItemModified] = useState(false);
    const [itemForCart, setItemForCart] = useState({
      qty: null,
      description: [],
    });
  
    const dispatch = useDispatch();
  
    const close = () => {
      props.setSelectedProduct();
  
      setItemForCart({ size: "" });
    };
  
  
    const onDescriptionchange = (e, index) => {
      const { name, checked } = e.target;
      setItemModified(true);
      if (!itemForCart.price) {
        if (checked) {
          setItemForCart({
            ...props.item,
            price: props.item?.price,
            qty: 1,
            description: [...itemForCart.description,name],
            id: props.item?.id + name,
          });
        } else {
          const l = itemForCart.description.filter((item) => item !== name);
          setItemForCart({
            ...itemForCart,
            description: l,
          });
        }
      } else {
        if (checked) {
          setItemForCart({
            ...itemForCart,
            description: [...itemForCart.description, name],
          });
        } else {
          console.log("uncheck");
  
          const l = itemForCart.description.filter((item) => item !== name);
          console.log(l);
          setItemForCart({ ...itemForCart, description: l });
        }
      }
    };
  
    return (
      <>
        <Stack
          position="absolute"
          bottom="0"
          sx={{
            width: "100%",
            height: "80%",
            bgcolor: "#ecebe7",
            borderRadius: "30px",
            zIndex: "1",
          }}
        >
          <Box mt={1} sx={{ textAlign: "end" }}>
            <IconButton aria-label="fingerprint" onClick={close}>
              <MdOutlineClear fontSize={20} className=" hover:text-gray-300" />
            </IconButton>
          </Box>
          <Stack>
            <Box>
              <Typography variant="h5">{props.item?.name}</Typography>
            </Box>
          </Stack>
          <Stack p={1}>
            <Box textAlign="start">
              <Typography variant="h6">Selsect Size</Typography>
            </Box>
            <Box>
            <Stack direction="row">
            <Box textAlign="start">
                    <Typography variant="p">Price</Typography>
                </Box>
                <Box>
                    <Typography variant="p">{props?.item.price}</Typography>
                </Box>
            </Stack>
            </Box>
          </Stack>
          <Stack width="100%" p={1}>
            <Box textAlign="start">
              <Typography variant="h6">Select Any Items</Typography>
            </Box>
            <Box>
              {props.item?.description?.map((m, index) => {
                return (
                  <FormGroup key={index}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name={m}
                          onChange={(e) => onDescriptionchange(e, index)}
                        />
                      }
                      label={m}
                    />
                  </FormGroup>
                );
              })}
            </Box>
          </Stack>
          <Stack p={1}>
            <ToggleButton item={itemForCart} />
          </Stack>
        </Stack>
      </>
    );
  }
  