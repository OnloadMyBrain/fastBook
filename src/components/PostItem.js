import React from 'react';

export default class PostItem extends React.Component {
  // detailContent = e => {
  //   this.props.detailValue(this.props.body);
  // };
  handleChangeView = e => {
    this.props.idComunity(this.props.id, this.props.body);
    this.props.detailValue(this.props.body);
  };

  render() {
    const { id, privateMode, body, submitTime } = this.props;
    return (
      <li key={id} onClick={this.handleChangeView}>
        <a href="#none" class="memo-side__link">
          {
            privateMode ? (
              <strong className="memo-side__title">잠겨있음</strong>
            ) : (
                <strong className="memo-side__title">{body}</strong>
              )
          }
          <span class="memo-side__date">{submitTime}</span>
        </a>
      </li>
    );
  }
}
