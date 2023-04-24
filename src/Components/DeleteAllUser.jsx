import React from 'react'
import styled from 'styled-components'
import { deleteUser } from '../store/slice/UserSlice'
import { useDispatch } from 'react-redux'


const DeleteAllUser = () => {

  const dispatch = useDispatch();


  const deleteUsers = ()=>{
    dispatch(deleteUser());
  }
  return (
    <>
    <Wrapper>
    <button className='btn clear-btn' onClick={deleteUsers}>Clear All</button>
    
    </Wrapper>
    </>

    )
}

const Wrapper = styled.section`
.clear-btn{
  text-transform:capitalize;
  background-color: #db338a;
  margin-top:2rem;
}

`

export default DeleteAllUser