const express = require('express');
const router = express.Router();

const inviteCtrl = require('../../controllers/api/invites');

//GET /api/invites/
router.get('/', inviteCtrl.getAll);
//POST /api/invites/
router.post('/', inviteCtrl.createInvite);
//GET /api/invites/:id
router.get('/:id', inviteCtrl.getOne);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;
