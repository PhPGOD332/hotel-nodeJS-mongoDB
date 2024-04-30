const Index = require('express').Router;
const RoomsController = require('../controllers/rooms-controller');
const ReserveController = require('../controllers/reserve-controller');
const ClientController = require('../controllers/client-controller');
const TagsController = require('../controllers/tags-controller');
const AdminController = require('../controllers/admin-controller');
const path = require("path");

const router = new Index;

// router.get('/images', (req, res) => {
//     res.json(req.params.images)
// })
// router.get('/images/:imageName', (req, res) => {
//     const imageName = req.params.imageName;
//     res.sendFile(path.join(__dirname, 'images', imageName))
// })

router.post('/tags/addTag', TagsController.addTag);

router.get('/rooms', RoomsController.getAllRooms);
router.get('/rooms/filter', RoomsController.getRoomsFiltered);
router.get('/reserves/reservesByDates', ReserveController.getReservesByDates);
router.get('/clients', ClientController.getAllClients);
router.get('/tags', TagsController.getAllTags);
router.get('/adminCheck', AdminController.checkAuth);
router.post('/reserves/addReserve', ReserveController.addReserve);
router.post('/clients/addClient', ClientController.addClient);
router.post('/clients/editClient', ClientController.editClient);
router.delete('/clients/removeClient', ClientController.removeClient);

module.exports = router;