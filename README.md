# Showing photo GPS location on Google Maps with gulp

[![Greenkeeper badge](https://badges.greenkeeper.io/omichelsen/exif-gps-to-json-example.svg)](https://greenkeeper.io/)

This is the example code for the article [Showing photo GPS location on Google Maps with gulp](http://ole.michelsen.dk/blog/showing-photo-gps-location-on-google-maps-with-gulp.html).

## Running the code

Clone this repository and run `npm install`.

You can then generate a `gps.json` file by running `gulp exif`. This will process the example image files in the `photos` folder.

If you want to view the Google Map you can start a local server (or the jQuery `.getJSON()` wont work): `php -S localhost:4321`

You should then be able to se the working example by opening http://localhost:4312.

### Additional

The code for the first part of the tutorial is available when running the gulp task: `gulp exifshort`, and will generate a `gpsshort.json` file.

## Licence
The MIT License (MIT)

Copyright (c) 2014 Ole Michelsen http://ole.michelsen.dk

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
