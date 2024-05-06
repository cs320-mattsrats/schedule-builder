'use client'

import React, { useState, FC } from "react";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  SimpleGrid,
  Stack,
  StackDivider
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { mock_next_courses } from "@/mock/courses_with_schedule";
import { TAllCourses } from "@/types/all_courses";
import SearchResults from "./SearchResults";
import { TAddToCard } from "../types";

export const SearchBar: FC<TAddToCard> = ({cart, addToCart}) => {

  const [wordEntered, setWordEntered] = useState<string>("");
  const [filteredData, setFilteredData] = useState<TAllCourses[]|null>();

  const handleFilter = (e: any) => {
    e.preventDefault();
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = mock_next_courses.filter((value) => {
      return value.subject.toLowerCase().includes(searchWord.toLowerCase()) 
      || value.classNumber.toLowerCase().includes(searchWord.toLowerCase()) 
      || value.title.toLowerCase().includes(searchWord.toLowerCase());
    })
    if (searchWord === "") {
      setFilteredData(null);
    } else {
      setFilteredData(newFilter);
    }
  }

  return (
    <SimpleGrid spacing={4}>                      
    <>
      <InputGroup borderRadius={5} size="md">
        <InputLeftElement
          pointerEvents="none"
        >
            <Search2Icon color="gray.600" />
        </InputLeftElement>
        <Input 
          type="text" 
          border="1px solid #949494" 
          onChange={handleFilter}
          value = {wordEntered}
        />
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
      {filteredData ? (
          <Stack divider={<StackDivider />} spacing='4'>
              {filteredData.map((course, index) => (
                  <SearchResults
                      key = {index} 
                      course = {course}
                      cart = {cart}
                      addToCart={addToCart}
                  />
              ))}
          </Stack>
        ) : (
          // Page for the loading screen
          <div className="centered">
            <div className="trendbar-loading">
                <div className="spinner"></div>
                <p>No results in data...</p>
            </div>
        </div>
        )
      }
      
    </SimpleGrid> 

  );
};
