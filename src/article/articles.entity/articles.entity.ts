import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Articles {
  //id title content author creationDate
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  title: string;

  @Column({ length: 255 })
  content: string;

  @Column({ length: 50 })
  author: string;

  @Column({ type: 'date' })
  creationDate: string;
}
