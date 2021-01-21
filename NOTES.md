To configure TS manually we want to create a tsconfig.json file.

_Remember: when we want to compile our ts into valid javascript we run in the terminal `tsc filename` and the ts compiler will convert the ts file into a valid javascript file the the same name (ex: index.ts compiled will create a index.js file)_

To get started we run `tsc --init` (tells the typescript compiler to initialize a typescript project by creating a tsconfig.json file)

When we look in the tsconfig.json file we will find a range of values in a json object. Many of the values are commented out. We can uncomment and modify the values to customize and configure our project.

We start with uncommenting the `rootDir` value and assigning it a value of `./src`. Basically telling the typescript compiler (tsc) to look for files in the `src` folder to compile to javascript

Then we uncomment the `outDir` value and assign it a value of `./build`. Telling the typescript compiler to put the compiled files in the `build` directory.

Now we can run `tsc` when we want to compile.  
Or, even better, `tsc -w` to watch all the files inside the `rootDir` (src) folder. Now the compiler will recompile our code on save.

This is good, but now to run the code we need to open a fresh terminal and enter `node build/index.js` every time we want to run our code.

To automate the running of our project we are going to add a package.json by running `npm init -y`.

Now we are going to add nodemon (to rerun the node command we give it every time a file changes inside our project. It will run the compiled code) and concurrently (will help us run multiple scripts at the same time. Specifically we are going to run a script to start up the TS compiler a script to have nodemon run that code). We add these with `npm install nodemon concurrently`

Now to use these we are going to add

```
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
```

We define 2 scripts, `start:build` and `start:run`, and then we tell concurrently to have npm simultaneously run all scripts that begin with `start:` when we run the command `start`.

I couldn't get this to work so I tried:
`"start": "npm run \"start:build\" & \"start:run\""`
This works

Super call: NumbersCollection.ts
// The super call calls the constructor function of
// the parent class. We are extending the parent class
// (thus relying on inheritance from the parent)
// so if there is important functionality that has to be
// instantiated by calling the constructor of the original
// class we will call super to run the parent classes constructor

Abstract Class:

--Can't be used to create an object directly
--Only can be used as a parent classs
--Can contain real implementation for some methods
--The implemennted methods can refer to other methods that don't actually exist yet (we still have to provide names and types for the not-yet-implemented methods)
--Can make child classes promise to implement some other method

Intervaces VS Inheritance/Abstract Classes

Interfaces:
--Sets up a contract between different classes
--Use when we have very different objects that we want to work to gether
--Promotes loose Coupling
Inheritance/Abstract Classes:
--Sets up a contract between different classes
--Use when we are trying to build up a definition of an Object
--Strongly couples classes together

In general we always want to reach for Interfaces first, UNLESS
we have some different objects that are very closely related in which instance it might be better to think about inheritance and abstract classes.
