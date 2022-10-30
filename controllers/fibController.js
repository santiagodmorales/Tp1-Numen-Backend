
const getFib = (req, res) => {
  let fibSerie = [0, 1];
  const { num } = req.params;
  let limit = 20;
  let query = parseInt(num);

  try {
    if (!num) {
        for (let i = 2; i < limit; i++) {
            fibSerie.push(fibSerie[i - 1] + fibSerie[i - 2]);
          }  
      return res.status(200).send(fibSerie);
    }

    if (Number.isInteger(query)) {
      limit = query;
      for (let i = 2; i < limit; i++) {
        fibSerie.push(fibSerie[i - 1] + fibSerie[i - 2]);
      } 
      return res.status(200).send(fibSerie);
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
