var gulp = require('gulp'),
    data = require('gulp-data'),
    exif = require('gulp-exif'),
    extend = require('gulp-extend');

function gpsDecimal(direction, degrees, minutes, seconds) {
    var d = degrees + minutes / 60 + seconds / (60 * 60);
    return (direction === 'S' || direction === 'W') ? d *= -1 : d;
}

gulp.task('exif', function () {
    return gulp.src('./photos/*.jpg')
        .pipe(exif())
        .pipe(data(function (file) {
            var filename = file.path.substring(file.path.lastIndexOf('/') + 1),
                exif = file.exif.gps,
                calcLat = gpsDecimal.bind(null, exif.GPSLatitudeRef),
                calcLng = gpsDecimal.bind(null, exif.GPSLongitudeRef),
                data = {};
            data[filename] = {
                lat: calcLat.apply(null, exif.GPSLatitude),
                lng: calcLng.apply(null, exif.GPSLongitude)
            };
            file.contents = new Buffer(JSON.stringify(data));
        }))
        .pipe(extend('gps.json', true, '    '))
        .pipe(gulp.dest('./'));
});

gulp.task('exifshort', function () {
    return gulp.src('./photos/*.jpg')
        .pipe(exif())
        .pipe(data(function (file) {
            var filename = file.path.substring(file.path.lastIndexOf('/') + 1),
                data = {};
            data[filename] = file.exif.gps;
            file.contents = new Buffer(JSON.stringify(data));
        }))
        .pipe(extend('gpsshort.json', true, '    '))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['exif']);
