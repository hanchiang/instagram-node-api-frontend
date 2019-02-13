module.exports = {
	"extends": "airbnb",
	"parser": "babel-eslint",
	"env": {	
		"es6": true,
		"browser": true,
		"jest": true
	},
	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		}
	},
	"rules": {
		"react/jsx-filename-extension": 0,
		"comma-dangle": 0,
		"arrow-parens": 1,
		"import/prefer-default-export": 0,
		"react/destructuring-assignment": 0
	}
};