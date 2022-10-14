const registerErrorHandling = (err: any, reqError: any, resError: any) => {
  resError.send({
    status: 'error',
    code: 1,
    data: { message: err.message.replace(/"/g, '') },
  });
};

export default registerErrorHandling;
