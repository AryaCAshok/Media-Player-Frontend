import { serverURL } from "./serverURLnew";
import { commonAPI } from "./commonAPI";

// 1) upload video

export const uploadVideo =async(reqBody)=>{
   return await commonAPI('POST',`${serverURL}/videos`,reqBody)
}

// 2)get all Videos

export const getAllVideos=async()=>{
   return await commonAPI('GET',`${serverURL}/videos`,"")
}

// 3) delete video

export const deleteVideo=async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}

// 4)add to watch history

export const addToHistory = async(videoDetails)=>{
   return await commonAPI('POST',`${serverURL}/history`,videoDetails)
}

//5) get all watch history
export const getAllWatchHistory=async()=>{
   return await commonAPI('GET',`${serverURL}/history`,"")
}

// 6)Delete watch history

export const deleteWatchHistory=async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}

//7)add category

export const addCategory=async(reqBody)=>{
   return await commonAPI('POST',`${serverURL}/category`,reqBody)
}

// 8) get all categories
export const getAllCategory=async()=>{
   return await commonAPI('GET',`${serverURL}/category`,"")
}

// 9) Delete category

export const deleteCategory=async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})
}

// 10) to get details of a specific video by its Id

export const getVideoDetailsById =async(id)=>{
   return await commonAPI('GET',`${serverURL}/videos/${id}`,"")
}

// 11) update categoru with dragged videos
 export const updateCategory =async(id,body)=>{
   return await commonAPI('PUT',`${serverURL}/category/${id}`,body)
 }