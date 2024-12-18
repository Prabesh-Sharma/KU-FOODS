import React, { createContext, useContext, useMemo, ReactNode } from 'react'
import { io, Socket } from 'socket.io-client'

type SocketType = Socket | undefined

const SocketContext = createContext<SocketType>(undefined)

export const useSocket = (): SocketType => {
  const context = useContext(SocketContext)

  if (context === null) {
    console.warn('useSocket must be used within a SocketProvider')
  }

  return context
}

interface SocketProviderProps {
  children: ReactNode
}

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const socket = useMemo(() => io('http://172.18.182.44:6969'), [])

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  )
}
