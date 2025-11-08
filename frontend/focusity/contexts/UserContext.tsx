import { createContext, useState } from "react"
import { z } from "zod"

export const UserContext = createContext(null)

export default function UserProvider({ children }) {

    const User = z.object({
        username: z.string(),
        email: z.string().email(),
        password: z.string().min(8),
    })

    const [user, setUser] = useState(null)

    async function login(email, password) {
        
    }

    async function register(email, password) {
        
    }

    async function logout() {
        
    }

    return (
        <UserContext.Provider value={{ user, login, register, logout }}>
            {children}
        </UserContext.Provider>
    )
}