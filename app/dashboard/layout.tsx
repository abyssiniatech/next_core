// parallel route in next js with layout.tsx
// app/dashboard/layout.tsx

export default function DashboardLayout({
  children,
  analytics,
  users,
  notifications,
}: {
  children: React.ReactNode
  analytics: React.ReactNode
  users: React.ReactNode
  notifications: React.ReactNode
}) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
      <div>{children}</div>
      <div>{analytics}</div>
      <div>{users}</div>
      <div>{notifications}</div>
    </div>
  )
}