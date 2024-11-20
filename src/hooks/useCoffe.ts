import { useContext } from 'react'
import {
  CoffeeCartContext,
  type CoffeeCartContextProps,
} from '../context/coffee-context'

export const useCoffee = (): CoffeeCartContextProps => {
  const context = useContext(CoffeeCartContext)
  if (!context) {
    alert('useCart deve ser utilizado dentro de um CartProvider')
    throw new Error('useCart deve ser utilizado dentro de um CartProvider')
  }

  return context
}
