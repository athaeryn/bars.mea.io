var gulp = require("gulp"),
    gutil = require("gulp-util"),
    browserify = require("browserify"),
    six2five = require("6to5ify"),
    source = require("vinyl-source-stream"),
    paths;

paths = {
  browserify: {
    entry: "./src/js/bars.js",
    destDir: "./build/js/",
    destName: "bars.js"
  },
  copy: [
    ["./src/index.html", "./build"],
    ["./src/favicon.ico", "./build"],
    ["./bars.css", "./build/css"]
  ],
  watch: [
    "./index.html",
    "./src/**/*.js"
  ]
};


gulp.task("copy", function() {
  paths.copy.forEach(function(paths) {
    var file = paths[0],
        dest = paths[1];

    gulp.src(file)
      .pipe(gulp.dest(dest));
  });
});


gulp.task("browserify", function() {
  var b = browserify(paths.browserify.entry)
    .transform(six2five);

  b.on(
    "error",
    function logBrowserifyError(error) {
      gutil.log("Browserify error:", error.message);
    }
  );

  return b.bundle()
    .pipe(source(paths.browserify.destName))
    .pipe(gulp.dest(paths.browserify.destDir));
});


gulp.task("default", ["copy", "browserify"]);


gulp.task("watch", ["default"], function() {
  return gulp.watch(paths.watch, ["default"]);
});
