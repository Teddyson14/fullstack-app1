const express = require('express');
const authRoutes = require('./routes/auth.js')
const analyticsRoutes = require('./routes/analytics.js')
const categotyRoutes = require('./routes/category.js')
const orderRoutes = require('./routes/order.js')
const positionRoutes = require('./routes/position.js')
const app = express();

app.use ('/api/auth', authRoutes)
app.use ('/api/analytics', analyticsRoutes)
app.use ('/api/category', categotyRoutes)
app.use ('/api/order', orderRoutes)
app.use ('/api/position', positionRoutes)

module.exports = app;