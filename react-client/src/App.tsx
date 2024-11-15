// src/App.tsx
import React from "react"
import { User } from './types';
import UserDisplay from "./components/UserDisplay";
import { useQuery } from 'urql'
import { GetUsersDocument } from './graphql/generated'

const App: React.FC = () => {
  const [results] = useQuery({
    query: GetUsersDocument
  })

  const users: User[] = [{
    name: 'Prisma Fan',
    messages: [{
      body: 'Prisma rocks!!'
    }, {
      body: 'Did I mention I love Prisma?'
    }]
  }];

  return (
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
      {
        results.data?.users?.map((user, i) => <UserDisplay user={user} key={i} />)
      }
    </div>
  )
}

export default App