export interface Holding {
    id: string;
    companyId: string;
    userId: string;
    shares: number;
    priceBuy: number;
    priceSell: number;
    dateBuy: Date;
    dateSell: Date;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}