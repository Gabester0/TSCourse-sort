To configure TS manually we want to create a tsconfig.json file.

_Remember: when we want to compile our ts into valid javascript we run in the terminal `tsc filename` and the ts compiler will convert the ts file into a valid javascript file the the same name (ex: index.ts compiled will create a index.js file)_

To get started we run `tsc --init` (tells the typescript compiler to initialize a typescript project by creating a tsconfig.json file)

When we look in the tsconfig.json file we will find a range of values in a json object. Many of the values are commented out. We can uncomment and modify the values to customize and configure our project.

We start with uncommenting the `rootDir` value and assigning it a value of `./src`. Basically telling the typescript compiler (tsc) to look for files in the `src` folder to compile to javascript

Then we uncomment the `outDir` value and assign it a value of `./build`. Telling the typescript compiler to put the compiled files in the `build` directory.

Now we can run `tsc` when we want to compile.  
Or, even better, `tsc --w` to watch all file changes
