const dispatch = require('micro-route/dispatch');
const { send, json } = require('micro');
const { getUser, getUsers, getSummary } = require('./api/');
const nuxt = require('./nuxt.index.js');

module.exports = async (req, res) => {
  await dispatch()
    .dispatch('/api/users/:id', ['GET'], async (req, res, { params, query }) =>
      send(res, 200, await getUser(params.id))
    )
    .dispatch('/api/users', ['GET'], async (req, res) =>
      send(res, 200, await getUsers())
    )
    .dispatch('/api/summarize', ['POST'], async (req, res) => {
      const data = await json(req);
      const url = data.url || '';
      return send(res, 200, await getSummary(url));
    })
    .dispatch('*', ['GET'], (req, res) => nuxt.render(req, res))(req, res);
};
