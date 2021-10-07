const { Router } = require('express');
const { authorize } = require('./authorize');
const { cancel } = require('./cancel');
const { transfer } = require('./transfer');
const { verifyUser } = require('./verifyUser');
const router = Router();

router.post('/authorize', authorize);
router.post('/verifyUser', verifyUser);
router.post('/transfer', transfer);
router.post('/cancel', cancel)

module.exports = router;