import clsx from 'clsx'

type ButtonProps =
  | {
      type: 'button' | 'submit' | 'reset'
      color: 'black'
      children: React.ReactNode
      onClick: () => void
    }
  | {
      type: 'button' | 'submit' | 'reset'
      plain: true
      children: React.ReactNode
      onClick: () => void
    }

export default function Button(props: ButtonProps) {
  const classes = clsx(
    'px-2 py-1.5 sm:text-sm border focus:outline-offset-2 focus:outline-zinc-600 rounded-md',
    {
      'text-zinc-300 border-zinc-600 bg-black hover:bg-zinc-800 dark:bg-zinc-700 dark:hover:bg-zinc-600': 'color' in props && props.color === 'black',
      'border-transparent hover:bg-zinc-200 dark:hover:bg-zinc-800': 'plain' in props && props.plain,
      shadow: 'plain' in props && !props.plain,
    },
  )

  return (
    <button type={props.type} className={classes} onClick={props.onClick}>
      {props.children}
    </button>
  )
}
