import { urls } from "../constants/constants";

export const useFetchPokemon = async(dexNum)=>{
    
    const response =await fetch(`{urls.pkemonPath}/${dexNum}`)
    const data=await response.json()
    const{name, sprites:{front_default: ing}}=data
    


    return[            
        name,
        img
    ]
}