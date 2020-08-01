import { Base64 } from 'js-base64';
//var crypto = require('crypto')
/**
 * Native modules (e.g. all crypto) do not work with Expo.
 */
import * as Crypto from 'expo-crypto'; //lame crypto library from Expo, hash only
import { CryptoEncoding } from 'expo-crypto';



export interface IJwk {
	kty: string;
	e: string;
	n: string;
	d?: string;
	p?: string;
	q?: string;
	dp?: string;
	dq?: string;
	qi?: string;
}

/**
 * Run-time check to see if the object seems like a JWK
 * ref: [https://tools.ietf.org/html/rfc7518#section-6.3]
 * @param obj to check
 */
export const isInstanceofJwkInterface = (obj: object):boolean => {
	let result = true;
	['kty', 'n', 'e', 'd', 'p', 'q', 'dp', 'dq', 'qi'].forEach(keyname => {
		if( obj.hasOwnProperty(keyname) === false){
			result = false
		}
	})
	let typed = obj as IJwk
	if( typed.kty !== "RSA " || typed.e !== "AQAB" ){ //we could probably go further here
		return false
	}
	return result
}



/**
 * From the arweave docs: [https://docs.arweave.org/developers/server/http-api#key-format]
 * "The n value is the public modulus and is used as the transaction owner field, and the 
 * address of a wallet is a Base64 URL encoded SHA-256 hash of the n value from the JWK."
 */
export const getJwkAddress = async (jwk: IJwk):Promise<string> => {
	let buf = b64UrlToString(jwk.n) //convert public modulus

	let hash = await Crypto.digestStringAsync(
		Crypto.CryptoDigestAlgorithm.SHA256,
		buf,
		{ encoding: CryptoEncoding.HEX }
	)

	return stringTob64Url(hash)
}


const stringTob64Url = (hash:string):string => {
	let _base64 = Base64.btoa(hash)
	let _b64Url = b64UrlEncode(_base64)

	return _b64Url
}
const b64UrlToString = (b64UrlString: string):string => {
	let _base64 = b64UrlDecode(b64UrlString)
	let _bytes = Base64.atob(_base64)

  return _bytes
}
// export const b64UrlToBuffer = (b64UrlString: string):Uint8Array => {
// 	let _base64 = b64UrlDecode(b64UrlString)
// 	let _bytes = Base64.atob(_base64)
// 	let _ui8a = new Uint8Array( str2ab(_bytes) )

//   return _ui8a
//}
const str2ab = (str:string):ArrayBuffer => {
	var buf = new ArrayBuffer(str.length ); // 1 bytes for each char
	var bufView = new Uint8Array(buf);
	for (var i = 0, strLen = str.length; i < strLen; i++) {
		bufView[i] = str.charCodeAt(i);
	}
	return buf;
}

/**
 * Source: [https://github.com/ArweaveTeam/arweave-js/blob/master/src/common/lib/utils.ts]
 */
function b64UrlEncode(b64UrlString: string): string {
  return b64UrlString
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/\=/g, "");
}
/**
 * Source: [https://github.com/ArweaveTeam/arweave-js/blob/master/src/common/lib/utils.ts]
 */
function b64UrlDecode(b64UrlString: string): string {
  b64UrlString = b64UrlString.replace(/\-/g, "+").replace(/\_/g, "/");
  let padding;
  b64UrlString.length % 4 == 0
    ? (padding = 0)
    : (padding = 4 - (b64UrlString.length % 4));
  return b64UrlString.concat("=".repeat(padding));
}
