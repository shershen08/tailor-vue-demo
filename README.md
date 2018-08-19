# Tailor + VueJS SPA demo

Ispired by [React implementation](https://github.com/tsnolan23/tailor-react-spa)

This repository is an example application using the [Mosaic frontend microservices architecture](https://mosaic9.org).

It makes use of [Tailor](https://github.com/zalando/tailor) only, so it is a pretty basic example.

Since the idea is that a separate team would be in charge of each of the fragments, there is some duplicate code within each of the fragments such as the Webpack configuration.

## How it works

Tailor is a layout service. It is able to parse HTML templates and replace `<fragment>` tags for their respective bundles.

Tailor also injects a RequireJS bundle to your template so you're able to use Webpack Externals to share dependencies across fragments (such as `vue`).

## Fragments

Fragments are small VueJS applications. 

They might be VueJS applications, or any other implementation.

Fragments do not need to necessarily render something. 

This app consists basically in a couple of fragments:

 - fragments/dashboard
 - fragments/header

Each fragment contains it's own `webpack.config.js` that specifies how to build it.

## Sharing dependencies with `fragment-common`

TODO

## `fragments/*`

All the other fragments are parts of this application.

Those shared dependencies are listed as externals in their respective webpack configurations.

All of them are built using `amd` as a `libraryTarget` in their Webpack configuration files.

The dependency management is handled with RequireJS on runtime.

## Setting up

1. Clone this repository
1. Install all of the base dependencies with `npm install`
1. Install all of the fragment dependencies with `npm run install-fragment-dependencies`
1. Build the fragments with `npm run build-fragments`

## Running

1. In one terminal, start the fragments servers with `npm run start-fragments` - then you'll have header anf dashboard running on 8090 and 8091 localhost ports respectively.
1. In another terminal, start the Tailor service with `npm start`
1. Navigate to `http://localhost:8080`

## Running in development mode

1. In one terminal, start the fragments watchers with `npm run watch-fragments`
1. In another terminal, start the fragments servers with `npm run start-fragments`
1. In another terminal, start the Tailor service with `npm start`
1. Navigate to `http://localhost:8080`

