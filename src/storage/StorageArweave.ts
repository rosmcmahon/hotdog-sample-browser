// import Arweave from 'arweave/web' 
// import { JWKInterface } from 'arweave/web/lib/wallet';
// // I have tried mutliple ways of supporting arweave-js in ReactNative@
// // - using browserified node standard library Crypto - arweavejs complains of Promise expected
// // - installing webview and using window.crypto.subtle- it was a lot of trouble even getting webview to work, dead-end
// // - best option might be to rewrite arweavejs library itself to usesome standard crypto library - this sounds like a project in itself
// // tl;dr this is too much work, I am dropping mobile support for now, will circle back at a later date

// const arweave = Arweave.init({
// 	host: 'arweave.net',// Hostname or IP address for a Arweave host
// 	port: 443,          // Port
// 	protocol: 'https',  // Network protocol http or https
// 	timeout: 20000,     // Network request timeouts in milliseconds
// 	logging: false,     // Enable network request logging
// });

import {  } from 'axios';


const appName = "hotdog-samples-test1"
const appVersion = "0.0.1"
console.log("USING App-Name: "+ appName )
console.log("USING App-Version: "+ appVersion)
let address = ""


// export const getChildInodes = async (parentId: string, jwk: JWKInterface | {} ) => {
// 	jwk !== {} ? address = await arweave.wallets.jwkToAddress(jwk as JWKInterface) : address = ""



// 	let i1 = {}//new Inode()
// 	let i2 = {}//new Inode()
// 	return [i1,i2]
// }

export const getChildInodesDemo = async () => {
	const gqlQuery = `{
		parent: transactions(from: "v2XXwq_FvVqH2KR4p_x8H-SQ7rDwZBbykSv-59__Avc", tags: [
					{name: "App-Name", value: "${appName}"}, {name: "Inode-Parent", value: "0"}, {name: "Inode-Name", value: "Demo Samples"}
				]) {
			id
			tags { name, value }
			children: linkedFromTransactions(byForeignTag: "Inode-Parent") {
				id
				tags { name, value }
			}
		}
	}`
}

