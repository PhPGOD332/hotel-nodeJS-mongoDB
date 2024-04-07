const Index = require('express').Router;
const RoomsController = require('../controllers/rooms-controller');
const ReserveController = require('../controllers/reserve-controller');
const ClientController = require('../controllers/client-controller');

const router = new Index;

router.get('/rooms', RoomsController.getAllRooms);
router.get('/rooms/filter', RoomsController.getRoomsFiltered);
router.post('/reserves/addReserve', ReserveController.addReserve);
router.get('/clients', ClientController.getAllClients);
router.post('/clients/addClient', ClientController.addClient);

module.exports = router;