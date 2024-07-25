import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  MenuDivider,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { useSearchParams } from "react-router-dom";
import {
  ALL_PRIORITY,
  DATE_HIGH_TO_LOW,
  DATE_LOW_TO_HIGH,
  HIGH_PRIORITY,
  LOW_PRIORITY,
  MEDIUM_PRIORITY,
  PRIORITY_HIGH_TO_LOW,
  PRIORITY_LOW_TO_HIGH,
} from "../utils/constant.utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSort } from "@fortawesome/free-solid-svg-icons";

const SearchInput = ({ search, handleSearchChange }) => {
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({
      ...Object.fromEntries([...searchParams]),
      priority: ALL_PRIORITY,
      sort: "",
    });
  }, []);

  const handleChangePriority = (priority) => {
    setSearchParams({
      ...Object.fromEntries([...searchParams]),
      priority: priority,
    });
  };
  const handleChangeSort = (sort) => {
    setSearchParams({
      ...Object.fromEntries([...searchParams]),
      sort: sort,
    });
  };

  return (
    <Flex
      margin="20px auto"
      width="80%"
      justifyContent="center"
      alignItems="center"
      gap={6}
    >
      <Box width="70%">
        <form>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.500" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search tasks..."
              value={search}
              borderColor="gray.400"
              onChange={handleSearchChange}
            />
          </InputGroup>
        </form>
      </Box>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Filter options"
          icon={<FontAwesomeIcon icon={faFilter} />}
          variant="solid"
          colorScheme="teal"
        />
        <MenuList>
          <MenuItem disabled>Priority</MenuItem>
          <MenuDivider />
          <MenuItem onClick={() => handleChangePriority(ALL_PRIORITY)}>
            All
          </MenuItem>
          <MenuItem onClick={() => handleChangePriority(HIGH_PRIORITY)}>
            High
          </MenuItem>
          <MenuItem onClick={() => handleChangePriority(MEDIUM_PRIORITY)}>
            Medium
          </MenuItem>
          <MenuItem onClick={() => handleChangePriority(LOW_PRIORITY)}>
            Low
          </MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Sort options"
          icon={<FontAwesomeIcon icon={faSort} />}
          variant="solid"
          colorScheme="teal"
        />
        <MenuList>
          <MenuItem onClick={() => handleChangeSort(PRIORITY_HIGH_TO_LOW)}>
            Priority: High to Low
          </MenuItem>
          <MenuItem onClick={() => handleChangeSort(PRIORITY_LOW_TO_HIGH)}>
            Priority: Low to High
          </MenuItem>
          <MenuItem onClick={() => handleChangeSort(DATE_HIGH_TO_LOW)}>
            Date: Newest First
          </MenuItem>
          <MenuItem onClick={() => handleChangeSort(DATE_LOW_TO_HIGH)}>
            Date: Oldest First
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default SearchInput;
