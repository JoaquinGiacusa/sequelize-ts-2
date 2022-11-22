import {
  Model,
  Table,
  AutoIncrement,
  PrimaryKey,
  Column,
  AllowNull,
  NotEmpty,
} from "sequelize-typescript";

export interface ProdcutInterface {
  id?: number;
  name: string;
  brand: string;
  price: number;
}

@Table({
  tableName: "product",
  timestamps: true,
})
export default class Product extends Model implements ProdcutInterface {
  @AutoIncrement
  @PrimaryKey
  @Column
  declare id: number;

  @AllowNull(false)
  @NotEmpty
  @Column
  declare name: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  declare brand: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  @Column
  declare price: number;
}
