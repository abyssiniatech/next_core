// parallel route in next js with layout.tsx
// app/dashboard/layout.tsx

export default function DashboardLayout({
  children,
  analytics,
  users,
  notifications,
  login
}: {
  children: React.ReactNode
  analytics: React.ReactNode
  users: React.ReactNode
  notifications: React.ReactNode
  login: React.ReactNode
}) {
  const islogin = true

  return (
    islogin?(
    <div className="bg-indigo-800 text-white p-4 rounded flex justify-between gap-4 border  border-1 border-white min-h-screen">
      <div className="bg-teal-700 text-white p-4 rounded flex items-center">{children}</div>
      <div className="bg-white text-gray-800 rounded gap-2 flex p-2 ">{analytics}</div>
      <div className="bg-white text-gray-800 rounded gap-2 flex p-2 ">{users}</div>
      <div className="bg-white text-gray-800 rounded gap-2 flex p-2 ">{notifications}</div>
    </div>
    ):(
      <div>{login}</div>
    )
  )
}