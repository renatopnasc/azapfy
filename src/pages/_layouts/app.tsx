import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      {/* Header */}
      <Header />

      <div className="mt-20 flex flex-1 flex-col bg-red-500 p-4">
        <Outlet />
      </div>
    </div>
  )
}
