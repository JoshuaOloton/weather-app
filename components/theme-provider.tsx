"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import Header from "@/components/Header";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>
    <Header />
    {children}
  </NextThemesProvider>
}