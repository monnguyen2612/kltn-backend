var bodyParser = require('body-parser')
const cors = require('cors');
const express = require('express');
var app = express();

const auth = require('./middleware/auth');
app.use(cors({
    methods: ['OPTION', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE']
}));
// login

app.use(auth);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


const clinicHistoryCtrl = require('./controllers/clinic_historys');
app.use('/clinichistorys', clinicHistoryCtrl);

const DoctorCtrl = require('./controllers/doctors');
app.use('/doctors', DoctorCtrl);

const UserCtrl = require('./controllers/users');
app.use('/users', UserCtrl);

const specializedCtrl = require('./controllers/specializeds');
app.use('/specializeds', specializedCtrl);

const shiftTypeCtrl = require('./controllers/shift_types');
app.use('/shifttypes', shiftTypeCtrl);

const doctorshiftCtrl = require('./controllers/doctor_shifts');
app.use('/doctorshifts', doctorshiftCtrl);

const roomCtrl = require('./controllers/rooms');
app.use('/rooms', roomCtrl);

const shiftCtrl = require('./controllers/shifts');
app.use('/shifts', shiftCtrl);


app.use((req, res) => {
    res.status(404).send('Api Not Found');
});


var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';

app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});