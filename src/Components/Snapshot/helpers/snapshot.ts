// alchemy key for calling contract functions
import { alchemyKey } from "./vars";
import { ERC721Contract } from "./config";
import { ethers } from "ethers";
import {
    Multicall,
    ContractCallResults,
    ContractCallContext
} from "ethereum-multicall";

const provider = ethers.getDefaultProvider(alchemyKey);
// tryAggregate true will keep running if any of them fail. Default behavior would throw error after 1 fail
const multicall = new Multicall({ ethersProvider: provider, tryAggregate: true });

const snapshot = async (data: ERC721Contract) => {
    let calls = [];
    
}