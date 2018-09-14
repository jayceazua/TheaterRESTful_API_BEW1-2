// creating a new session
var theaterId = 1;

var theaters = db.getSisterDB("booking").theaters;
var sessions = db.getSisterDB("booking").sessions;

var theater = theaters.findOne({"_id": theaterId});
sessions.insert({
    , "name" : "Action Movie 5"
    , "description" : "Another action movie"
    , "start" : ISODate("2015-03-11T15:00:00.000Z")
    , "end" : ISODate("2015-03-11T16:00:00.000Z")
    , "price" : 10
    , "seatsAvailable" : theater.seatsAvailable
    , "seats" : theater.seats
    , "reservations" : []
  });

// Reserving seats
var sessionId = 1;
var cartId = 1;

var seats = [[1, 5], [1, 6]];
var seatsQuery = [];
var setSeatsSelection = {};

var sessions = db.getSisterDB("booking").sessions;
var session = sessions.find({_id: sessionId});

for(var i = 0; i < seats.length; i++) {
  var seatSelector = {};
  var seatSelection = 'seats.' + seats[i][0] + '.' + seats[i][1];
  // Part of $and query to check if seat is free
  seatSelector[seatSelection] = 0;
  seatsQuery.push(seatSelector);
  // Part of $set operation to set seat as occupied
  setSeatsSelection[seatSelection] = 1;
}

var result = sessions.update({
      _id: sessionId
    , $and: seatsQuery
  }, {
      $set: setSeatsSelection
    , $inc: { seatsAvailable: -seats.length }
    , $push: {
      reservations: {
          _id: cartId
        , seats: seats
        , price: session.price
        , total: session.price * seats.length
      }
    }
  });

// Failed to reserve seats
if(result.nModified == 0) {
  sessions.update({
        _id: 1
      , $and: [{'seats.1.5': 0}, {'seats.1.6': 0}]
    }, {
        $set: {'seats.1.5': 1, 'seats.1.6': 1}
      , $inc: { seatsAvailable: 2 }
      , $push: {
        reservations: {
            _id: 1
          , seats: [[1, 5], [1, 6]]
          , price: 10
          , total: 20
        }
      }
    });
}...
// Reservation was successful
if(result.nModified == 1) ...
// add reservation to cart
var sessionId = 1;
var cartId = 1;

var seats = [[1, 5], [1, 6]];
var seatsQuery = [];
var setSeatsSelection = {};

var sessions = db.getSisterDB("booking").sessions;
var carts = db.getSisterDB("booking").carts;
var session = sessions.find({_id: sessionId});

var result = carts.update({
    _id: cartId
  }, {
      $push: {
        reservations: {
            sessionId: sessionId
          , seats: seats
          , price: session.price
          , total: session.price * seats.length
        }
      }
      , $inc: { total: session.price * seats.length }
      , $set: { modifiedOn: new Date() }
  })

// Failed to add reservation to cart
if(result.nModified == 0) ...
// Successfully added reservation to cart
if(result.nModified == 1) ...


// release all reservations from the cart
var sessionId = 1;
var cartId = 1;

var seats = [[1, 5], [1, 6]];
var setSeatsSelection = {};

for(var i = 0; i < seats.length; i++) {
  setSeatsSelection['seats.' + seats[i][0] + '.' + seats[i][1]] = 0;
}

var sessions = db.getSisterDB("booking").sessions;
var result = sessions.update({
    _id: sessionId
  }, {
      $set: setSeatsSelection
    , $pull: { reservations: { _id: cartId } }
  });

// Failed to release reservation
if(result.nModified == 0) ...
// Succeded in releasing reservation
if(result.nModified == 1) ...



// create receipt
var cartId = 1;

var carts = db.getSisterDB("booking").carts;
var receipts = db.getSisterDB("booking").receipts;

var cart = carts.findOne({_id: cartId});

receipts.insert({
      createdOn: new Date()
    , reservations: cart.reservations
    , total: cart.total
  });

//  Commit session reservations

var cartId = 1;

var sessions = db.getSisterDB("booking").sessions;
  session.update({
      'reservations._id': cartId
    }, {
      $pull: { reservations: { _id: id } }
    }, false, true);
