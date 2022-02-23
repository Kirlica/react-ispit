import React, {useState} from 'react'
import { Form, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, getUserDetails, getUserRepos } from '../../../redux/actions';
import { Link } from "react-router-dom";


const UserSearch = () => {
    const [input, setInput] = useState('');
    const {user} = useSelector(state => ({  
        user: state.user, 
    }));
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(setUser(input));
        dispatch(getUserDetails(input));
        dispatch(getUserRepos(input));
      }

      const onInputChange = (value) => {
        setInput(value);
      };

  return (
    <div>
        <Form
            style={{marginTop: '24px'}}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            layout='vertical'>
            <Form.Item
                label="GitHub username:"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
                >
                <Input value={input} onInput={e => onInputChange(e.target.value)}/>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 10, span: 12 }}>
                <Link to='/searchResults'>
                    <Button type="primary" htmlType="submit" onClick={handleChange}>
                        Submit
                    </Button>
                </Link>
            </Form.Item>
        </Form>
    </div>
  )
}

export default UserSearch