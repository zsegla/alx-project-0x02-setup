import React from 'react'
import { ButtonProps } from '../interfaces'

export default function Home() {
  return (
    <div>Home</div>
  )
}

// interfaces/index.ts

export interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  children: React.ReactNode;
}

