import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  timestamps: false,
  tableName: 'users'
})
export class User extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
  })
  id: number | undefined;

  @Column({
    type: DataType.STRING
  })
  email: string | undefined;

  @Column({
    type: DataType.STRING
  })
  password: string | undefined;

  @Column({
    type: DataType.INTEGER
  })
  company: string | undefined;
}