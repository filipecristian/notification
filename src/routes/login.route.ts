import { LoginController } from '../controllers/login.controller';

import express = require('express');

export const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

router.post('/', (req: any, res: any, next: any) => (new LoginController).login(req, res, next));