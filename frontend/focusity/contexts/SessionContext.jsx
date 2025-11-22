import { createContext, useContext, useState, useCallback, useMemo } from "react";

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState({
    title: "",
    subject: "",
    topic: "",
    studyTime: 25,
    shortBreak: 5,
    longBreak: 15,
    numCycles: 4,
    timerIndex: null,
    hasReachedStep5: false,
  });

  const updateSession = useCallback((key, value) => {
    setSession(prev => ({ ...prev, [key]: value }));
  }, []);

  const setTitle = useCallback((v) => updateSession("title", v), [updateSession]);
  const setSubject = useCallback((v) => updateSession("subject", v), [updateSession]);
  const setTopic = useCallback((v) => updateSession("topic", v), [updateSession]);

  const setStudyTime = useCallback((v) => updateSession("studyTime", Number(v)), [updateSession]);
  const setShortBreak = useCallback((v) => updateSession("shortBreak", Number(v)), [updateSession]);
  const setLongBreak = useCallback((v) => updateSession("longBreak", Number(v)), [updateSession]);
  const setNumCycles = useCallback((v) => updateSession("numCycles", Number(v)), [updateSession]);

  const setTimerIndex = useCallback((v) => updateSession("timerIndex", v), [updateSession]);
  const setHasReachedStep5 = useCallback((v) => updateSession("hasReachedStep5", v), [updateSession]);

  const resetSession = useCallback(() => {
    setSession({
      title: "",
      subject: "",
      topic: "",
      studyTime: 25,
      shortBreak: 5,
      longBreak: 15,
      numCycles: 4,
      timerIndex: null,
      hasReachedStep5: false,
    });
  }, []);

  const value = useMemo(() => ({
    session,
    updateSession,

    setTitle,
    setSubject,
    setTopic,
    setStudyTime,
    setShortBreak,
    setLongBreak,
    setNumCycles,
    setTimerIndex,
    setHasReachedStep5,

    resetSession,
  }), [
    session, updateSession,
    setTitle, setSubject, setTopic,
    setStudyTime, setShortBreak, setLongBreak, setNumCycles,
    setTimerIndex, setHasReachedStep5,
    resetSession
  ]);

  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSessionCreation = () => useContext(SessionContext);
