(function (global) {
    System.config({
        paths: {
            'npm:': '/node_modules/'
        },

        map: {
            // maps plain `app` module to `app` package
            main: 'main.js',
            bootstrap: 'src/bootstrap.js',

            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/platform-webworker': 'npm:@angular/platform-webworker/bundles/platform-webworker.umd.js',
            '@angular/platform-webworker-dynamic': 'npm:@angular/platform-webworker-dynamic/bundles/platform-webworker-dynamic.umd.js',

            // other libraries
            'rxjs': 'npm:rxjs',
            'tslib': 'npm:tslib/tslib.js'
        },

        packages: {
            'app': {
                defaultExtension: 'js',
                meta: {
                    '': {
                        format: 'cjs'
                    }
                }
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);
