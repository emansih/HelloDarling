import { setUserDates } from './controllers/userController';
import { Request, Response } from 'express';

jest.mock('./models/user_dates', () => ({
  UserDates: {
    create: jest.fn(),
  },
}));


describe('setUserDates', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(() => {
    req = { 
      body: {
        dateStart: '2024-06-11T20:49:00.000+00:00',
        dateEnd: '2024-06-11T22:25:25.000+00:00', 
        daterOne: 5,
        daterTwo: 8,
        dateLocation: 'Somewhere Under the Rainbow',
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it('should return status 403 when dates cannot be saved', async () => {

    await setUserDates(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ message: 'Date One is not available on Wednesday' });
  });

});
