import { Select, Box, Center, CheckIcon } from "native-base";
import React from "react";

const NativeBaseHackSelect = ({ selectedValue, listItems, onValueChange }) => {
  let [service, setService] = React.useState("");
  return (
    <Center>
      <Box w={"90%"}>
        <Select
          selectedValue={service}
          p="10px"
          accessibilityLabel="Choose Service"
          placeholder="Choose Service"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="8" />,
          }}
          onValueChange={(itemValue) => setService(itemValue)}
        >
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>
      </Box>
    </Center>
  );
};

export default NativeBaseHackSelect;
