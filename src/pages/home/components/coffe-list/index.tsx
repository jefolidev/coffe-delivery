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

export interface CoffeeCardsProps {
  name: string
  description: string
  price: number
  image_path: string
  tags: CoffeeCardsTags[]
}

export function CoffeeList() {
  const coffeeCard: CoffeeCardsProps[] = [
    {
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      image_path: './src/assets/coffees/expresso.svg',
      tags: ['Tradicional'],
    },
    {
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
      image_path: './src/assets/coffees/expresso-americano.svg',
      tags: ['Tradicional'],
    },
    {
      name: 'Expresso Cremoso',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
      image_path: './src/assets/coffees/expresso-cremoso.svg',
      tags: ['Tradicional', 'Gelado'],
    },
    {
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.9,
      image_path: './src/assets/coffees/expresso-gelado.svg',
      tags: ['Tradicional', 'Com Leite'],
    },
    {
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.9,
      image_path: './src/assets/coffees/cafe-leite.svg',
      tags: ['Tradicional', 'Com Leite'],
    },
    {
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.9,
      image_path: './src/assets/coffees/latte.svg',
      tags: ['Tradicional', 'Com Leite'],
    },
    {
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.9,
      image_path: './src/assets/coffees/capuccino.svg',
      tags: ['Tradicional', 'Com Leite'],
    },
    {
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.9,
      image_path: './src/assets/coffees/macchiato.svg',
      tags: ['Tradicional', 'Com Leite'],
    },
    {
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.9,
      image_path: './src/assets/coffees/mocaccino.svg',
      tags: ['Tradicional', 'Com Leite'],
    },
    {
      name: 'Chocolate Quente',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.9,
      image_path: './src/assets/coffees/chocolate.svg',
      tags: ['Especial', 'Com Leite'],
    },
    {
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.9,
      image_path: './src/assets/coffees/cubano.svg',
      tags: ['Especial', 'Com Leite', 'Gelado'],
    },
    {
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.9,
      image_path: './src/assets/coffees/havaiano.svg',
      tags: ['Especial', 'Alcoólico'],
    },
    {
      name: 'Árabe',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.9,
      image_path: './src/assets/coffees/arabe.svg',
      tags: ['Especial'],
    },
    {
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 9.9,
      image_path: './src/assets/coffees/irlandes.svg',
      tags: ['Especial', 'Alcoólico'],
    },
  ]

  return (
    <CoffeeListWrapper>
      <CoffeeHeader>
        <CoffeeTitle> Nossos Cafés</CoffeeTitle>
      </CoffeeHeader>

      <CoffeeListContent>
        {coffeeCard.map((card) => {
          return (
            <CoffeeCard
              key={card.name}
              name={card.name}
              description={card.description}
              price={card.price}
              tags={card.tags}
              image_path={card.image_path}
            />
          )
        })}
      </CoffeeListContent>
    </CoffeeListWrapper>
  )
}
