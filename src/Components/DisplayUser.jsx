import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/slice/UserSlice";

const DisplayUsers = () => {
  const dispatch = useDispatch();

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  const data = useSelector((state) => {
    return state.users;
    // ye store me jo reducer ke ander naam likha ho vo hota hai.
  });

  console.log(data);
  return (
    <Wrapper>
      {data.map((user, id) => {
        return (
          <li key={id}>
            {user}
            <button className="btn btn-delete" onClick={() => deleteUser(id)}>
              delete
            </button>
          </li>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;

    &:first-child {
      border-top: 1px solid #eee;
    }
  }

  .btn-delete {
    background-color: transparent;
    border: 0;
    color: #fff;
  }
`;

export default DisplayUsers;
