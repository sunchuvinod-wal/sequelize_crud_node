const db = require("../models/index");

//class for performing user db operations
class TicketController {
  static addTicket = async (data, res) => {
    console.log(data);
    const result = await db.Ticket.create(data);

    return result;
  };
  static getTickets = async (empId, req) => {
    const result = await db.Ticket.findAll({ where: { empId } });
    return result;
  };

  static updateTicket = async (id, data, res) => {
    console.log(id);
    const result = await db.Ticket.update(data, {
      where: { id },
    });
    return result;
  };

  static deleteTicket = async (id, res) => {
    const result = await db.Ticket.destroy({
      where: { id: id },
    });
    return result;
  };
}
module.exports = TicketController;
