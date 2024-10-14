import React, { ChangeEvent } from 'react'

type MySelectProps = {
  options: {
    value: string
    name: string
  }[]
  defaultValue: string
  value: string
  onChange: (e: string) => void
}

export const MySelect = ({ options, defaultValue, value, onChange }: MySelectProps) => {
  return (
    <select onChange={(e) => onChange(e.currentTarget.value)} value={value}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}
