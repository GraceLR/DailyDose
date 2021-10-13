

const makeCase = function(input, style) {
    let temp = input;
    const camelCase = function(input) {
        let copy = '';
        for (var i = 0; i < input.length; i++) {
            if (input[i] === ' ') {
                copy += input[i + 1].toUpperCase();
                input = input.replace(input[i + 1], '');
            } else {
                copy += input[i];
            }
        }
        temp = copy;
    };
    
    const pascalCase = function(input) {
        let copy = '';
        for (var i = 0; i < input.length; i++) {
            if (input[i] === ' ') {
                copy += input[i + 1].toUpperCase();
                input = input.replace(input[i + 1], '');
            } else {
                copy += input[i];
            }
        }
        temp = copy.replace(copy[0], copy[0].toUpperCase());
    };
    
    const snakeCase = function(input) {
        let copy = '';
        for (var i = 0; i < input.length; i++) {
            if (input[i] === ' ') {
                copy += '_';
            } else {
                copy += input[i];
            }
        }
        temp = copy;
    };
    
    const kebabCase = function(input) {
        let copy = '';
        for (var i = 0; i < input.length; i++) {
            if (input[i] === ' ') {
                copy += '-';
            } else {
                copy += input[i];
            }
        }
        temp = copy;
    };
    
    const titleCase = function(input) {
        let copy = '';
        for (var i = 0; i < input.length; i++) {
            if (input[i] === ' ') {
                copy += ' ' + input[i + 1].toUpperCase();
                input = input.replace(input[i + 1], '');
            } else {
                copy += input[i].toLowerCase();
            }
        }
        temp = copy.replace(copy[0], copy[0].toUpperCase());
    };
    
    const vowelCase = function(input) {
        let copy = '';
        for (var i = 0; i < input.length; i++) {
            if (
                input[i] === 'a' || 
                input[i] === 'e' || 
                input[i] === 'i' || 
                input[i] === 'o' || 
                input[i] === 'u'
                ) {
                copy += input[i].toUpperCase();
            } else {
                copy += input[i].toLowerCase();
            }
        }
        temp = copy;
    };
    
    const consonantCase = function(input) {
        let copy = '';
        for (var i = 0; i < input.length; i++) {
            if (
                input[i] === 'a' || 
                input[i] === 'e' || 
                input[i] === 'i' || 
                input[i] === 'o' || 
                input[i] === 'u'
                ) {
                copy += input[i].toLowerCase();
            } else {
                copy += input[i].toUpperCase();
            }
        }
        temp = copy;
    };
    
    const upperCase = function(input) {
        temp = input.toUpperCase();
    };
    const lowerCase = function(input) {
        temp = input.toLowerCase();
    };

    if (!Array.isArray(style)) {
        style = Array(style);
    }

    for (var i = 0; i < style.length; i++) {
        switch (style[i]) {
            case 'upper':
                upperCase(temp);
                break;
            case 'lower':
                lowerCase(temp);
                break;
            case 'camel':
                camelCase(temp);
                break;
            case 'pascal':
                pascalCase(temp);
                break;
            case 'snake':
                snakeCase(temp);
                break;
            case 'kebab':
                kebabCase(temp);
                break;
            case 'title':
                titleCase(temp);
                break;
            case 'vowel':
                vowelCase(temp);
                break;
            case 'consonant':
                consonantCase(temp);
                break;
        }
    }
    return temp;
  }
  
  console.log(makeCase("this is a string", "camel"));
  console.log(makeCase("this is a string", "pascal"));
  console.log(makeCase("this is a string", "snake"));
  console.log(makeCase("this is a string", "kebab"));
  console.log(makeCase("this is a string", "title"));
  console.log(makeCase("this is a string", "vowel"));
  console.log(makeCase("this is a string", "consonant"));
  console.log(makeCase("this is a string", ["upper", "snake"]));