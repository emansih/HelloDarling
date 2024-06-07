import { getAllUsers } from './controllers/userController';
import User from './models/user';
import { Request, Response } from 'express';

jest.mock('./models/user');

describe('getAllUsers', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let status: jest.Mock;
  let json: jest.Mock;

  beforeEach(() => {
    req = {};
    status = jest.fn().mockReturnThis();
    json = jest.fn();
    res = {
      status,
      json,
    };
  });

  it('should return all users with status 200', async () => {
    const mockUsers = [
      { firstName: 'Alice', lastName: 'Smith', userGender: 'Female', userPostCode: 1020 }, 
      { firstName: 'Bob', lastName: 'Johnson', userGender: 'Male', userPostCode: 2045 }
    ];
    (User.findAll as jest.Mock).mockResolvedValue(mockUsers);

    await getAllUsers(req as Request, res as Response);

    expect(User.findAll).toHaveBeenCalledTimes(1);
    expect(status).toHaveBeenCalledWith(200);
    expect(json).toHaveBeenCalledWith(mockUsers);
  });
});
