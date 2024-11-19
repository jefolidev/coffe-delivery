import CoffeeCard from '../coffee-card'
import {
  CoffeeHeader,
  CoffeeListContent,
  CoffeeListWrapper,
  CoffeeTitle,
} from './styles'

export function CoffeeList() {
  return (
    <CoffeeListWrapper>
      <CoffeeHeader>
        <CoffeeTitle> Nossos Cafés</CoffeeTitle>
      </CoffeeHeader>

      <CoffeeListContent>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeeListContent>
    </CoffeeListWrapper>
  )
}
