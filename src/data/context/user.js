import React from 'react'

export const UserContext = React.createContext(
    {
        // details (name, email, etc.)
        user: undefined,

        // current workspace details
        workspace: undefined,

        // current local details (language, currency, timezone, etc.)
        locale: undefined
    }
)
