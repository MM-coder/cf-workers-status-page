import { useState } from 'react'

const searchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    className="mx-auto text-gray-300 h-7 dark:text-columbia-blue"
    fill="currentColor"
  >
    <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z"
      clipRule="evenodd"
    />
  </svg>
)

export default function MonitorFilter({ active, callback }) {
  const [input, setInput] = useState('')

  const handleInput = (event) => {
    // ignore focus trigger
    if (event.target.value === '/') {
      return
    }
    setInput(event.target.value)
    callback(event.target.value)
  }

  const handleKeyDown = (event) => {
    // blur input field on escape
    if (event.keyCode === 27) {
      event.target.blur()
    }
  }

  return (
    <div className="relative col-span-6 sm:col-span-3">
      <input
        className="block w-full px-3 py-2 rounded-full shadow-sm dark:bg-oxford-blue focus:outline-none focus:ring-1 focus:ring-light-cyan focus:border-light-cyan sm:text-sm"
        type="text"
        value={input}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        placeholder="Tap '/' to search"
        tabIndex={0}
        ref={(e) => e && active && e.focus()}
      />
      <div className="absolute flex items-center inset-y-1 right-1 z-1">
        {searchIcon}
      </div>
    </div>
  )
}
