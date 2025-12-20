import { router, Stack, useFocusEffect } from "expo-router";
import { SessionProvider, useSessionCreation } from "../../../contexts/SessionContext";
import { useCallback } from "react";

function SessionResetWrapper({ children }) {
  const { resetSession } = useSessionCreation();

  useFocusEffect(
    useCallback(() => {
      return () => {
        resetSession();
        //router.replace("/(dashboard)/sessions")
      };
    }, [resetSession])
  );

  return children;
}

export default function CreateSessionLayout() {
  return (
    <SessionProvider>
      <SessionResetWrapper>
        <Stack screenOptions={{ headerShown: false }} />
      </SessionResetWrapper>
    </SessionProvider>
  );
}
