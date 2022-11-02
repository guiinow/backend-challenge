import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity('trips')
  export class TripsEntity {
    @PrimaryColumn({ generated: true })
    id: number;
  
    @Column()
    country: string;
  
    @Column()
    place: string;

    @Column()
    flagUrl: string;

    @Column()
    goal: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }