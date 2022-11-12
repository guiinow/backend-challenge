import { HttpCode, HttpException, HttpStatus, Injectable, Res } from '@nestjs/common';
import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';
import { Repository, Connection} from 'typeorm'
import { TripsEntity } from './entities/trip.entity' 


@Injectable()
export class TripsService {
  private _tripsRepository: Repository<TripsEntity>

  constructor(private _connection: Connection){
    this._tripsRepository = this._connection.getRepository(TripsEntity)
  }

  async create(createTripDto: CreateTripDto) {

      
      // == creates a new entity instance ==
      const newTrip = this._tripsRepository.create();
    
      // newTrip.id = createTripDto.id;
      newTrip.country = createTripDto.country;
      newTrip.place = createTripDto.place;
      newTrip.flagUrl = createTripDto.flagUrl;
      newTrip.goal = createTripDto.goal;
      newTrip.createdAt = createTripDto.createdAt;
      newTrip.updatedAt = createTripDto.updatedAt;
    
    try {

      // == saves the trip to db ==
      await this._tripsRepository.save(newTrip);
      return newTrip;
  } catch (QueryFailedError) {

    throw new HttpException(
      `Já existe uma meta para ${newTrip.place} no país ${newTrip.country}, com meta para ${newTrip.goal}.`,
      HttpStatus.BAD_REQUEST,
    )
  }

  }
  
  async findAll() {
    // == returns all records if didn't specify any options ==
   
    return await this._tripsRepository.find({order: {goal: "ASC"}});
  }

  async findOne(id: number) {
    return await this._tripsRepository.findOne({where: {id: id}});
  }
  
  async update(id: number, updateTripDto: UpdateTripDto) {
    // == if not throws an error ==
    const trip = await this._tripsRepository.findOneOrFail({where: {id: id}})
  
    trip.place = updateTripDto.place;
    trip.goal = updateTripDto.goal;
  
    await this._tripsRepository.save(trip);
    return trip;
  }

  async remove(id: number) {
    await this._tripsRepository.delete(id);
  }

}

  function errorHandler() {
    return 'nao da pra adicionar duplicado';
  }

