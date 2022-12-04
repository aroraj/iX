import React, { Component as Com } from 'react';
import { Route, Redirect } from 'react-router-dom';

export default class GuardedRoute extends Com {
  render() {

    const { component: Component, user, ...rest } = this.props;

    console.log(user);

    return (
      <Route {...rest} render={(routeProps) => {
        return user ?
          <Component {...rest} {...routeProps} user={user} />
          :
          <Redirect to="/login" />
      }} />
    )
  }
}