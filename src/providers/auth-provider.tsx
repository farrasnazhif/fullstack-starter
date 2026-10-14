"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useQueryClient } from "@tanstack/react-query";
import type { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const AuthContext = createContext<User | null>(null);

export function AuthProvider({
  initialUser,
  children,
}: {
  initialUser: User;
  children: ReactNode;
}) {
  const [user, setUser] = useState<User | null>(initialUser);
  const currentId = useRef(initialUser.id);
  const queryClient = useQueryClient();
  const router = useRouter();

  useEffect(() => {
    const { data } = createClient().auth.onAuthStateChange(
      (_event, session) => {
        const nextUser = session?.user ?? null;
        if (currentId.current !== (nextUser?.id ?? "")) {
          queryClient.clear();
          currentId.current = nextUser?.id ?? "";
        }
        setUser(nextUser);
        if (!nextUser)
          router.replace("/login?message=Your+session+ended.+Please+sign+in.");
      },
    );
    return () => data.subscription.unsubscribe();
  }, [queryClient, router]);

  if (!user)
    return (
      <p className="p-8" role="status">
        Returning to sign in…
      </p>
    );
  return <AuthContext value={user}>{children}</AuthContext>;
}

export function useAuth() {
  return useContext(AuthContext);
}
