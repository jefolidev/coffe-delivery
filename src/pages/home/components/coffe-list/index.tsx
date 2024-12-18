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
  const coffeeCard: CoffeeItemProps[] = [
    {
      id: 'CAETR',
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      image_path: 'expresso',
      tags: ['Tradicional'],
    },
    {
      id: 'CAEAM',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
      image_path: 'expresso-americano',
      tags: ['Tradicional'],
    },
    {
      id: 'CAECR',
      name: 'Expresso Cremoso',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
      image_path: 'expresso-cremoso',
      tags: ['Tradicional', 'Gelado'],
    },
    {
      id: 'CAEGE',
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.9,
      image_path: 'expresso-gelado',
      tags: ['Tradicional', 'Com Leite'],
    },
    {
      id: 'CALEI',
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.9,
      image_path: 'cafe-leite',
      tags: ['Tradicional', 'Com Leite'],
    },
    {
      id: 'CALAT',
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.9,
      image_path: 'latte',
      tags: ['Tradicional', 'Com Leite'],
    },
    {
      id: 'CAPUCC',
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.9,
      image_path: 'capuccino',
      tags: ['Tradicional', 'Com Leite'],
    },
    {
      id: 'CAMAC',
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.9,
      image_path: 'macchiato',
      tags: ['Tradicional', 'Com Leite'],
    },
    {
      id: 'CAMOC',
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.9,
      image_path: 'mocaccino',
      tags: ['Tradicional', 'Com Leite'],
    },
    {
      id: 'CHOCO',
      name: 'Chocolate Quente',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.9,
      image_path: 'chocolate',
      tags: ['Especial', 'Com Leite'],
    },
    {
      id: 'ALCUB',
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.9,
      image_path: 'cubano',
      tags: ['Especial', 'Com Leite', 'Gelado'],
    },
    {
      id: 'ALHAV',
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.9,
      image_path: 'havaiano',
      tags: ['Especial', 'Alcoólico'],
    },
    {
      id: 'CAARA',
      name: 'Árabe',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.9,
      image_path: 'arabe',
      tags: ['Especial'],
    },
    {
      id: 'ALIRL',
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 9.9,
      image_path: 'irlandes',
      tags: ['Especial', 'Alcoólico'],
    },
  ]

  return (
    <CoffeeListWrapper>
      <CoffeeHeader>
        <CoffeeTitle>Nossos Cafés</CoffeeTitle>
      </CoffeeHeader>

      <CoffeeListContent>
        {coffeeCard.map((card) => {
          return <CoffeeCard key={card.id} {...card} />
        })}
      </CoffeeListContent>
    </CoffeeListWrapper>
  )
}
