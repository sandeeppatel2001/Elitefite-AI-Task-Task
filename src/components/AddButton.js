import { IconButton } from "@chakra-ui/react";
import React from "react";
import { AddIcon } from "@chakra-ui/icons";

const floatingButtonStyle = {
    position: "fixed",
    top: "5rem",
    right: "5rem",
    zIndex: 5000,
};

const AddButton = ({ onOpen }) => {
    return ( 
      <div style={floatingButtonStyle}>
      <IconButton
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