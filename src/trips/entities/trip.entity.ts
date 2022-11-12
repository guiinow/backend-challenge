import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    Unique,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity('trips')
  @Unique(['country', 'place'])
  export class TripsEntity {
    @PrimaryColumn({ generated: true })
    id: number;
  
    @Column({name:'country'})
    public country: string;
  
    @Column({name:'place'})
    public place: string;

    @Column()
    flagUrl: string;

    @Column()
    goal: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }