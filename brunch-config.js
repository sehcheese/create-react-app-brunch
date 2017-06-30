module.exports = {
  files: {
	  javascripts: {
      joinTo: {
        'vendor.js': /^(?!src)/,
      },
		entryPoints: {
			'src/index.js': {
          'app.js': /^src\//
        },
		  }
	  },
    stylesheets: {joinTo: 'app.css'}
	},
  
  modules: {
		autoRequire: {
		  'app.js': ['src/index.js']
		}
	},
  
  conventions: {
		assets: [/public\//]
	},
  
  paths: {
		'public': 'build',
		watched: ['src', 'public']
	},
  
  plugins: {
    babel: {presets: ['react', 'latest']},
    postcss: {
      modules: true,
      processors: [
        require('autoprefixer')(['last 8 versions'])
      ]
    },
    assetsmanager: {
      copyTo: {
        '/': ['src/logo.svg']
      }
    },
  },
  
  notifications: false
}
