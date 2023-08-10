'use client'
import { useState } from 'react'

export function useFileUpload() {
  const [progress, setProgress] = useState(0)

  const simulateFileUpload = () => {
    let currentProgress = 0

    const interval = setInterval(() => {
      if (currentProgress < 100) {
        currentProgress += 10
        setProgress(currentProgress)
      } else {
        clearInterval(interval)
      }
    }, 1000)

    setTimeout(() => {
      clearInterval(interval)
      setProgress(100)
    }, 10000)
  }

  return { progress, simulateFileUpload }
}
