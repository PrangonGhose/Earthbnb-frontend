import React from 'react'

export default function Option(props) {
  const { name } = props
  return (
    <option value={name.toLowerCase()}>{name}</option>
  )
}
