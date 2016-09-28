import gulp from 'gulp';
import project from '../aurelia.json';

export default function faFonts() {
  return gulp.src(`${project.paths.fa}/fonts/*`)
    .pipe(gulp.dest(project.paths.faFontsOutput));
};
