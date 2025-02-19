import React, { useState } from 'react'
import { UsersContext } from './UsersContext'
import { DateUser } from '@/interfaces/interfaces'
import { usersAmistad } from '@/utils/mockData'



export const UsersProvider = ({children}: any) => {
  const [users, setUsers] = useState<DateUser[]>(usersAmistad)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <UsersContext.Provider value={{users, setUsers, isDrawerOpen, setIsDrawerOpen}}>
      {children}
    </UsersContext.Provider>
  )
}