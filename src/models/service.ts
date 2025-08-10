import type { IServiceItem } from './serviceItem'
export interface IService{
    id: number
    name: string
    items: IServiceItem[]
}