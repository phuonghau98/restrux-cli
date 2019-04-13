restrux
=======

An awesome CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/restrux.svg)](https://npmjs.org/package/restrux)
[![CircleCI](https://circleci.com/gh/phuonghau98/restrux/tree/master.svg?style=shield)](https://circleci.com/gh/phuonghau98/restrux/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/phuonghau98/restrux?branch=master&svg=true)](https://ci.appveyor.com/project/phuonghau98/restrux/branch/master)
[![Codecov](https://codecov.io/gh/phuonghau98/restrux/branch/master/graph/badge.svg)](https://codecov.io/gh/phuonghau98/restrux)
[![Downloads/week](https://img.shields.io/npm/dw/restrux.svg)](https://npmjs.org/package/restrux)
[![License](https://img.shields.io/npm/l/restrux.svg)](https://github.com/phuonghau98/restrux/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g restrux
$ restrux COMMAND
running command...
$ restrux (-v|--version|version)
restrux/0.0.1 linux-x64 node-v11.13.0
$ restrux --help [COMMAND]
USAGE
  $ restrux COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`restrux hello [FILE]`](#restrux-hello-file)
* [`restrux help [COMMAND]`](#restrux-help-command)

## `restrux hello [FILE]`

describe the command here

```
USAGE
  $ restrux hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ restrux hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/phuonghau98/restrux/blob/v0.0.1/src/commands/hello.ts)_

## `restrux help [COMMAND]`

display help for restrux

```
USAGE
  $ restrux help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_
<!-- commandsstop -->
