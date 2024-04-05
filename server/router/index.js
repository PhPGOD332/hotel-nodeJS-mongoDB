const Index = require('express').Router;
const RoomsController = require('../controllers/rooms-controller');
const ReserveController = require('../controllers/reserve-controller')

const router = new Index;

router.get('/rooms', RoomsController.getAllRooms);
router.get('/rooms/filter', RoomsController.getRoomsFiltered);
router.put('reserves/addReserve', ReserveController.addReserve);

module.exports = router;