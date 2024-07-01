import {afterAll, beforeAll, describe, it, test} from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

describe('Transactions routes', ()=> {
  beforeAll(async()=>{
    await app.ready()
  })
  afterAll(async()=> {
    await app.close()
  })
  
  it('Use can create a new transaction', async()=> {
    await request(app.server)
      .post('/transactions')
      .send({
        title: 'New transactions',
        amount: 5000,
        type: 'credit',
      }).expect(201)
  })
})