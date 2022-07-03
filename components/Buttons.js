import { Button, Box } from "native-base";

/**
 *
 * @param {*} param0
 * @returns A new Native Base Button which will be used globally with the same theme.
 */
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
        bg={bg}
      >
        {label}
      </Button>
    </Box>
  );
};

/**
 *
 * @param {*} param0
 * @returns A NativeBase Button group
 */
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
      <ButtonRow label={label} />
    </Button.Group>
  );
};

export { NativeBaseHackButton, NativeBaseHackButtonGroup };
/**
 *
 * @param {*} param0
 * @returns Creates Three Button in a row
 */
function ButtonRow({ label }) {
  return (
    <>
      <Button minW={"100"} variant={"outline"}>
        {label[0]}
      </Button>
      <Button minW={"100"} variant={false ? "outline" : "solid"}>
        {label[1]}
      </Button>
      <Button minW={"100"} variant={"outline"}>
        {label[1]}
      </Button>
    </>
  );
}
