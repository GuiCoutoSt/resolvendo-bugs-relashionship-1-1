import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Cart } from "./cart.entity";

@Entity()
export class User {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  email: string;

  @Column()
  password: string;

  @CreateDateColumn({
    name: "created_at",
  })
  createdAt: Date;

  @OneToOne((type) => Cart, {
    eager: true,
  })
  @JoinColumn()
  cart: Cart;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
