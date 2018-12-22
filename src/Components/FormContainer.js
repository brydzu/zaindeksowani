import React, {Component} from 'react';

import Field from './field';
import Button from './button';

class FormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      name = '',
      email = '',
      message = '',
    };
    this.updateField = this.updateField.bind(this);
  }
  updateField(field, value) {
    this.setState({ [field]: value });

  }

  render() {
    return (
      <div>
        <Field
          onChange={(event) => this.updateField('name', event.target.value)}
          value={this.state.name} />
        <Field
          onChange={(event) => this.updateField('email', event.target.value)}
          value={this.state.email} />
        <Field
          textArea={true}
          onChange={(event) => this.updateField('message', event.target.value)}
          value={this.state.message} />
        <Button formValues={this.state} email="brydzu@gmail.com" />
      </div>
    );
  }
}
