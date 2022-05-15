import React, { useState } from "react";
import { Container, Input, InputGroup, Button } from "reactstrap";
import { AiOutlineSearch } from "react-icons/ai";
import Axios from "axios";
import Display from "./Display";

const Search = () => {
  const [user, setUser] = useState(null);
  const [githubUserData, setGithubUserData] = useState([]);
  const githubUrl = "https://api.github.com/users";

  const getUser = async (user) => {
    await Axios.get(`${githubUrl}/${user}`).then((response) =>
      setGithubUserData(response.data)
    );
  };

  const inputChange = (e) => {
    e.preventDefault();
    setUser(e.target.value);
  };

  return (
    <>
      <Container d-flex justify-content-center align-items-center w-25>
        <InputGroup size="large" w-25>
          <Input placeholder="username" onChange={inputChange} />
          <Button color="primary" onClick={() => getUser(user)}>
            Search
            <span>
              <AiOutlineSearch />
            </span>
          </Button>
        </InputGroup>
      </Container>
      <Display githubUserData={githubUserData} />
    </>
  );
};

export default Search;
