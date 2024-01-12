const url="https://assr-6kka-t1lt8pfue-farhanaislams-projects.vercel.app/"
export const getData=async()=>{
    try{
        const query=await fetch(`${url}/api/blogs`);
        const data=await query.json();
        return data;
        

    }
    catch(error){
        return error;
    }

}
export const getEvents=async()=>{
    try{
        const query=await fetch(`${url}/api/events`);
        const data=await query.json();
        return data;

    }
    catch(error){
        return error;
    }

}
export const getEventsById=async(id:any)=>{
    try{
        const query=await fetch(`${url}/api/events/${id}`);
        const data=await query.json();
        return data;

    }
    catch(error){
        return error;
    }

}
export const getEventsYear=async(year:any)=>{
    try{
        const query=await fetch(`${url}/api/events/${year}`)
        const data=query.json();
        return data;

    }
    catch(error){
        return error;
    }
}
export const getEventsYearnCat=async(year:any,cat:any)=>{
    try{
        const query=await fetch(`${url}/api/events/${year}/${cat}`)
        const data=query.json();
        return data;

    }
    catch(error){
        return error;
    }

}