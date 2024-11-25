import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layout/default-layout'
import { Checkout } from '../pages/checkout'
import { Home } from '../pages/home'
import { SuccessPage } from '../pages/success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<SuccessPage />} />
      </Route>
    </Routes>
  )
}
