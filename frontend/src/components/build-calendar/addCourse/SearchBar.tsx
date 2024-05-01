import React from "react";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

export const SearchBar = () => {
  return (
    <>
      <InputGroup borderRadius={5} size="md">
        <InputLeftElement
          pointerEvents="none"
        >
            <Search2Icon color="gray.600" />
        </InputLeftElement>
        <Input type="text" border="1px solid #949494" />
        <InputRightAddon
          p={0}
          border="none"
        >
          <Button size="md" borderLeftRadius={0} borderRightRadius={5} border="1px solid #949494">
            Search
          </Button>
        </InputRightAddon>
      </InputGroup>
    </>
  );
};
