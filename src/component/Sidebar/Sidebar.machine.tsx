import { useReducer } from "react"
import { match } from "ts-pattern"

type State =
  | { type: 'large', width: number }
  | { type: 'small', width: number }

type Action =
  | { type: 'TOGGLE_SMALL' }
  | { type: 'TOGGLE_LARGE' }

const reducer = (state: State, action: Action): State => {
  return match<[State, Action], State>([state, action])
    .with([{ type: 'large' }, { type: 'TOGGLE_SMALL' }], () => ({ type: 'small', width: 20 }))
    .with([{ type: 'small' }, { type: 'TOGGLE_LARGE' }], () => ({ type: 'large', width: 64 }))
    .otherwise(() => state)
}

const initialState: State = { type: 'large', width: 64 }

export const useSidebarMachine = (
) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return [state, dispatch] as const
}