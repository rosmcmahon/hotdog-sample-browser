

export class Inode {
	name: string
	id: string //make this generic later
	parentId: string
	type: string
	contentType: string
	isUploaded: InodeStatus = InodeStatus.false
	isUploadedMesssages: string
	//constructor(){}
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
}

export enum InodeStatus {
	true,
	false, //object instantiation?
	waiting,
	error
}

