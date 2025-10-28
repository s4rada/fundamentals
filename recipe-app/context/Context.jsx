import { createContext, useState } from "react";

export const GlobalContext = createContext(null)

export default function GlobalState({children}){
    const [searchParam,setSearchParam] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [recipeList, setRecipeList] = useState([])
    async function HandleSubmit(e) {
        e.preventDefault()
        
        try{
            setIsLoading(true)
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}&key=f222b23c-3be7-4540-b313-64d980c206a1`)
            const data = await res.json()
            // console.log(data?.data?.recipes)
            if (data && data.data && data.data.recipes) {
                setRecipeList(data.data.recipes)
                // console.log("Recipes set:", data.data.recipes)
            }             
            else {
                console.log("No recipes found in response")
                setRecipeList([]) 
            }
            console.log(isLoading,recipeList)
        }catch(e){
            console.log(e);
            setIsLoading(false)
            setSearchParam('')
        }finally{
            setIsLoading(false)
            setSearchParam('')
        }        
    }
    return <GlobalContext.Provider value={{searchParam,setSearchParam,HandleSubmit,isLoading,searchParam, recipeList}}>{children}</GlobalContext.Provider>
}