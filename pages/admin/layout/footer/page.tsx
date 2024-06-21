'use client';
import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
const Footer = () => {
  return (
    <Box sx={{ pt: 6, textAlign: "center" }}>
      <Typography>
        © {new Date().getFullYear()} All rights reserved by{" "}
        <Link href="http://www.localhost:3000">
          Go-food.com
        </Link>{" "}
      </Typography>
    </Box>
  );
};

export default Footer;
    