var express = require('express');
var _ = require('lodash');
var Terraformer = require('terraformer');
var RTree = require('terraformer-rtree');
//var RTree = require('terraformer/RTree');
//var GeoStore = require('terraformer-geostore');
var GeoStore2 = require('terraformer/GeoStore');
var Memory = require('./bower_components/Terraformer/dist/browser/Store/Memory');
var app = express();

app.get('/', function (req, res) {
  res.send("Usage: /msa?lat=(latitude)&lng=(longitude)");
});

var store = new GeoStore2.GeoStore({
  store: new Memory.Memory(),
  index: new RTree.RTree()
});

var msa = require('./msa-full.json');

msa.id = "MSA";

_.each(msa.features, function(v, k) {
  console.log(v);
  v.id = v.properties.GEOID;
  store.add(v);
});

//store.add(msa, function(err, resp) {
//  console.log("resp", resp);
  app.get('/msa', function(req, res) {
    var lat = req.query.lat;
    var lng = req.query.lng;
    if (!lat || !lng) {
      res.send("Usage: /msa?lat=(latitude)&lng=(longitude)");
    }
    var geojson = {"type": "Point", "coordinates": [lng, lat]};
    store.contains(geojson).then(function(result) {
          console.log(result);
          res.send((result && result[0] && result[0].properties) || {});
        });

  });

  port = process.env.PORT || 5000;
  console.log('Listen on ' + port);
  app.listen(port);


//  resp(null, function() {
//    port = process.env.PORT || 6000;
//    console.log('Listen on ' + port);
//    app.listen(port);
//  });
//});
