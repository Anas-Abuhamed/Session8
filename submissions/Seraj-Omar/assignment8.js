//Task 1

const editor = {
  title: 'my first blog',
  getUpperTitle() {
    return this.title.toUpperCase();
  }
};

const getTitle = editor.getUpperTitle;

// Write code that ensures getTitle() works as expected and logs "MY FIRST BLOG"
console.log(getTitle.bind(editor)())


//Task 2

const formHandler = {
  value: 'initial',
  onChange(newValue) {
    this.value = newValue;
  }
};

function simulateInputChange(callback) {
  callback('updated');
}

simulateInputChange(formHandler.onChange);

// ❓ Now log formHandler.value
//formHandler.value = initial
//when we pass onChange as callback it will try to set the value in the wrong object so it doesnt change the formHandler.value  
console.log(formHandler.value)

simulateInputChange((val) => formHandler.onChange(val));
console.log(formHandler.value)

//because arrow functions dont have their own 'this' it uses the 'this' from the outer scope which in this case is the 'this' inside onChange which refer to formHandler

//Task 3

const translator = {
  language: 'Arabic',
  getLanguage() {
    return `Current language: ${this.language}`;
  }
};

// ❓ Write a function logLanguageInfo(getter) that logs the language info correctly even if getLanguage is passed as an argument.
function logLanguageInfo(getter){
    console.log(getter.call(translator))
}
logLanguageInfo(translator.getLanguage);