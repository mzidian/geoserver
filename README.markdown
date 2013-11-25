Geo Server
=============

Returns geo data - currently only Metropolitan Statistical Area for Lat/Lng points.

Example Usage
-------------

➜  ~  curl -XGET http://localhost:6000/msa\?lat\=37.7833\&lng\=-122.4167
{
  "CSAFP": "488",
  "CBSAFP": "41860",
  "GEOID": "41860",
  "NAME": "San Francisco-Oakland-Fremont, CA",
  "NAMELSAD": "San Francisco-Oakland-Fremont, CA Metro Area",
  "LSAD": "M1",
  "MEMI": "1",
  "MTFCC": "G3110",
  "ALAND": 6402328420,
  "AWATER": 2471342733,
  "INTPTLAT": "+37.7737185",
  "INTPTLON": "-122.2744317"
}%     

