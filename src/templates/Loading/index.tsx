import * as S from './styles'
import { Earth, Map, Search } from '@styled-icons/ionicons-sharp'
import { CSSProperties, useEffect, useState } from 'react'

const LoadingTemplate = () => {
  const [visible, setVisible] = useState(0)

  const updateVisibleIndex = () => {
    setVisible(visible => (visible < 2 ? visible + 1 : 0))
  }

  const show = (index: number): CSSProperties => ({
    display: visible === index ? 'block' : 'none'
  })

  useEffect(() => {
    const interval = window.setInterval(() => {
      updateVisibleIndex()
    }, 600)

    return () => {
      window.clearInterval(interval)
    }
  }, [])

  return (
    <S.Wrapper aria-label="Loading Content">
      <div>
        <Earth size={32} title="Earth" style={show(0)} />
        <Search size={32} title="Search" style={show(1)} />
        <Map size={32} title="Map" style={show(2)} />
      </div>
    </S.Wrapper>
  )
}

export default LoadingTemplate
