import { useEffect, useState } from 'react'
import type { CoffeeCartData } from '../../../../context/coffee-context'
import { useCoffee } from '../../../../hooks/useCoffe'
import CoffeeCard from '../coffee-card'
import {
  CoffeeHeader,
  CoffeeListContent,
  CoffeeListWrapper,
  CoffeeTitle,
} from './styles'

type CoffeeCardsTags =
  | 'Tradicional'
  | 'Gelado'
  | 'Com Leite'
  | 'Especial'
  | 'Alcoólico'

export type CoffeeIdTypes =
  | 'CAETR'
  | 'CAEAM'
  | 'CAECR'
  | 'CAEGE'
  | 'CALEI'
  | 'CALAT'
  | 'CAPUCC'
  | 'CAMAC'
  | 'CAMOC'
  | 'CHOCO'
  | 'ALCUB'
  | 'ALHAV'
  | 'CAARA'
  | 'ALIRL'

export interface CoffeeItemProps {
  id: CoffeeIdTypes
  name: string
  description: string
  price: number
  image_path: string
  tags: CoffeeCardsTags[]
}

export function CoffeeList() {
  const [amountOfProducts, setAmountOfProducts] = useState(1)
  const { setProductsInCart, productsInCart } = useCoffee()

  const coffeeCard: CoffeeItemProps[] = [
    {
      id: 'CAETR',
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      image_path: './src/assets/coffees/expresso.svg',
      tags: ['Tradicional'],
    },
    {
      id: 'CAEAM',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
      image_path: './src/assets/coffees/expresso-americano.svg',
      tags: ['Tradicional'],
    },
    {
      id: 'CAECR',
      name: 'Expresso Cremoso',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
      image_path: './src/assets/coffees/expresso-cremoso.svg',
      tags: ['Tradicional', 'Gelado'],
    },
    {
      id: 'CAEGE',
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.9,
      image_path: './src/assets/coffees/expresso-gelado.svg',
      tags: ['Tradicional', 'Com Leite'],
    },
    {
      id: 'CALEI',
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.9,
      image_path: './src/assets/coffees/cafe-leite.svg',
      tags: ['Tradicional', 'Com Leite'],
    },
    {
      id: 'CALAT',
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.9,
      image_path: './src/assets/coffees/latte.svg',
      tags: ['Tradicional', 'Com Leite'],
    },
    {
      id: 'CAPUCC',
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.9,
      image_path: './src/assets/coffees/capuccino.svg',
      tags: ['Tradicional', 'Com Leite'],
    },
    {
      id: 'CAMAC',
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.9,
      image_path: './src/assets/coffees/macchiato.svg',
      tags: ['Tradicional', 'Com Leite'],
    },
    {
      id: 'CAMOC',
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.9,
      image_path: './src/assets/coffees/mocaccino.svg',
      tags: ['Tradicional', 'Com Leite'],
    },
    {
      id: 'CHOCO',
      name: 'Chocolate Quente',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.9,
      image_path: './src/assets/coffees/chocolate.svg',
      tags: ['Especial', 'Com Leite'],
    },
    {
      id: 'ALCUB',
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.9,
      image_path: './src/assets/coffees/cubano.svg',
      tags: ['Especial', 'Com Leite', 'Gelado'],
    },
    {
      id: 'ALHAV',
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.9,
      image_path: './src/assets/coffees/havaiano.svg',
      tags: ['Especial', 'Alcoólico'],
    },
    {
      id: 'CAARA',
      name: 'Árabe',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.9,
      image_path: './src/assets/coffees/arabe.svg',
      tags: ['Especial'],
    },
    {
      id: 'ALIRL',
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 9.9,
      image_path: './src/assets/coffees/irlandes.svg',
      tags: ['Especial', 'Alcoólico'],
    },
  ]

  const productIdAlreadyInCart = productsInCart.map((item) => item.id)

  function handleAddProductInCart(coffee: CoffeeItemProps, quantity: number) {
    const productToAddInCart: CoffeeCartData = {
      id: coffee.id,
      coffee_name: coffee.name,
      quantity,
      price: coffee.price,
    }

    const hasMoreThanOneSameProductInCart = productIdAlreadyInCart.includes(
      coffee.id
    )

    if (hasMoreThanOneSameProductInCart) {
      const newQuantityValue = productToAddInCart.quantity + amountOfProducts

      const productWithNewAmount = {
        ...productToAddInCart,
        quantity: newQuantityValue,
      }
      console.log(`Novo valor ${productWithNewAmount}`)
    }

    setProductsInCart((prevState) => [...prevState, productToAddInCart])
  }

  function updateTheCoffeeAmout(
    coffee: CoffeeItemProps,
    quantityToUpdate: number
  ) {}

  useEffect(() => {
    console.log('Carrinho atualizado:', productsInCart)
  }, [productsInCart])

  return (
    <CoffeeListWrapper>
      <CoffeeHeader>
        <CoffeeTitle>Nossos Cafés</CoffeeTitle>
      </CoffeeHeader>

      <CoffeeListContent>
        {coffeeCard.map((card) => {
          return (
            <CoffeeCard
              onInputAmountValueChange={(e) =>
                setAmountOfProducts(Number(e.target.value))
              }
              onClick={() => handleAddProductInCart(card, amountOfProducts)}
              key={card.id}
              {...card}
            />
          )
        })}
      </CoffeeListContent>
    </CoffeeListWrapper>
  )
}
