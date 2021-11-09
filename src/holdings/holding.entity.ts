import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Holding {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  companyId: string;

  @Column()
  userId: string;

  @Column()
  shares: number;
  
  @Column()
  priceBuy: number;

  @Column()
  priceSell: number;

  @Column()
  dateBuy: Date;

  @Column()
  dateSell: Date;

  @Column()
  isActive: boolean;
}