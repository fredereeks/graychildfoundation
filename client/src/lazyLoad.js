import {lazy} from 'react'

export const lazyLoad = (path) => {
    console.log({path})
    return lazy(async() => {
        const promise = import(path)
        return promise;
        // console.log({promise})
        // // eslint-disable-next-line
        // if(namedExport === null){
        //     return promise
        // }
        // else{
        //     return promise.then(module => ({default: module[namedExport]}))
        // }
    })
}