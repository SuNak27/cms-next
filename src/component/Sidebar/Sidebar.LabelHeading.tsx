import { Box, Flex } from "@chakra-ui/react";

type LabelHeadingProps = {
  children: React.ReactNode;
  labelHeading: string;
};

export const LabelHeading = ({ children, labelHeading }: LabelHeadingProps) => {
  return (
    <Box>
      <Flex
        align="center"
        color="gray.400"
        fontWeight="semibold"
        fontSize="xs"
        textTransform="uppercase"
        px="6"
        my="3"
      >
        {labelHeading}
      </Flex>
      {children}
    </Box>
  );
};

export default LabelHeading;