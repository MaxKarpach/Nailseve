import type { IPortfolioItemDescription } from './portfolioItemDescription'
export interface IPortfolioItem{
    id: number
    img: string
    price: number
    descriptions: IPortfolioItemDescription[]
}