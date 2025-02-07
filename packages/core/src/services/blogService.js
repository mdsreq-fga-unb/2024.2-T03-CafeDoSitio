import axios from "axios";
import { ROUTE } from "./RouteConstant";

const baseURL = ROUTE.DEV;

export function createBlog(titulo) {
  
  const body = {
    titulo: titulo,
    status: "rascunho",
    slug: titulo.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""),
  };

  const response = axios.post(`${baseURL}/blog`, 
    body,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
      }
    });

    return response;
};

export function findBlogById(_id) {
  const response = axios.get(`${baseURL}/blog/${_id}`);
  return response;
};

export function patchBlog(_id, body) {
  console.log(body);
  const response = axios.patch(`${baseURL}/blog/${_id}`,
    body,
    {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
    },
  });

  return response;
};


export function deleteBlog(_id) {
  const response = axios.delete(`${baseURL}/blog/${_id}`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
    },
  });

  return response;
}

export async function filterBlogs(page = 1, limit = 5, status = "all", title = "", tag = "") {
  const queryParams = new URLSearchParams();

  queryParams.append("page", page);
  queryParams.append("limit", limit);

  if (status !== "all") {
    queryParams.append("status", status);
  }

  if (title.trim() !== "") {
    queryParams.append("title", title);
  }

  if (tag.trim() !== "") {
    queryParams.append("tag", tag);
  }

  const response = await axios.get(`${baseURL}/blogFilter?${queryParams.toString()}`);
  return response.data;
}

export async function filterBlogsBasicUser(page = 1, limit = 5, title = "", tag = "") {
  const queryParams = new URLSearchParams();

  queryParams.append("page", page);
  queryParams.append("limit", limit);

  if (title.trim() !== "") {
    queryParams.append("title", title);
  }

  if (tag.trim() !== "") {
    queryParams.append("tag", tag);
  }

  const response = await axios.get(`${baseURL}/blogFilter/basic?${queryParams.toString()}`);
  return response.data;
}