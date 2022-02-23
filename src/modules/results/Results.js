import React from 'react'
import Header from './components/Header';
import Details from './components/Details';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';
import { Link } from "react-router-dom";
import { resetUser, resetUserDetails, resetUserRepos } from '../../redux/actions';

const Results = () => {
    const {userDetails, userRepos} = useSelector(state => ({  
        userDetails: state.userDetails,
        userRepos: state.userRepos, 
    }));
    const dispatch = useDispatch();

    const handleReset = () => {
        dispatch(resetUser());
        dispatch(resetUserDetails());
        dispatch(resetUserRepos());
    }

  return (
    <div className='resultsWrap'>
        <Header avatar={userDetails.avatar_url} bio={userDetails.bio} location={userDetails.location} name={userDetails.name}/>
        <Details repos={userRepos}/>
        <Link to='/'>
            <Button className='btn' type='primary' onClick={handleReset}>Reset</Button>
        </Link>
    </div>
  )
}

export default Results