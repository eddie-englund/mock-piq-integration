const { Router } = require('express');
const { authorize } = require('./authorize');
const { cancel } = require('./cancel');
const { transfer } = require('./transfer');
const { verifyUser } = require('./verifyUser');
const { notification } = require('./notification');
const router = Router();

router.post('/authorize', authorize);
router.post('/verifyUser', verifyUser);
router.post('/transfer', transfer);
router.post('/cancel', cancel)
router.post('/notification', notification)

module.exports = router;