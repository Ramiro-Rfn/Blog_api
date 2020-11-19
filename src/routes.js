import express from 'express';

import ArticleController from './controllers/articleController.js';

const { create, index, remove } = new ArticleController;

const routes = express.Router();

routes.post('/create-articles', create)

routes.get('/articles', index);

routes.delete('/update-articles', remove);

export default routes;