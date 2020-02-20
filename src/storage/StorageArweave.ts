import Arweave from 'arweave/web' 
// I have tried mutliple ways of supporting arweave-js in ReactNative@
// - using browserified node standard library Crypto - arweavejs complains of Promise expected
// - installing webview and using window.crypto.subtle- it was a lot of trouble even getting webview to work, dead-end
// - best option might be to rewrite arweavejs library itself to usesome standard crypto library - this sounds like a project in itself
// tl;dr this is too much work, I am dropping mobile support for now, will circle back at a later date

const arweave = Arweave.init({
	host: 'arweave.net',// Hostname or IP address for a Arweave host
	port: 443,          // Port
	protocol: 'https',  // Network protocol http or https
	timeout: 20000,     // Network request timeouts in milliseconds
	logging: false,     // Enable network request logging
});

const appName = "hotdog-sample-browser-test3"
const appVersion = "0.0.1"
console.log("USING App-Name: "+ appName )
console.log("USING App-Version: "+ appVersion)

export const getChildInodes = (txid:string) => {
	let i1 = {}//new Inode()
	let i2 = {}//new Inode()
	return [i1,i2]
}



export const doArweave = async () => {



	// Create Transaction & fill it with data and tags
	let tx = await arweave.createTransaction({
		data: '0'
	}, wallet)
	
	var address = await arweave.wallets.jwkToAddress(wallet)
	console.log('address:'+address)
	var balance = await arweave.wallets.getBalance(address)
	console.log('balance:'+arweave.ar.winstonToAr(balance))

	tx.addTag('super-private', 'what you looking at')



	console.log('cost:'+ arweave.ar.winstonToAr(tx.reward))
	
	await arweave.transactions.sign(tx, wallet);
	var txid = tx.id
	console.log('txid:'+txid)
	console.log(tx)

	var timeStart = Date.now() 
	let response = await arweave.transactions.post(tx)
	
	console.log(response);

	// HTTP response codes (200 - ok, 400 - invalid transaction, 500 - error)
	if( response.status >= 400){
		throw new Error(JSON.stringify(response))
	}
	const timer = setInterval (async() => {
		let response = await arweave.transactions.getStatus(txid)
		const codes = {
			200: 'Permanently saved 😄',
			202: 'Pending ⛏',
			404: 'Not found (or not yet propagated, this can take a few seconds)',
			400: 'Invalid transaction',
			410: 'Transaction failed',
			500: 'Unknown error'
		}
		let msg = "Permaweb save status: " + codes[response.status]
		
		console.log((new Date())+'::'+msg)
		if(response.status==200){ 
			clearInterval(timer) 
			let duration = (Date.now() - timeStart)/(1000*60) //minutes
			console.log(msg+' in '+duration+' minutes')
		}

	}, 10000);

}