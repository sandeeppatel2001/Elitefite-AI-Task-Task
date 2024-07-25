import React, { useEffect, useState } from "react";
import { Tabs, TabList, Tab, Grid, GridItem } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { ALL, COMPLETED, OVERDUE, UPCOMING } from "../utils/constant.utils";

const ActionTab = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const selected = searchParams.get("selected");
    setTabIndex(() => {
      if (selected === ALL) {
        return 0;
      }
      if (selected === UPCOMING) {
        return 1;
      }
      if (selected === OVERDUE) {
        return 2;
      }
      if (selected === COMPLETED) {
        return 3;
      }
      setSearchParams({
        ...Object.fromEntries([...searchParams]),
        selected: ALL,
      });
      return 1;
    });
  }, [searchParams, setSearchParams]);

  const handleTabChange = (index) => {
    if (index === 0) {
      setSearchParams({
        ...Object.fromEntries([...searchParams]),
        selected: ALL,
      });
    }
    if (index === 1) {
      setSearchParams({
        ...Object.fromEntries([...searchParams]),
        selected: UPCOMING,
      });
    }

    if (index === 2) {
      setSearchParams({
        ...Object.fromEntries([...searchParams]),
        selected: OVERDUE,
      });
    }

    if (index === 3) {
      setSearchParams({
        ...Object.fromEntries([...searchParams]),
        selected: COMPLETED,
      });
    }
  };

  return (
    <Tabs
      variant="enclosed"
      colorScheme="purple"
      align="center"
      onChange={handleTabChange}
      index={tabIndex}
      width="100%"
    >
      <TabList>
        <Grid templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" }} width="100%">
          <GridItem>
            <Tab
              _selected={{ color: "white", bg: "purple.500" }}
              _active={{ color: "white", bg: "purple.500" }}
              _hover={{ color: "white", bg: "purple.500" }}
            >
              All
            </Tab>
          </GridItem>
          <GridItem>
            <Tab
              _selected={{ color: "white", bg: "orange.500" }}
              _active={{ color: "white", bg: "orange.500" }}
              _hover={{ color: "white", bg: "orange.500" }}
            >
              Upcoming
            </Tab>
          </GridItem>
          <GridItem>
            <Tab
              _selected={{ color: "white", bg: "red.500" }}
              _active={{ color: "white", bg: "red.500" }}
              _hover={{ color: "white", bg: "red.500" }}
            >
              Overdue
            </Tab>
          </GridItem>
          <GridItem>
            <Tab
              _selected={{ color: "white", bg: "green.500" }}
              _active={{ color: "white", bg: "green.500" }}
              _hover={{ color: "white", bg: "green.500" }}
            >
              Completed
            </Tab>
          </GridItem>
        </Grid>
      </TabList>
    </Tabs>
  );
};

export default ActionTab;
