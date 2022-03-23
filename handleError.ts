import express from 'express';

const errorHandler =  (req : express.Request, res : express.Response) => {
    res.status(404).json({
        success: 'false',
        message: 'Page not found',
        error: {
          statusCode: 404,
          message: 'You reached a route that is not defined on this server',
        },
      });
}

export default errorHandler;

