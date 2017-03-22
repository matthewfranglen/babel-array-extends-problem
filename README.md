Babel Array Extends Problem
===========================

This demonstrates a problem that I found when running jest. This project has
allowed me to narrow it down to the use of babel.

Unfortunately it seems you cannot extend Array.
If you do so then any constructed object of the subtype will be an Array instead.

This project has example code and tests which demonstrate the problem.
The `npm start` and `npm test` scripts are available.

Known Issue
-----------

This is a known issue. http://babeljs.io/docs/usage/caveats/#classes

They are trying to fix it. https://github.com/babel/babel/issues/4480
