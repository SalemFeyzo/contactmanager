import React, { Component } from 'react';
import { Consumer } from '../../context';
import axios from 'axios';
import TexetInputGroup from '../layout/TextInputGroup';

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {},
  };
  async componentDidMount() {
    const { id } = this.props.match.params; //get the id from the url so we get the single contact
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const contact = res.data;
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
    });
  }
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    //check for errors
    if (name === '') {
      this.setState({
        errors: {
          name: 'Name is rquired',
        },
      });
      return;
    }
    if (email === '') {
      this.setState({
        errors: {
          email: 'Email is rquired',
        },
      });
      return;
    }
    if (phone === '') {
      this.setState({
        errors: {
          phone: 'Phone is rquired',
        },
      });
      return;
    }
    //update contact using put method
    const updateContact = {
      name,
      email,
      phone,
    };
    const { id } = this.props.match.params;
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updateContact
    );
    dispatch({ type: 'UPDATE_CONTACT', payload: res.data });
    //clear the fields after submitting
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {},
    });
    //redirect to the home bage after submiting
    this.props.history.push('/');
  };
  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.phone]: e.target.value,
    });
  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header bg-info text-white ">
                Edit Contact
              </div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TexetInputGroup
                    lable="Name"
                    name="name"
                    id="name"
                    placeholder="Enter Name..."
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TexetInputGroup
                    lable="Email"
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Enter Email..."
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TexetInputGroup
                    lable="Phone"
                    name="phone"
                    id="phone"
                    placeholder="Enter Phone..."
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Update Contact"
                    className="btn btn-outline-primary btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default EditContact;
