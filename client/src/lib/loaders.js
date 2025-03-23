import axiosInstance from "./axios";

export const singlePageLoader = async ({request, params}) => {
  const res = await axiosInstance("/posts/"+params.id);
  return res.data;
}

export const listPageLoader = async ({request, params}) => {
  const query = request.url.split("?")[1];
  const res = await axiosInstance("/posts?" + query);
  return res.data; 
}

export const profilePageLoader = async () => {
  const res = await axiosInstance("/users/profilePosts");
  return res.data; 
}