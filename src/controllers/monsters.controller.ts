import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Monsters} from '../models';
import {MonstersRepository} from '../repositories';

export class MonstersController {
  constructor(
    @repository(MonstersRepository)
    public monstersRepository : MonstersRepository,
  ) {}

  @post('/monsters')
  @response(200, {
    description: 'Monsters model instance',
    content: {'application/json': {schema: getModelSchemaRef(Monsters)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Monsters, {
            title: 'NewMonsters',
            exclude: ['id'],
          }),
        },
      },
    })
    monsters: Omit<Monsters, 'id'>,
  ): Promise<Monsters> {
    return this.monstersRepository.create(monsters);
  }

  @get('/monsters/count')
  @response(200, {
    description: 'Monsters model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Monsters) where?: Where<Monsters>,
  ): Promise<Count> {
    return this.monstersRepository.count(where);
  }

  @get('/monsters')
  @response(200, {
    description: 'Array of Monsters model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Monsters, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Monsters) filter?: Filter<Monsters>,
  ): Promise<Monsters[]> {
    return this.monstersRepository.find(filter);
  }

  @patch('/monsters')
  @response(200, {
    description: 'Monsters PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Monsters, {partial: true}),
        },
      },
    })
    monsters: Monsters,
    @param.where(Monsters) where?: Where<Monsters>,
  ): Promise<Count> {
    return this.monstersRepository.updateAll(monsters, where);
  }

  @get('/monsters/{id}')
  @response(200, {
    description: 'Monsters model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Monsters, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Monsters, {exclude: 'where'}) filter?: FilterExcludingWhere<Monsters>
  ): Promise<Monsters> {
    return this.monstersRepository.findById(id, filter);
  }

  @patch('/monsters/{id}')
  @response(204, {
    description: 'Monsters PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Monsters, {partial: true}),
        },
      },
    })
    monsters: Monsters,
  ): Promise<void> {
    await this.monstersRepository.updateById(id, monsters);
  }

  @put('/monsters/{id}')
  @response(204, {
    description: 'Monsters PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() monsters: Monsters,
  ): Promise<void> {
    await this.monstersRepository.replaceById(id, monsters);
  }

  @del('/monsters/{id}')
  @response(204, {
    description: 'Monsters DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.monstersRepository.deleteById(id);
  }
}
