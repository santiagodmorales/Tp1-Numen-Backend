let usersData = require("../data/usersData");

const getUsers = (req, res) => {
  const { nombre, apellido } = req.query;
  let findUsers = [];
  if (nombre || apellido){
      try {
        let name = usersData.find((item) => item.nombre === nombre);
        if (name) {
          findUsers.push(name);
        }
      } catch (error) {
        return res.status(400).json(error, message= "No encontrado");
      }
      try {
        let lastName = usersData.find((item) => item.apellido === apellido);
        if (lastName) {
          let index = findUsers.findIndex((item) => item.id == lastName.id);
          if (index === -1) {
          findUsers.push(lastName);}
        }
        res.status(200).json(findUsers);
      } catch (error) {
        return res.status(400).json(error, message= "No encontrado");
      }
      return res.status(200).json(findUsers);
    } else {
      findUsers = usersData;
      res.status(200).json(findUsers);
    } 
};




const getUserById = (req, res) => {
  let element = usersData.find((item) => item.id === parseInt(req.params.id));
  if (element) {
    res.status(200).json(element);
  } else {
    res.sendStatus(404);
  }
};


const createUser = async (req, res) => {
  const { nombre, apellido, dni } = req.body;
  try {
    const itemIds = usersData.map((item) => item.id);
    let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;

    const newItem = {
      id: newId,
      nombre,
      apellido,
      dni,
    };

    usersData.push(newItem);
    return res.status(200).send(newItem);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const updateUser = (req, res) => {
  let element = usersData.find((item) => item.id === parseInt(req.params.id));

  if (element) {
    const { nombre, apellido, dni } = req.body;
    try {
      let updeteElement = {
        id: element.id,
        nombre,
        apellido,
        dni,
      };
      let targetIndex = usersData.indexOf(element);
      usersData.splice(targetIndex, 1, updeteElement);

      return res.sendStatus(204).send({
        message: "Usuario actualizado",
      });
    } catch (error) {
      return res.status(400).json(error);
    }
  } else {
    res.sendStatus(404);
  }
};

const deleteUser = (req, res) => {
  let element = usersData.find((item) => item.id == parseInt(req.params.id));
  if (element) {
    try {
      let targetIndex = usersData.indexOf(element);
      usersData.splice(targetIndex, 1);

      return res.sendStatus(204).send({
        message: "Usuario eliminado!",
      });
    } catch (error) {
      return res.status(400).json(error);
    }
  } else {
    res.sendStatus(404);
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,

};
