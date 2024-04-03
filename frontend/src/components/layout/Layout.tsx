'use client'

import { FC, ReactNode} from 'react';
import Header from '../header/Header';
import {
    Container
  } from "@chakra-ui/react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <Container maxW={"6xl"}>
                <Header />
            
            <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
                <div className="max-w-[1056px] mx-auto pt-6 h-full">
                {children}
                </div>
            </main>
            </Container>
        </>
    )
} 

export default Layout;