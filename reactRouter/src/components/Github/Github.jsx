import { useLoaderData } from "react-router-dom";


function Github() {
  
  const data = useLoaderData()
 

  return (
    <div className="text-center m-4 bg-black text-white p-4 text-3xl">
      Github Repos: {data.public_repos}
      <img src={data.avatar_url} width={300} alt="" />
    </div>
  );
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Madhesh21");
  return response.json()
}



