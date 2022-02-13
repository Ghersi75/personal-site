import { Contract } from "ethers";

export interface ERC721Contract {
    name: string,
    contract: Contract,
    address: string,
    abi: string,
    filePath: string,
    logFilePath: string,
    resultSnapshot: string,
    highestNumToken: number
}