# StyleGuidr [![Build Status](https://travis-ci.org/FullScreenShenanigans/StyleGuidr.svg?branch=master)](https://travis-ci.org/FullScreenShenanigans/StyleGuidr)

A generally comprehensive template for contributing to (or creating a) FullScreenShenanigans repository.

All repositories in the FullScreenShenanigans organization adhere to a set of guidelines ranging from coding practices to file structures. 
StyleGuidr provides a sample repository and class with definitions and tests as a clear example of these guidelines.

See the [https://github.com/FullScreenShenanigans/Documentation](Documentation repository) for code documentation.


## Build Process

StyleGuidr uses [Grunt](http://gruntjs.com/) to automate building, which requires [Node.js](http://node.js.org). 

Go to the root repository folder (containing this Getting Started guide) and run the following commands:

    npm install
    grunt
    
You may also have to manually install grunt first:

    npm install -g grunt grunt-cli

Source/StyleGuidr.ts, along all the other files in Source, will be compiled into a new Distribution folder in the root.


## File Structure

The general structure is as follows:

```
    /Source
        /References
            -{DistFile1}.ts
            -{DistFile2}.ts
        -{RepoName}.ts
        -{RepoName}.d.ts
    -.git
    -.travis.yml
    -Gruntfile.js
    -LICENSE.txt
    -package.json
    -README.md
    -tslint.json
```

* Put all source files in `/Source`. Do not add files to the root directory.

  * Put all references in `/Source/References`. For FullScreenShenanigans repositories, this should be their compiled `/Distribution` .ts file. 

* Your README.md should have the same title and summary as `package.json`, with an extended summary followed by the same Build Process section.

* Your `package.json` and `Gruntfile.js` should be the same as the ones here, though you may add to them if you absolutely need.

* If you're ever unsure on how to format something, see examples from other repositories.


## Source code structure

Within `/Source`, you should have (at least) two .ts files:

  * `{RepoName}.ts` *(such as `StyleGuidr.ts`)*

  * `{RepoName}.d.ts` *(such as `StyleGuidr.d.ts`)*

Both should wrap the entire file in a module declaration. `*.ts` files wrap in `module {RepoName}` while `*.d.ts` files wrap in `declare module {RepoName}`


### References

Put all `/// <reference />` includes at the top of your `{RepoName}.ts` file. The build system will process these, so you'll need to follow this format:

```javascript
// @echo '/// <reference path="{DistFile1}-X.Y.Z.ts" />'

// @ifdef INCLUDE_DEFINITIONS
/// <reference path="References/{DistFile1}-X.Y.Z.ts" />
/// <reference path="{RepoName}.d.ts" />
// @endif

// @include ../Source/{RepoName}.d.ts
```

The `{DistFile}` includes are necessary for all references, if you have any. Each is intentionally listed in two places, as is `{RepoName}`.


### Coding Guidelines

Write beautiful, concise code when possible.

Your code shouldn't stray far from the structure of the other repositories. In general:

* Do not make master branch builds fail. That includes tslint.

* Define interfaces in `.d.ts` files.

* Define classes in `.ts` files.

* If a repository is dedicated to a single class (e.g. `AudioPlayr`, `ChangeLinr`, etc.):

  * That class should implement an interface defined at the end of its `.d.ts` (e.g. `IAudioPlayr`, `IChangeLinr`).

  * Its constructor should take an interface defined just before the class interface in the `.d.ts` (e.g. `IAudioPlayrSettings`, `IChangeLinrSettings`).

### Comments

* Comment every function and member variable with JSDoc-style `/** ... */` comments.

* Comment large blocks of code within functions that aren't immediately apparent.

* Split sections of large classes with `/* ... */` markers. 

  * This should be done for "Simple gets" and "Simple sets" at the very least.

* Comments should be full English sentences without grammar or spelling errors. 


## Repository Guidelines

There are five types of repositories in the FullScreenShenanigans organization:

* **Module** - A class used by the other types of repositories, e.x.: [AudioPlayr](https://github.com/FullScreenShenanigans/AudioPlayr), [ChangeLinr](https://github.com/FullScreenShenanigans/ChangeLinr). These contain a single module with a class of the same name (e.g. `AudioPlayr.AudioPlayr`).

* **Core** - A module used as part of the GameStartr engine. These are [EightBittr](https://github.com/FullScreenShenanigans/EightBittr) and [GameStartr](https://github.com/FullScreenShenanigans/GameStartr).

* **Game** - A game built on the GameStartr engine. These are very large and contain a heck of a lot of code, and are [FullScreenMario](https://github.com/FullScreenShenanigans/FullScreenMario) and [FullScreenPokemon](https://github.com/FullScreenShenanigans/FullScreenPokemon) (so far).

* **Utility** - Some sort of utility to assist in making the games. A good example is [ImageReadr](https://github.com/FullScreenShenanigans/ImageReadr).

* **Metadocs** - Documentation regarding the organization itself, such as this project or [Status](https://github.com/FullScreenShenanigans/Status). 

Names of projects classified as Module, Core, or Utility must adhere to the following naming convention:
* 10 letters long
* Consist of a noun and verb
* End in a vowel then 'r'
* Be named as '---------r' with instances being referred to as '---------er'
  * e.g. `StyleGuider = new StyleGuidr(...);`


## Submission guidelines

Pull requests are always welcome!

That being said, it's a good idea to check a repository's issue tracker before working on code for it. You never know when your idea has already been implemented or proven wrong, or should be spun off into its own repository.

The general process is:

1. Post an issue in the repository's issue tracker.
  
  * Be as descriptive as possible!
  
  * That repository's owner should contact you within a day or two. If they don't, email them until they do.  

2. Fork & branch the repository to get a development environment with your own master and feature branch(es).

3. Fix the issue in your branch(es) and master.

4. Submit a pull request.

  * If rejected, fix complaints.
  
  * If accepted, celebrate and brag to your friends.
