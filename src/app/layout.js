"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import { baselightTheme } from "./utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "../app/components/Navbar";
import {SessionProvider} from 'next-auth/react'
import { CartProvider } from "../app/context/CartContext";


// export const metadata = {
//   title: 'Go-Food',
//   description: 'Generated by Next.js',
// }

export default function Layout({ children }) {
  return (
        <html lang="en">

        <body>
          
          <CssBaseline />
          <SessionProvider session={children.session}>
          <CartProvider>
          <Navbar />
          <main> {children}</main>
          </CartProvider>
          </SessionProvider>
     
        </body>

        </html>
  
  )
}
