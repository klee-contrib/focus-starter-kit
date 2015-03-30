## Conventions

Conf files [here](https://gist.github.com/pierr/9c35b3657c053d13d373)

### JS conventions

- Functions starts with a lower case
- Classes starts with an upper case
- Services function names
- When you have an anonymous function to write: `function(event){ console.log(event.target);}` you have to name them: `function buttonConfirmHandler(event){ console.log(event.target);}`

### Project conventions

#### Global conventions

- The documentation syntax for the project uses [JSDOD3](http://usejsdoc.org/), each function, property should be documented.
- Each file has a header describiung where it is use:`//filename: **contactView** use in the composite **contactCompositeView**`
- When a require is done, the variable should have a name corresponding  of the file `var serviceContact = require('services/module/serviceContact');`

#### Services

- Services, describe in a comment the controller url which is called.
- The services names use the same conventions as the "server" technology as in C# or Java.

#### Models

- The model is created only if there is a need: redefinition of metadatas, specific initialization function, processSum function, ...


#### Views

- Composite View, precise in the child view that it is a composite child.
