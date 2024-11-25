import { createContext, useState } from 'react'
import type {
  CoffeeIdTypes,
  CoffeeItemProps,
} from '../pages/home/components/coffe-list'

export interface CoffeeCartData {
  id: CoffeeIdTypes
  coffee_name: string
  quantity: number
  price: number
  image_path: string
}

interface CoffeeCartProviderProps {
  children: React.ReactNode
}

export interface CoffeeCartContextProps {
  productsInCart: CoffeeCartData[]
  setProductsInCart: React.Dispatch<React.SetStateAction<CoffeeCartData[]>>
  handleAddProductInCart: (coffee: CoffeeItemProps, quantity: number) => void
}

export const CoffeeCartContext = createContext({} as CoffeeCartContextProps)

export function CoffeeCartProvider({ children }: CoffeeCartProviderProps) {
  const [productsInCart, setProductsInCart] = useState<CoffeeCartData[]>([])

  function handleAddProductInCart(coffee: CoffeeItemProps, quantity: number) {
    const productToAddInCart: CoffeeCartData = {
      id: coffee.id,
      coffee_name: coffee.name,
      quantity,
      price: coffee.price,
      image_path: coffee.image_path,
    }

    const hasMoreThanOneSameProductInCart = productsInCart.some(
      (item) => item.id === coffee.id
    )

    hasMoreThanOneSameProductInCart
      ? setProductsInCart((prevState) =>
          prevState.map((item) =>
            item.id === coffee.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        )
      : setProductsInCart((prevState) => [...prevState, productToAddInCart])
  }

  return (
    <CoffeeCartContext.Provider
      value={{ productsInCart, setProductsInCart, handleAddProductInCart }}
    >
      {children}
    </CoffeeCartContext.Provider>
  )
}
