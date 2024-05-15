// HEADER FILE
"use client"
import { Box, Flex, Button, Stack, useColorMode, Text } from "@chakra-ui/react";
import { Link } from '@chakra-ui/next-js';
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaSignInAlt } from "react-icons/fa";
import Image from "next/image";
import logo from "../../public/logo.png";
import { useRouter } from "next/navigation";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  return (
    <>
      <Box px={4} pt={5}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          
          <Flex alignItems={"center"} justifyContent={"start"}>
            <Image
              height={75}
              width={75}
              src={logo}
              alt="sb logo"
              onClick={() => {
                router.push("/");
              }}
              style={{ cursor: "pointer" }}
            />
            <Stack direction={"row"} spacing={7}>
              <Link href='/' color='blue.400' _hover={{ color: 'blue.500' }}>
                Home
              </Link>
              <Link href='/build-calendar' color='blue.400' _hover={{ color: 'blue.500' }}>
                Build Calendar
              </Link>
              <Link href='/recommendation' color='blue.400' _hover={{ color: 'blue.500' }}>
                Recommendation
              </Link>
            </Stack>
          </Flex>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}