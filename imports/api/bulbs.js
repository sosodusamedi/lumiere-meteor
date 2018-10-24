import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'

export const Bulbs = new Mongo.Collection('bulbs')

if(Meteor.isServer) {
  Meteor.publish('bulbs', function () {
    return Bulbs.find({})
  })
}

Meteor.methods({
  'bulbs.insert'(
    name,
    phone,
    email,
    location,
    birthday,
    disponibilities,
    interests,
    disinterests
  ) {
    check(name, String)
    check(phone, String)
    check(email, String)
    check(location, String)
    check(birthday, String)
    check(disponibilities, String)

    Bulbs.insert({
      name,
      phone,
      email,
      location,
      birthday,
      disponibilities,
      interests,
      disinterests,
      createdAt: new Date()
    })
  },

  'bulbs.remove'(bulbId) {
    check(bulbId, String)

    Bulbs.remove(bulbId)
  },

  'bulbs.update'(bulbId, bulb) {
    check(bulbId, String)

    Bulbs.update(bulbId, {
      $set: {
        name: bulb.name,
        phone: bulb.phone,
        email: bulb.email,
        location: bulb.location,
        birthday: bulb.birthday,
        disponibilities: bulb.disponibilities
      }
    })
  }
})
