var gulp      = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    rename    = require('gulp-rename'),
    del       = require('del');

// object literal for svgSprite
var config = {
	mode: {
		css: {
			sprite: 'sprite.svg',
			render: {
				css: {
					template: './gulp/template/sprite.css'
				}
			}
		}
	}
}

gulp.task('deleteOldSprite', function() {
	return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

gulp.task('createSprite', ['deleteOldSprite'], function() {
	return gulp.src('./app/assets/images/icons/**/*.svg')
			   .pipe(svgSprite(config))
			   .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('copySpriteGraphic', ['createSprite'], function() {
	return gulp.src('./app/temp/sprite/css/**/*.svg')
			   .pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('copySpriteCSS', ['createSprite'], function() {
	return gulp.src('./app/temp/sprite/css/*.css')
			   .pipe(rename('_sprite.css'))
			   .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('deleteTempDIR', ['copySpriteGraphic', 'copySpriteCSS'], function(){
	return del('./app/temp/sprite');
});

gulp.task('icons', ['deleteOldSprite', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'deleteTempDIR']);