#!/usr/bin/env node

var entrokitty = require('./index');

process.stdout.write(entrokitty(process.argv[2]) + '\n');
