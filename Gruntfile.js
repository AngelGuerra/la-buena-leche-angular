module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            app: {
                files: {
                    './public/javascripts/min-safe/app.js': ['./js/app.js'],
                    './public/javascripts/min-safe/js/config.js': ['./js/config/config.js'],
                    './public/javascripts/min-safe/js/routes.js': ['./js/config/routes.js'],
                    './public/javascripts/min-safe/js/run.js': ['./js/config/run.js'],
                    './public/javascripts/min-safe/js/values.js': ['./js/config/values.js'],
                    './public/javascripts/min-safe/js/index_controller.js': ['./js/controllers/index.js'],
                    './public/javascripts/min-safe/js/header_controller.js': ['./js/controllers/header.js'],
                    './public/javascripts/min-safe/js/footer_controller.js': ['./js/controllers/footer.js'],
                    './public/javascripts/min-safe/js/actividades_calendario_index_controller.js': ['./js/controllers/actividades/calendario/index.js'],
                    './public/javascripts/min-safe/js/actividades_divulgativas_index_controller.js': ['./js/controllers/actividades/divulgativas/index.js'],
                    './public/javascripts/min-safe/js/asociate_index_controller.js': ['./js/controllers/asociate/index.js'],
                    './public/javascripts/min-safe/js/contacto_index_controller.js': ['./js/controllers/contacto/index.js'],
                    './public/javascripts/min-safe/js/encuentros_index_controller.js': ['./js/controllers/encuentros/index.js'],
                    './public/javascripts/min-safe/js/material_prestamo_de_libros_index_controller.js': ['./js/controllers/material/prestamo-de-libros/index.js'],
                    './public/javascripts/min-safe/js/material_prestamo_de_libros_book_details_controller.js': ['./js/controllers/material/prestamo-de-libros/book-details.js'],
                    './public/javascripts/min-safe/js/quienes_somos_index_controller.js': ['./js/controllers/quienes-somos/index.js'],
                    './public/javascripts/min-safe/js/cookies_bar_directive.js': ['./js/directives/cookies-bar-directive.js'],
                    './public/javascripts/min-safe/js/actividades_calendario_factory.js': ['./js/factories/actividades/calendario-factory.js'],
                    './public/javascripts/min-safe/js/actividades_divulgativas_factory.js': ['./js/factories/actividades/divulgativas-factory.js'],
                    './public/javascripts/min-safe/js/material_prestamo_de_libros_factory.js': ['./js/factories/material/prestamo-de-libros-factory.js']
                }
            }
        },
        uglify: {
            app: {
                options: {
                    sourceMap: true
                },
                src: ['./public/javascripts/min-safe/app.js', './public/javascripts/min-safe/js/*.js'],
                dest: './public/javascripts/app.min.js'
            }
        },
        less: {
            app: {
                options: {
                    paths: ['css']
                },
                files: {
                    'css/app.css': 'css/la-buena-leche.less'
                }
            }
        },
        cssmin: {
            app: {
                options: {
                    sourceMap: true
                },
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'public/stylesheets',
                    ext: '.min.css'
                }]
            }
        },
        realFavicon: {
            favicons: {
                src: 'images/resources/header/bebe.png',
                dest: 'public/images/favicons',
                options: {
                    iconsPath: 'public/images/favicons',
                    html: [ 'index.html' ],
                    design: {
                        ios: {
                            pictureAspect: 'backgroundAndMargin',
                            backgroundColor: '#993366',
                            margin: '14%',
                            assets: {
                                ios6AndPriorIcons: true,
                                ios7AndLaterIcons: true,
                                precomposedIcons: true,
                                declareOnlyDefaultIcon: true
                            },
                            appName: 'La Buena Leche'
                        },
                        desktopBrowser: {},
                        windows: {
                            pictureAspect: 'whiteSilhouette',
                            backgroundColor: '#603cba',
                            onConflict: 'override',
                            assets: {
                                windows80Ie10Tile: true,
                                windows10Ie11EdgeTiles: {
                                    small: true,
                                    medium: true,
                                    big: true,
                                    rectangle: true
                                }
                            },
                            appName: 'La Buena Leche'
                        },
                        androidChrome: {
                            pictureAspect: 'shadow',
                            themeColor: '#993366',
                            manifest: {
                                name: 'La Buena Leche',
                                display: 'standalone',
                                orientation: 'notSet',
                                onConflict: 'override',
                                declared: true
                            },
                            assets: {
                                legacyIcon: true,
                                lowResolutionIcons: false
                            }
                        },
                        safariPinnedTab: {
                            pictureAspect: 'silhouette',
                            themeColor: '#993366'
                        }
                    },
                    settings: {
                        compression: 2,
                        scalingAlgorithm: 'Mitchell',
                        errorOnImageTooSmall: false
                    },
                    versioning: {
                        paramName: 'rel',
                        paramValue: '1487881974'
                    }
                }
            }
        },
        imagemin: {
            app: {
                files: [{
                    expand: true,
                    cwd: 'images/production',
                    src: ['**/*.{png,jpg,gif,ico}'],
                    dest: 'public/images'
                }]
            }
        },
        cachebreaker: {
            dev: {
                options: {
                    match: ['app.min.js', 'app.min.css']
                },
                files: {
                    src: ['index.html']
                }
            }
        },
        clean: {
            all: {
                src: ['public/javascripts/min-safe', 'css/app.css']
            },
            js: {
                src: ['public/javascripts/min-safe']
            },
            css: {
                src: ['css/app.css']
            }
        },
        watch: {
            compileJs: {
                files: ['js/**/*.js'],
                tasks: ['newer:ngAnnotate:app', 'newer:uglify:app', 'clean:js', 'cachebreaker:dev']
            },
            compileCss: {
                files: ['css/*.less'],
                tasks: ['newer:less:app', 'newer:cssmin:app', 'clean:css', 'cachebreaker:dev']
            }
        }
    });
    
    // Register Grunt Tasks
    grunt.registerTask('default', ['newer:ngAnnotate:app', 'newer:uglify:app', 'newer:less:app', 'newer:cssmin:app', 'newer:imagemin:app', 'cachebreaker:dev', 'clean:all']);
    grunt.registerTask('dev', ['newer:ngAnnotate:app', 'newer:uglify:app', 'newer:less:app', 'newer:cssmin:app', 'newer:imagemin:app', 'cachebreaker:dev', 'clean:all', 'watch']);
};