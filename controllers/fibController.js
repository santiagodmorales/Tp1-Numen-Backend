const getFib = (req, res) => {
  let fib = [0, 1];
  const { num } = req.params;
  let limit = 20;
  let query = parseInt(num);

  try {
    if (!num) {
        for (let i = 2; i < limit; i++) {
            fib.push(fib[i - 1] + fib[i - 2]);
          }  
      return res.status(200).send(fib);
    }

    if (Number.isInteger(query)) {
      limit = query;
      for (let i = 2; i < limit; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
      } 
      return res.status(200).send(fib);
    } else {
      res
        .status(411)
        .send({
          error:
            "El servidor rechaza la petición por no incluir una cabecera adecuada.",
        });
    }
  } catch (error) {
    res
      .status(411)
      .send({
        error:
          "El servidor rechaza la petición por no incluir una cabecera adecuada.",
      });
  }
};

module.exports = {
  getFib,
};
