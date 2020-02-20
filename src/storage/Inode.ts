import * as Storage from './StorageArweave'

export class Inode {
	name: string
	id: string //make this generic later
	parentId: string
	type: string
	contentType: string
	isUploaded: InodeStatus = InodeStatus.false
	isUploadedMesssages: string
	tags: ITags
	constructor(txid: string, tags: ITags){
		this.id = txid
		this.tags = tags
		this.name = tags["name"]
	}
	// write(name: string, id: string, parentId: string, type: string, contentType: string, file?: any){
	// 	this.name = name
	// 	this.id = id
	// 	this.parentId = parentId
	// 	this.type = type
	// 	this.contentType = contentType
	// 	// deal with data
	// 	//let data = file ? file.data : "0"
	// 	//call arweave upload
	// }
	write(file?: any){
		let data = file ? file.data : "0"
		//call arweave functions
	}
	readData(){ 
		//call arweave functions getData
		return { data: 'dummy' }
	}
	readMeta(){ 
		//call arweave functions getData
		return { data: 'dummy' }
	}
	getChildInodes(){
		return Storage.getChildInodes(this.id)
	}
}

interface ITags {
	[key: string]: string
}

export enum InodeStatus {
	true,
	false, //object instantiation?
	waiting,
	error
}

