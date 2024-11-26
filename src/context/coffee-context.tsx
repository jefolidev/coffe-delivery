import { createContext, useState } from 'react'
import { z } from 'zod'
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
  deliveryInformations: AddressProps | undefined
  setProductsInCart: React.Dispatch<React.SetStateAction<CoffeeCartData[]>>
  handleAddProductInCart: (coffee: CoffeeItemProps, quantity: number) => void
  handleSendOrderToDelivery: (data: AddressProps) => void
  clearOldOrderInformations: () => void
}

export const CoffeeCartContext = createContext({} as CoffeeCartContextProps)

export const addressInformationsSchema = z.object({
  cep: z.string().min(8),
  street: z.string().min(1),
  number: z.number().min(1),
  complement: z.string(),
  neighborhood: z.string().min(1),
  city: z.string().min(1),
  federal_unity: z.string().min(2).max(2),
  payment_method: z.enum(['credit', 'debit', 'cash']),
})

export type AddressProps = z.infer<typeof addressInformationsSchema>

export function CoffeeCartProvider({ children }: CoffeeCartProviderProps) {
  const [productsInCart, setProductsInCart] = useState<CoffeeCartData[]>([])
  const [deliveryInformations, setDeliveryInformations] = useState<
    AddressProps | undefined
  >(undefined)

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

  function handleSendOrderToDelivery(data: AddressProps) {
    if (!data) {
      throw new Error('Insira as informações do endereço!')
    }
    setDeliveryInformations(data)
  }

  function clearOldOrderInformations() {
    setDeliveryInformations(undefined)
  }

  return (
    <CoffeeCartContext.Provider
      value={{
        productsInCart,
        deliveryInformations,
        setProductsInCart,
        handleAddProductInCart,
        handleSendOrderToDelivery,
        clearOldOrderInformations,
      }}
    >
      {children}
    </CoffeeCartContext.Provider>
  )
}
