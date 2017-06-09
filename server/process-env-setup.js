import { Meteor } from 'meteor/meteor';
import data from './process-env-config';

for (var key in data) {
    Meteor.settings.key = data[key];
}