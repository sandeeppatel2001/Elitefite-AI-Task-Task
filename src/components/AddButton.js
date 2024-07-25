import { IconButton, background } from "@chakra-ui/react";
import React from "react";
import { AddIcon } from "@chakra-ui/icons";
import { color } from "framer-motion";

const floatingButtonStyle = {
    position: "fixed",
    bottom: "5rem",
    right: "5rem",
    zIndex: 5000,
    
};

const AddButton = ({ onOpen }) => {
    return ( 
      <div style={floatingButtonStyle}>
      <IconButton
      color={"red"}
      backgroundColor={"black"}
        size="lg"
        onClick={onOpen}
        colorScheme="teal"
        icon={<AddIcon />}
        isRound
        variant="outline"
      />
    </div>
    );
};

export default AddButton;