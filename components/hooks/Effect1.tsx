"use client";
import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState<string[]>([]);

  useEffect(() => {
    setUsers(["Alice", "Bob", "Charlie"]);
  }, []);

  return <ul>{users.map(u => <li key={u}>{u}</li>)}</ul>;
}
