import { FC, ReactNode} from 'react';
import { Providers } from './provider';
import Head from "next/head";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        
        <html lang='en'>
            <Head>
                <title>Schedule Builder - Better version</title>
                <meta
                name="description"
                content="A new version of SB"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
} 

export default Layout;
