
# Readme Generator 

In this project it will generate a readme with a series of questions that would ask the user via prompts in the terminal. These questions were pertaining to the 
readme file that they were trying to make with my code.  

When you are ask for the license of the project that you wanted to incldue with the readme there is a list of possible licenses that you can choose from
and add that badge to your read me. 

This is also a table of content feature that lest you jump  around the read me and go to the section of your choice. 

## Authors

- [@marshallrizzuto](https://github.com/Zoot83)


Website: https://github.com/Zoot83/Readme_generator
## Features

- Javascript
- Node 
- Inquirer 
- NPM
- FS
- Packages



## Demo

![Untitled_ Aug 4, 2022 4_45 PM](https://user-images.githubusercontent.com/105519029/182951413-3f56e63f-fa1a-4abc-a5ec-13ee0cbe3e55.gif)



## Usage/Examples

  In this snippet of code it shows how we use inquirer to prompt the questions that are being stored in an array called questions. If this is successful 
  the those answer are put into the file called readme. 

    function writeToFile(fileName, data) {
    generateReadMe = generateMarkdown(data);
    fs.writeFile(fileName,generateReadMe, (err) => 
    err ? console.log(err): console.log("Successfully created README.md")
    );
    
    }

    // TODO: Create a function to initialize app
    function init() {

    inquirer.prompt(questions)
    .then((answers) => {

    writeToFile('README.md',answers);     
    });
    }

  
