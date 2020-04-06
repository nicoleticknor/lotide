# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @nicoleticknor/lotide`

**Require it:**

`const _ = require('@nicoleticknor/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: used with eqArrays, alternative to chai's assertDeepEqual
* `assertEqual(...)`: alternative to assertEqual
* `eqArrays(...)`: alternative to chai's assertDeepEqual, for arrays
* `head(...)`: alternative to lodash's head function
* `middle(...)`: alternative to lodash's middle function
* `tail(...)`: alternative to lodash's tail function