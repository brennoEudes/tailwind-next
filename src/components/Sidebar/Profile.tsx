import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export interface ProfileProps {}

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/brennoEudes.png"
        className="h-10 w-10 rounded-full"
        alt="profile picture"
      />
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Brenno Eudes
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          brenno@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost" className="ml-auto">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
