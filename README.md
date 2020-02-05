# Hotdog Sample Browser 

An interactive dApp that uses the arweave permaweb as storage for short, high quality audio samples.

# Project Objectives

## Allow users to:
- upload short audio samples to the permaweb
- browse files in a FileDialog / File Explorer type of view
- preview previously uploaded samples (perhaps other people's uploads too)
- as well as giving an audio preview and statistical data, it will give graphical representations of the audio sample:
	- graphical representation in the time domain
	- and graphical representation in the frequency domain - which I believe will be a novel & useful feature currently unavailable in a software audio sample browser

## Allow developers to:	
- in addition I intend for a key FileDialog component to be written in a reusable way so as to be included by any permaweb dApp developer
	- this will be written in React Native, but will be structured in such a way that it can be included in any JS project
	- it will allow developers to easily add permaweb file upload and search functionality to their dApp - for any file/data type
	- it will deliver this in a familiar FileDialog UI style to users.
	- in file chooser mode it will return the arweave address of the chosen file for further use in the calling dApp
	- in file upload mode it will allow for naming and other tags on each uploaded file.

### Dependencies
- ~~This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).~~ 
this has now changed to [Expo CLI](https://github.com/expo/expo-cli).
- This project utilizes the Arweave Permaweb for backend storage and retrieval [Arweave Team](https://github.com/ArweaveTeam)
