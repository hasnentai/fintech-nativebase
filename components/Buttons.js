import { Button, Box } from "native-base";

const NativeBaseHackButton = ({
  onPress,
  label,
  size,
  colorScheme,
  isDisabled = false,
  isLoading = false,
  isLoadingText = "Submitting...",
  leftIcon,
  variant = "solid",
  width,
  bg,
}) => {
  return (
    <Box alignItems="center">
      <Button
        isLoading={isLoading}
        isLoadingText={isLoadingText}
        onPress={onPress}
        isDisabled={isDisabled}
        variant={variant}
        size={size}
        leftIcon={leftIcon}
        m={1}
        width={width}
        minW={"120px"}
        maxW={"200px"}
        bg={bg}
      >
        {label}
      </Button>
    </Box>
  );
};

const NativeBaseHackButtonGroup = ({ label }) => {
  return (
    <Button.Group
      m={1}
      isAttached
      mx={{
        base: "auto",
        md: 0,
      }}
      size="lg"
    >
      <Button minW={"140"} variant={"outline"}>
        {label[0]}
      </Button>
      <Button minW={"140"} variant={false ? "outline" : "solid"}>
        {label[1]}
      </Button>
      <Button minW={"140"} variant={"outline"}>
        {label[1]}
      </Button>
    </Button.Group>
  );
};

export { NativeBaseHackButton, NativeBaseHackButtonGroup };
