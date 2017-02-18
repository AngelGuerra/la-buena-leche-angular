module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            app: {
                files: {
                    './public/min-safe/app.js': ['./js/app.js'],
                    './public/min-safe/js/config.js': ['./js/config/config.js'],
                    './public/min-safe/js/routes.js': ['./js/config/routes.js'],
                    './public/min-safe/js/run.js': ['./js/config/run.js'],
                    './public/min-safe/js/values.js': ['./js/config/values.js'],
                    './public/min-safe/js/index_controller.js': ['./js/controllers/index.js'],
                    './public/min-safe/js/header_controller.js': ['./js/controllers/header.js'],
                    './public/min-safe/js/footer_controller.js': ['./js/controllers/footer.js'],
                    './public/min-safe/js/actividades_calendario_index_controller.js': ['./js/controllers/actividades/calendario/index.js'],
                    './public/min-safe/js/actividades_divulgativas_index_controller.js': ['./js/controllers/actividades/divulgativas/index.js'],
                    './public/min-safe/js/asociate_index_controller.js': ['./js/controllers/asociate/index.js'],
                    './public/min-safe/js/contacto_index_controller.js': ['./js/controllers/contacto/index.js'],
                    './public/min-safe/js/encuentros_index_controller.js': ['./js/controllers/encuentros/index.js'],
                    './public/min-safe/js/material_prestamo_de_libros_index_controller.js': ['./js/controllers/material/prestamo-de-libros/index.js'],
                    './public/min-safe/js/material_prestamo_de_libros_book_details_controller.js': ['./js/controllers/material/prestamo-de-libros/book-details.js'],
                    './public/min-safe/js/quienes_somos_index_controller.js': ['./js/controllers/quienes-somos/index.js'],
                    './public/min-safe/js/cookies_bar_directive.js': ['./js/directives/cookies-bar-directive.js'],
                    './public/min-safe/js/actividades_calendario_factory.js': ['./js/factories/actividades/calendario-factory.js'],
                    './public/min-safe/js/actividades_divulgativas_factory.js': ['./js/factories/actividades/divulgativas-factory.js'],
                    './public/min-safe/js/material_prestamo_de_libros_factory.js': ['./js/factories/material/prestamo-de-libros-factory.js']
                }
            }
        },
        uglify: {
            js: { //target
                src: ['./public/min-safe/app.js', './public/min-safe/js/*.js'],
                dest: './public/js/app.min.js'
            }
        }
    });

    //load grunt tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ng-annotate');

    //register grunt default task
    grunt.registerTask('default', ['ngAnnotate', 'uglify']);
};