'use client'

import { ThemeProvider, useTheme } from 'next-themes'

import React from 'react'

const Providers = ({children}: {children: React.ReactNode}) => {
  return (
    <ThemeProvider attribute='class' enableSystem defaultTheme='system' disableTransitionOnChange>
        {children}
    </ThemeProvider>
  )
}

export default Providers