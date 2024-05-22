import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
// ListAllEntities } from './dto';

@Controller('dogs')
export class DogsController {
  @Post()
  create(@Body() createDogDto: CreateDogDto) {
    return 'This action adds a new dog';
  }

  //@Get()
  //findAll(@Query() query: ListAllEntities) {
  //  return `This action returns all dogs (limit: ${query.limit} items)`;
  //}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} dog`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDogDto: UpdateDogDto) {
    return `This action updates a #${id} dog`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} dog`;
  }
}