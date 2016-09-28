import gulp from 'gulp';
import changedInPlace from 'gulp-changed-in-place';
import project from '../aurelia.json';
import {build} from 'aurelia-cli';

export default function faCss() {
  return gulp.src(`${project.paths.fa}/css/*.min.css`)
    .pipe(changedInPlace({firstPass:true}))
    /* this ensures that our 'require-from' path
     will be simply './font-awesome.min.css' */
    .pipe(gulp.dest(project.paths.faCssOutput))
    //.pipe(gulp.src(`${project.paths.faCssOutput}/font-awesome.min.css`))
    .pipe(build.bundle());
};
