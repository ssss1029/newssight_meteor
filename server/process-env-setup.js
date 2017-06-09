import { Meteor } from 'meteor/meteor';
var data = require('process-env-config');

for (var key in data) {
    Meteor.settings.key = data[key];
}