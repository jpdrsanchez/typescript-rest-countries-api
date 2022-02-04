import { MouseEvent, useCallback, useEffect, useState } from 'react'
import Icon from './Icon'
import * as S from './styles'

export type DropdownItem = {
  id: number
  slug: string
  title: string
}

type DropdownProps = {
  title: string
  options: DropdownItem[]
  onItemSelect: (value: string) => void
}

const Dropdown = ({ title, options, onItemSelect }: DropdownProps) => {
  const [open, setOpen] = useState(false)

  const handleClose = useCallback(() => {
    setOpen(false)
    document.documentElement.removeEventListener('click', handleClose)
  }, [])

  useEffect(() => {
    if (open) document.documentElement.addEventListener('click', handleClose)
    else document.documentElement.removeEventListener('click', handleClose)
    return () => {
      document.documentElement.removeEventListener('click', handleClose)
    }
  }, [open, handleClose])

  const handleToggle = (e: MouseEvent) => {
    e.stopPropagation()
    setOpen(value => !value)
  }

  const handleSelect = ({
    currentTarget: { dataset }
  }: MouseEvent<HTMLButtonElement>) => {
    onItemSelect(dataset.slug || '')
  }

  return (
    <S.Dropdown onClick={handleToggle}>
      <S.Button
        aria-controls="dropdown-menu"
        aria-haspopup="menu"
        aria-expanded={open}
        type="button"
      >
        {title}
        <Icon title="Dropdown Icon" />
      </S.Button>
      <S.List
        aria-orientation="vertical"
        className={open ? 'active' : ''}
        tabIndex={-1}
        role="menu"
        id="dropdown-menu"
      >
        {options.map(option => (
          <button
            type="button"
            key={option.id}
            role="menuitem"
            tabIndex={open ? 0 : -1}
            onClick={handleSelect}
            data-slug={option.slug}
          >
            {option.title}
          </button>
        ))}
      </S.List>
    </S.Dropdown>
  )
}

export default Dropdown
